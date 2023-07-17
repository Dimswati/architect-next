import React from 'react'
import Link from 'next/link'

const Service = ({ id ,service, description, imageUrl }: Service): React.ReactElement => {
  return (
    <div className='border border-neutral-200 bg-white group hover:drop-shadow-md transition-all duration-300'>
        <img src={imageUrl} className='object-cover object-center mb-5 w-full h-auto' alt={service}/>
        <div className='mr-4 ml-6'>
            <h2 className='text-2xl font-bold text-neutral-700 leading-9 group-hover:text-orange-600'>{service}</h2>
            <p className='mt-4 text-neutral-600'>{description}</p>
            <div className='uppercase font-bold text-neutral-700 my-4 hover:text-orange-600 w-fit cursor-pointer'>
                <Link href={`/services/${id}`} className=''>read more</Link>
            </div>
        </div>
    </div>
  )
}

export default Service