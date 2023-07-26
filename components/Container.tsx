import React from 'react'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
    children: React.ReactNode
    className?: string
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({
  children,
  className
}, ref)=>{
  return (
    <div ref={ref} className={twMerge('bg-white py-20',className)}>
      {children}
    </div>
  )
}) 

export default Container