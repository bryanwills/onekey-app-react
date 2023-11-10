import type { RefObject } from 'react';
import { useCallback, useMemo, useRef, useState } from 'react';

import { Freeze } from 'react-freeze';
import { captureRef } from 'react-native-view-shot';
import { Stack } from 'tamagui';

import type { IPageNavigationProp } from '@onekeyhq/components/src/Navigation';
import useAppNavigation from '@onekeyhq/kit/src/hooks/useAppNavigation';
import { ModalRoutes } from '@onekeyhq/kit/src/routes/Root/Modal/Routes';

import MobileBrowserBottomBar from '../../components/MobileBrowser/MobileBrowserBottomBar';
import WebContent from '../../components/WebContent/WebContent';
import { THUMB_HEIGHT, THUMB_WIDTH } from '../../config/TabList.constants';
import useWebTabAction from '../../hooks/useWebTabAction';
import {
  useActiveTabId,
  useWebTabData,
  useWebTabs,
} from '../../hooks/useWebTabs';
import {
  type DiscoverModalParamList,
  DiscoverModalRoutes,
} from '../../router/Routes';
import { homeTab } from '../../store/contextWebTabs';
import { webviewRefs } from '../../utils/explorerUtils';
import { onItemSelect } from '../../utils/gotoSite';
import { getScreenshotPath, saveScreenshot } from '../../utils/screenshot';
import DiscoveryDashboard from '../Dashboard';

import type WebView from 'react-native-webview';
import type { TamaguiElement } from 'tamagui';

function MobileBrowserContent({ id }: { id: string }) {
  const navigation =
    useAppNavigation<IPageNavigationProp<DiscoverModalParamList>>();
  const { tabs } = useWebTabs();
  const { tab } = useWebTabData(id);
  const { activeTabId } = useActiveTabId();
  const [backEnabled, setBackEnabled] = useState(false);
  const [forwardEnabled, setForwardEnabled] = useState(false);
  const captureViewRef = useRef<TamaguiElement | null>();
  const { setWebTabData } = useWebTabAction();

  const isActive = useMemo(
    () => activeTabId === tab?.id,
    [tab?.id, activeTabId],
  );
  const showHome = useMemo(
    () => isActive && tab?.url === homeTab.url,
    [isActive, tab?.url],
  );
  const tabCount = useMemo(() => tabs?.length ?? 0, [tabs.length]);

  const takeScreenshot = useCallback(
    async () =>
      new Promise<boolean>((resolve, reject) => {
        captureRef(captureViewRef, {
          format: 'jpg',
          quality: 0.2,
          width: THUMB_WIDTH,
          height: THUMB_HEIGHT,
        })
          .then(async (imageUri) => {
            const path = getScreenshotPath(`${tab?.id}.jpg`);
            void setWebTabData({
              id: tab?.id,
              thumbnail: path,
            });
            void saveScreenshot(imageUri, path);
            resolve(true);
          })
          .catch((e) => {
            console.log('capture error e: ', e);
            reject(e);
          });
      }),
    [captureViewRef, setWebTabData, tab?.id],
  );

  const onShowTabList = useCallback(async () => {
    try {
      await takeScreenshot();
    } catch (e) {
      console.log(e);
    }
    navigation.pushModal(ModalRoutes.DiscoverModal, {
      screen: DiscoverModalRoutes.MobileTabList,
    });
  }, [navigation, takeScreenshot]);

  const BrowserBottomBar = useMemo(
    () => (
      <Freeze key={`${id}-BottomBar`} freeze={!isActive}>
        <MobileBrowserBottomBar
          id={id}
          tabCount={tabCount}
          goBack={() => {
            (webviewRefs[id]?.innerRef as WebView)?.goBack();
          }}
          goForward={() => {
            (webviewRefs[id]?.innerRef as WebView)?.goForward();
          }}
          canGoBack={backEnabled}
          canGoForward={forwardEnabled}
          onShowTabList={onShowTabList}
        />
      </Freeze>
    ),
    [id, backEnabled, forwardEnabled, isActive, tabCount, onShowTabList],
  );

  const content = useMemo(() => {
    if (!tab || !tab?.id) {
      return null;
    }
    return (
      <>
        <Freeze freeze={!showHome}>
          <Stack flex={1}>
            <DiscoveryDashboard onItemSelect={onItemSelect} />
          </Stack>
        </Freeze>
        <Freeze key={tab.id} freeze={!isActive}>
          <Stack ref={captureViewRef as RefObject<TamaguiElement>} flex={1}>
            <WebContent
              id={tab.id}
              url={tab.url}
              isCurrent={isActive}
              setBackEnabled={setBackEnabled}
              setForwardEnabled={setForwardEnabled}
            />
          </Stack>
        </Freeze>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, isActive, showHome]);
  return (
    <>
      {content}
      {BrowserBottomBar}
    </>
  );
}

export default MobileBrowserContent;
