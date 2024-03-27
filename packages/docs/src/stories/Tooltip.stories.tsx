import type { StoryObj, Meta } from "@storybook/react";
import { Text, Tooltip, TooltipProps } from "@marlon_chio-ui/react";

export default {
  title: "Data display/Tooltip",
  component: Tooltip,

  args: {
    triggerElement: <Text>Open tooltip</Text>,
    content: "Tooltip text",
  },

  argTypes: {
    triggerElement: {
      control: {
        type: null,
      },
    },
    content: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};