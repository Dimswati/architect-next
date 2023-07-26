import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    children,
    className,
    type = 'text',
    ...props
}, ref)=>{
    return (
        <input type={type} className={twMerge('w-full bg-neutral-100 border-gray-300 focus:ring-0 focus:outline-none focus:bg-white focus:border-orange-500', className)} ref={ref} {...props}/>
    )
})

Input.displayName = 'Input'

export default Input