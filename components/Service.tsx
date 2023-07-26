import Link from 'next/link'
import Image from 'next/image'

import { ServiceFragment } from '@/gql/graphql'

const Service: React.FC<ServiceFragment> = (props) => {
  return (
    <div className='border border-neutral-200 bg-white group hover:drop-shadow-md transition-all duration-300'>
        <Image src={props.featuredImage?.node.sourceUrl || 'http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg'} className='object-cover object-center mb-5 w-full h-auto' alt={props.slug || 'service image'} width={500} height={500}/>
        <div className='mr-4 ml-6'>
            <h2 className='text-2xl font-bold text-neutral-700 leading-9 group-hover:text-orange-600'>{props.title}</h2>
            <p className='mt-4 text-neutral-600' dangerouslySetInnerHTML={{__html: props.content as string}}/>
            <div className='uppercase font-bold text-neutral-700 my-4 hover:text-orange-600 w-fit cursor-pointer'>
                <Link href={`/services/${props.slug}`} className=''>read more</Link>
            </div>
        </div>
    </div>
  )
}

export default Service