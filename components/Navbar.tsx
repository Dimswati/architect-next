'use client'

import { GrClose } from 'react-icons/gr'
import { SlMenu } from 'react-icons/sl'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import MenuItem from './MenuItem'

const Navbar = ({children}: {children: React.ReactNode}) => {

    const menuItems = [
        {
            path: 'team',
            isActive: false
        },
        {
            path: 'services',
            isActive: false
        },
        {
            path: 'projects',
            isActive: false
        },
        {
            path: 'contact',
            isActive: false
        }
    ]

    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [menu, setMenu] = useState(menuItems) 

    const pathname = usePathname()

    useEffect(()=>{
        setOpenMenu(false)
    }, [pathname])

  return (
    <>
       {children}
       <header className='md:py-8 py-7 bg-white z-50 sticky top-0 border-b border-neutral-200'>
        <div className='container justify-between items-center flex'>
            <img src="http://a.ourhtmldemo.com/decorators/wp-content/themes/decorators/images/logo.png" className='object-cover object-center md:w-48 w-40 h-auto cursor-pointer' alt="logo" />
            <div className='md:flex lg:gap-x-4 gap-x-2 hidden'>
                {menuItems.map(({path, isActive}) => (
                    <MenuItem key={path} path={path} isActive={isActive}/>
                ))}
            </div>
            <div className='text-2xl md:hidden inline-block cursor-pointer' onClick={()=>setOpenMenu(!openMenu)}>
                {openMenu ? (
                    <GrClose/>
                ): <SlMenu/>}
            </div>
        </div>
        {openMenu && (
        <div className='absolute bg-white top-20 md:hidden block w-full'>
            <div className='container flex flex-col gap-y-4 text-lg font-medium py-4'>
                {
                    menuItems.map(({path, isActive}) => (
                        <MenuItem path={path} isActive={isActive}/>
                    ))
                }
            </div>
        </div>
        )}
       </header>
    </>
  )
}

export default Navbar