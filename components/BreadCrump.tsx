'use client'

import Container from './Container'
import Button from './Button'

import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

type BreadCrumpProps = {
    children: React.ReactNode
}

const BreadCrump: React.FC<BreadCrumpProps> = ({children}) => {

  const router = useRouter()

  return (
    <Container sectionClasses='bg-neutral-200 py-8' innerClasses='container'>
        <h2 className='block text-2xl capitalize font-semibold mb-4'>{children}</h2>
        <Button onClick={()=>router.back()} className='flex items-center gap-x-2 w-fit border-b-2 border-black pb-1'>
            <span><BsArrowLeft/></span>
            <p>back</p>
        </Button>
    </Container>
  )
}

export default BreadCrump