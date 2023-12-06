import { useMedia } from 'tamagui';

import { Icon, Input, Stack, Text, XStack } from '@onekeyhq/components';
import {
  HeaderButtonGroup,
  HeaderIconButton,
} from '@onekeyhq/components/src/Navigation/Header';

function HeaderLeftToolBar({
  url,
  canGoBack,
  canGoForward,
  loading,
  goBack,
  goForward,
  stopLoading,
  reload,
  onSearch,
  isBookmark,
  onBookmarkPress,
  isPinned,
  onPinnedPress,
}: {
  url: string;
  canGoBack?: boolean;
  canGoForward?: boolean;
  loading?: boolean;
  goBack?: () => void;
  goForward?: () => void;
  stopLoading?: () => void;
  reload?: () => void;
  onSearch?: () => void;
  isBookmark?: boolean;
  onBookmarkPress?: (bookmark: boolean) => void;
  isPinned?: boolean;
  onPinnedPress?: (pinned: boolean) => void;
}) {
  const media = useMedia();

  if (media.md) {
    return (
      <Stack
        flex={1}
        alignItems="center"
        flexDirection="row"
        onPress={() => onSearch?.()}
        mr="$4"
        bg="$bgStrong"
        py="$2"
        px="$2.5"
        borderRadius="$full"
        pressStyle={{
          bg: '$bgActive',
        }}
      >
        <Icon size="$5" color="$iconSubdued" name="LockSolid" />
        <Text variant="$textLg" flex={1} numberOfLines={1} ml="$2">
          {url}
        </Text>
      </Stack>
    );
  }
  return (
    <XStack alignItems="center" justifyContent="center" pl="$2">
      <HeaderButtonGroup>
        <HeaderIconButton
          icon="ChevronLeftOutline"
          disabled={!canGoBack}
          testID="browser-bar-go-back"
          onPress={goBack}
        />
        <HeaderIconButton
          icon="ChevronRightOutline"
          disabled={!canGoForward}
          testID="browser-bar-go-forward"
          onPress={goForward}
        />
        <HeaderIconButton
          icon={loading ? 'CrossedLargeOutline' : 'RotateClockwiseOutline'}
          onPress={loading ? stopLoading : reload}
          testID={`action-header-item-${loading ? 'stop-loading' : 'reload'}`}
        />
      </HeaderButtonGroup>
      <Input
        containerProps={{ ml: '$6', w: '$80' }}
        size="small"
        leftIconName="LockSolid"
        value={url}
        addOns={[
          {
            iconName: isBookmark ? 'StarSolid' : 'StarOutline',
            onPress: () => onBookmarkPress?.(!isBookmark),
            testID: `action-header-item-${
              !isBookmark ? 'bookmark' : 'remove bookmark'
            }
            `,
          },
          {
            iconName: isPinned ? 'ThumbtackSolid' : 'ThumbtackOutline',
            onPress: () => onPinnedPress?.(!isPinned),
            testID: `action-header-item-${!isPinned ? 'pin' : 'un-pin'}`,
          },
        ]}
      />
    </XStack>
  );
}

export default HeaderLeftToolBar;
