import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    theme: themes.dark,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
