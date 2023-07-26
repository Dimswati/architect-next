'use client'

import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref)=>{
    return (
        <button type={type} className={twMerge('uppercase font-medium py-4', className)} ref={ref} disabled={disabled} {...props}>
            {children}
        </button>
    )
})

Button.displayName = 'Button'

export default Button
