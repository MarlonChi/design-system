import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@MarlonChi-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'lorem ipsum dolor sit amet, consectetur adipiscing',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
