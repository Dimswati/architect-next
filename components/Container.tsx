import React from 'react'
import { twMerge } from 'tailwind-merge'

type ContainerProps = {
    children: React.ReactNode
    sectionClasses?: string
    innerClasses?: string 
}

const Container: React.FC<ContainerProps> = ({ children, innerClasses, sectionClasses }: ContainerProps) => {
  return (
    <section className={twMerge(`bg-white py-20`, sectionClasses)}>
        <div className={twMerge(``, innerClasses)}>
            {children}
        </div>
    </section>
  )
}

export default Container