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
        <button type={type} className={twMerge('py-3 px-8 bg-orange-500 uppercase text-white font-medium', className)} ref={ref} disabled={disabled} {...props}>
            {children}
        </button>
    )
})

Button.displayName = 'Button'

export default Button
