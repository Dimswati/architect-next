import Link from 'next/link'

import { BsArrowRight } from 'react-icons/bs'

const TeamMember = ({ id, imageUrl, name, position, description }: TeamMember) => {
  
  return (
    <div className='border border-neutral-200 transition group'>
        <img src={imageUrl} className='object-cover object-center mb-5 w-full sm:max-h-56' alt={name}/>
        <div className='mx-4 '>
            <h2 className='text-2xl font-bold text-neutral-900 leading-9'>{name}</h2>
            <span className='italic text-orange-600'>{position}</span>
            <p className='mt-4'>{description}</p>
            <div className='my-4 hover:text-orange-600 text-sm flex items-center gap-x-3'>
                <Link href={`/team/${id}`}>View Profile</Link>
                <BsArrowRight/>
            </div>
        </div>
    </div>
  )
}

export default TeamMember