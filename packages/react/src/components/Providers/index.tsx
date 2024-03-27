import * as RadixToast from '@radix-ui/react-toast'
import { ComponentProps, ReactNode } from 'react'

export interface ToastProviderProps
    extends ComponentProps<typeof RadixToast.Provider> {
    children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
    return <RadixToast.Provider>{children}</RadixToast.Provider>
}

