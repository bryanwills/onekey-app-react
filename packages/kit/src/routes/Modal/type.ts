import type { IAccountManagerStacksParamList } from '../../views/AccountManagerStacks/router/types';
import type { IModalAssetDetailsParamList } from '../../views/AssetDetails/router/types';
import type { IModalAssetListParamList } from '../../views/AssetList/router/types';
import type { IChainSelectorParamList } from '../../views/ChainSelector/router/type';
import type { IDiscoveryModalParamList } from '../../views/Discovery/router/Routes';
import type { IOnboardingParamList } from '../../views/Onboarding/router/type';
import type { IModalReceiveParamList } from '../../views/Receive/router/type';
import type { IScanQrCodeModalParamList } from '../../views/ScanQrCode/router/type';
import type { IModalSendParamList } from '../../views/Send/router';
import type { IModalSettingParamList } from '../../views/Setting/router/types';
import type { ITestModalPagesParam } from '../../views/TestModal/router/type';
import type { IWalletConnectPagesParam } from '../../views/WalletConnect/router';

export enum EModalRoutes {
  MainModal = 'MainModal',
  DiscoveryModal = 'DiscoveryModal',
  SettingModal = 'SettingModal',
  TestModal = 'TestModal',
  AccountManagerStacks = 'AccountManagerStacks',
  OnboardingModal = 'OnboardingModal',
  ChainSelectorModal = 'ChainSelectorModal',
  SendModal = 'SendModal',
  WalletConnectModal = 'WalletConnectModal',
  ReceiveModal = 'ReceiveModal',
  ScanQrCodeModal = 'ScanQrCodeModal',
}

export type IModalParamList = {
  [EModalRoutes.MainModal]: IModalAssetListParamList &
    IModalAssetDetailsParamList;
  [EModalRoutes.TestModal]: ITestModalPagesParam;
  [EModalRoutes.DiscoveryModal]: IDiscoveryModalParamList;
  [EModalRoutes.SettingModal]: IModalSettingParamList;
  [EModalRoutes.AccountManagerStacks]: IAccountManagerStacksParamList;
  [EModalRoutes.OnboardingModal]: IOnboardingParamList;
  [EModalRoutes.ChainSelectorModal]: IChainSelectorParamList;
  [EModalRoutes.SendModal]: IModalSendParamList;
  [EModalRoutes.WalletConnectModal]: IWalletConnectPagesParam;
  [EModalRoutes.ReceiveModal]: IModalReceiveParamList;
  [EModalRoutes.ScanQrCodeModal]: IScanQrCodeModalParamList;
};
