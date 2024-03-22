import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@MarlonChi-ui/react'

export default {
  title: 'Typography/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/MarlonChi.png',
    alt: 'Marlon Chiodelli',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
