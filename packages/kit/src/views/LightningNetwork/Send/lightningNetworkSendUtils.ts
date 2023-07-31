import type { Dispatch, SetStateAction } from 'react';

import { ToastManager } from '@onekeyhq/components';
import type { Account } from '@onekeyhq/engine/src/types/account';
import type { Token } from '@onekeyhq/engine/src/types/token';
import type { IEncodedTxLightning } from '@onekeyhq/engine/src/vaults/impl/lightning-network/types';
import type { ITransferInfo } from '@onekeyhq/engine/src/vaults/types';

import backgroundApiProxy from '../../../background/instance/backgroundApiProxy';
import {
  ModalRoutes,
  RootRoutes,
  SendModalRoutes,
} from '../../../routes/routesEnum';

import type { SendRoutesParams } from '../../../routes';
import type { ModalScreenProps } from '../../../routes/types';
import type { Network } from '../../../store/typings';
import type { IntlShape } from 'react-intl';

type NavigationProps = ModalScreenProps<SendRoutesParams>;

async function lightningNetworkSendConfirm({
  toVal,
  network,
  networkId,
  account,
  accountId,
  transferInfo,
  tokenInfo,
  navigation,
  setIsLoadingAssets,
  intl,
}: {
  toVal: string;
  network: Network | null | undefined;
  networkId: string;
  account: Account | undefined;
  accountId: string;
  transferInfo: ITransferInfo;
  tokenInfo: Token | undefined;
  navigation: NavigationProps['navigation'];
  setIsLoadingAssets: Dispatch<SetStateAction<boolean>>;
  intl: IntlShape;
}) {
  const { serviceLightningNetwork, engine } = backgroundApiProxy;
  try {
    const isZeroAmount = await serviceLightningNetwork.isZeroAmountInvoice({
      payReq: toVal,
      networkId,
      accountId,
    });
    if (isZeroAmount) {
      navigation.navigate(RootRoutes.Modal, {
        screen: ModalRoutes.Send,
        params: {
          screen: SendModalRoutes.PreSendAmount,
          params: {
            ...transferInfo,
            networkId,
            accountId,
            to: toVal,
          },
        },
      });
      return;
    }
    setIsLoadingAssets(true);
    const encodedTx = await engine.buildEncodedTxFromTransfer({
      networkId,
      accountId,
      transferInfo: {
        ...transferInfo,
        to: toVal,
      },
    });

    navigation.navigate(SendModalRoutes.SendConfirm, {
      accountId,
      networkId,
      encodedTx,
      feeInfoUseFeeInTx: false,
      feeInfoEditable: true,
      backRouteName: SendModalRoutes.PreSendAddress,
      // @ts-expect-error
      payload: {
        payloadType: 'Transfer',
        account,
        network,
        token: {
          ...tokenInfo,
          sendAddress: transferInfo.tokenSendAddress,
          idOnNetwork: tokenInfo?.tokenIdOnNetwork ?? '',
        },
        to: toVal,
        value: (encodedTx as IEncodedTxLightning).amount,
        isMax: false,
      },
    });
  } catch (e: any) {
    console.error('lightningNetworkSendConfirm ERROR: ', e);

    const { key: errorKey = '' } = e;
    if (errorKey === 'form__amount_invalid') {
      ToastManager.show(
        {
          title: intl.formatMessage(
            { id: 'form__amount_invalid' },
            { 0: tokenInfo?.symbol ?? '' },
          ),
        },
        { type: 'error' },
      );
    } else if (errorKey) {
      ToastManager.show(
        {
          title: intl.formatMessage({ id: errorKey }),
        },
        { type: 'error' },
      );
    } else {
      ToastManager.show(
        { title: typeof e === 'string' ? e : (e as Error).message },
        { type: 'error' },
      );
    }
  } finally {
    setIsLoadingAssets(false);
  }
}

export { lightningNetworkSendConfirm };
