// React Icons
import { BsArrowRightShort } from 'react-icons/bs'
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci'

// Next Components
import Image from 'next/image'

// Custom Components
import BreadCrump from '@/components/BreadCrump'
import Container from '@/components/Container'
import QuotationForm from '@/components/QuotationForm'

// Utils
import { getService } from '@/lib/server-utils'

type ServiceProps = {
  params: {
    slug: string
  }
}

const Service = async({ params: { slug } }: ServiceProps) => {

  const service = await getService(slug)

  return (
    <main>
      <BreadCrump>Service</BreadCrump>
      <Container>
        <div className='container'>
          <div className="flex md:flex-row flex-col gap-y-8 gap-x-8 text-neutral-700 mb-12">
            <Image src={service.featuredImage?.node.sourceUrl || 'http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-1.jpg'} alt={service.title || 'service image'} className="flex-1" width={500} height={500}/>
            <div className="flex-1">
              <h2 className="mb-12 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">{service.title}</h2>
              <p>{service.serviceFields?.description}</p>
            </div>
          </div>
          <div className="mb-20">
            <h4 className="text-xl font-bold mb-8">You'll find wood floors come in Three basic types:</h4>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <div className="text-neutral-700">
                <img src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-11.jpg' width={500} height={500} alt={service.title || 'service image'} className="mb-6 w-full h-auto"/>
                <h5 className="text-xl font-bold text-neutral-800 mb-2">Solid Wood Flooring</h5>
                <p className="mb-3">The great explorer of the truth, the master-builder of human...</p>
                <div className="flex flex-col gap-y-2 text-neutral-800">
                  <p className="flex items-center gap-x-3"><span className="bg-orange-500 text-white rounded-full"><BsArrowRightShort/></span>Ages to show wood's true beauty</p>
                  <p className="flex items-center gap-x-3"><span className="bg-orange-500 text-white rounded-full"><BsArrowRightShort/></span>Can be refinished or stained</p>
                </div>
              </div>
              <div className="text-neutral-700">
                <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-12.jpg' width={500} height={500} alt={service.title || 'service image'} className="mb-6 w-full h-auto"/>
                <h5 className="text-xl font-bold text-neutral-800 mb-2">Solid Wood Flooring</h5>
                <p className="mb-3">The great explorer of the truth, the master-builder of human...</p>
                <div className="flex flex-col gap-y-2 text-neutral-800">
                  <p className="flex items-center gap-x-3"><span className="bg-orange-500 text-white rounded-full"><BsArrowRightShort/></span>Ages to show wood's true beauty</p>
                  <p className="flex items-center gap-x-3"><span className="bg-orange-500 text-white rounded-full"><BsArrowRightShort/></span>Can be refinished or stained</p>
                </div>
              </div>
              <div className="text-neutral-700">
                <Image src='http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/service-image-13.jpg' alt={service.title || 'service image'} width={500} height={500} className="mb-6 w-full h-auto"/>
                <h5 className="text-xl font-bold text-neutral-800 mb-2">Solid Wood Flooring</h5>
                <p className="mb-3">The great explorer of the truth, the master-builder of human...</p>
                <div className="flex flex-col gap-y-2 text-neutral-800">
                  <p className="flex items-center gap-x-3"><span className="bg-orange-500 text-white rounded-full"><BsArrowRightShort/></span>Ages to show wood's true beauty</p>
                  <p className="flex items-center gap-x-3"><span className="bg-orange-500 text-white rounded-full"><BsArrowRightShort/></span>Can be refinished or stained</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-20 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Get Free Quotation</h2>
            <div className="flex gap-x-8 md:flex-row flex-col gap-y-8">
              <div className="flex-1">
                <QuotationForm/>
              </div>
              <div className="flex-1">
          <p className="text-neutral-500 mb-8">There are many variations off +1800 854 5864 available, but the majority have ut suffered alterattions in some forms by injected humour looks events slightly seds believable ut seds do eiusmod tempor incididunt labore.</p>
          <div className='flex flex-col gap-y-6'>
            <div className='flex gap-x-6'>
              <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
                <CiLocationOn/>
              </div>
              <div>
                <h2 className='font-bold text-neutral-700 text-xl mb-1'>Address :</h2>
                <p className='text-neutral-500'>21/17, Level 4 Steel Rock St, Melbourne <br /> Victoria 3000, Australia.</p>
              </div>
            </div>
            <div className='flex gap-x-6'>
              <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
                <CiMail/>
              </div>
              <div>
                <h2 className='font-bold text-neutral-700 text-xl mb-1'>Mail To Fernando :</h2>
                <p className='text-neutral-500 break-all'>Decoratorssupport@gmail.com</p>
              </div>
            </div>
            <div className='flex gap-x-6'>
              <div className='bg-orange-500 text-white p-3 text-2xl h-fit w-fit'>
                <CiPhone/>
              </div>
              <div>
                <h2 className='font-bold text-neutral-700 text-xl mb-1'>Call Him :</h2>
                <p className='text-neutral-500'>+1 (44) 123-45-67, +1(44) 456-78-90</p>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Service