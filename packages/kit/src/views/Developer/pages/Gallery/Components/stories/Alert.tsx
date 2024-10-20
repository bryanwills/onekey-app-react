import { Alert, YStack } from '@onekeyhq/components';

import { Layout } from './utils/Layout';

const ButtonsGallery = () => (
  <Layout
    description="..."
    suggestions={[]}
    boundaryConditions={[]}
    elements={[
      {
        title: 'State',
        element: (
          <YStack gap="$4">
            <Alert
              title="Title"
              description="Description here..."
              icon="PlaceholderOutline"
            />
            <Alert
              type="success"
              title="Title"
              description="Description here..."
              icon="PlaceholderOutline"
            />
            <Alert
              type="critical"
              title="Title"
              description="Description here..."
              icon="PlaceholderOutline"
            />
            <Alert
              type="info"
              title="Title"
              description="Description here..."
              icon="PlaceholderOutline"
            />
            <Alert
              type="warning"
              title="Title"
              description="Description here..."
              icon="PlaceholderOutline"
            />
          </YStack>
        ),
      },
      {
        title: 'Dismiss',
        element: (
          <YStack gap="$4">
            <Alert
              title="Title"
              description="Description here..."
              icon="PlaceholderOutline"
              closable
            />
          </YStack>
        ),
      },
      {
        title: 'Actions',
        element: (
          <YStack gap="$4">
            <Alert
              title="Title"
              description="Description here..."
              icon="PlaceholderOutline"
              action={{ primary: 'Action' }}
            />
            <Alert
              title="Title"
              description="Description here..."
              icon="PlaceholderOutline"
              action={{
                primary: 'Action',
                onPrimaryPress() {
                  alert('primary');
                },
                secondary: 'Learn More',
                onSecondaryPress() {
                  alert('secondary');
                },
              }}
            />
          </YStack>
        ),
      },
      {
        title: 'fullBleed',
        element: (
          <YStack gap="$4">
            <Alert
              fullBleed
              title="fullBleed"
              description="Description here..."
              icon="PlaceholderOutline"
              action={{ primary: 'Action' }}
            />
          </YStack>
        ),
      },
    ]}
  />
);

export default ButtonsGallery;
