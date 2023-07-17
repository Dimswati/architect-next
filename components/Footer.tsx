import Link from "next/link"
import Container from "./Container"

const Footer = () => {
  return (
    <Container sectionClasses="bg-neutral-900 py-4" innerClasses="container flex md:flex-row flex-col gap-y-6 justify-between items-center text-neutral-400">
      <p>Copyrights &#169; 2022 All Rights Reserved by</p>
      <div className="flex gap-x-6 text-base">
        <Link href='/projects' className='hover:text-orange-500'>Projects</Link>
        <Link href='/team' className='hover:text-orange-500'>Team</Link>
        <Link href='/services' className='hover:text-orange-500'>Services</Link>
        <Link href='/contact' className='hover:text-orange-500'>Contact</Link>
      </div>
    </Container>
  )
}

export default Footer