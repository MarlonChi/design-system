import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@marlon_chio-ui/react'

export default {
  title: 'Typography/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/MarlonChi.png',
    alt: 'Marlon Chiodelli',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
