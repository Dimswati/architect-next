import { CiMail, CiPhone, CiClock2 } from 'react-icons/ci'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const Topbar = () => {
  return (
    <div className='py-2 bg-black text-white text-sm sm:block hidden'>
            <div className='container flex flex-wrap-reverse gap-y-4 justify-center md:flex-nowrap  md:gap-x-10 md:justify-end'>
                <ul className='flex md:gap-x-6 gap-x-4 md:flex-nowrap flex-wrap justify-center gap-y-3'>
                    <li className='flex gap-2 items-center'>
                        <CiMail/>
                        <span>Contact@Decorators.com</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <CiPhone/>
                        <span>Toll Free: +1 212-212-2376</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <CiClock2/>
                        <span>Mon - Fri : 9:00 -1700</span>
                    </li>
                </ul>
                <div className='flex gap-x-2'>
                    <div className='border-2 border-neutral-700 hover:border-orange-600 p-2.5 hover:bg-orange-600 rounded-full cursor-pointer'>
                        <FaFacebookF/>
                    </div>
                    <div className='border-2 border-neutral-700 hover:border-orange-600 p-2.5 hover:bg-orange-600 rounded-full cursor-pointer'>
                        <FaTwitter/>
                    </div>
                    <div className='border-2 border-neutral-700 hover:border-orange-600 p-2.5 hover:bg-orange-600 rounded-full cursor-pointer'>
                        <FaLinkedinIn/>
                    </div>
                </div>
            </div>
       </div>
  )
}

export default Topbar