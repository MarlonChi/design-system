import { Button, Toast, ToastProps, ToastProvider } from '@marlon_chio-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    title: 'Toast Title',
    content: 'Toast Content',
  },
  decorators: [
    (_, { allArgs }) => {
      const [open, setOpen] = useState(false)

      const ToggleToast = (newState: boolean) => {
        setOpen(newState)
      }

      return (
        <ToastProvider>
          <Button onClick={() => ToggleToast(true)}>
            Open toast
          </Button>
          <Toast open={open} onOpenChange={ToggleToast} {...allArgs}/>
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}