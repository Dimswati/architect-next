// Custom Components
import BreadCrump from '@/components/BreadCrump'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Service from '@/components/Service'

// Utils
import { getServices } from '@/lib/server-utils'
import React from 'react'

const Services = async() => {

  const services = await getServices()

  return (
    <main>
      <BreadCrump>Our services</BreadCrump>
      <Container>
        <div className='container grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            (services.services?.edges) ? services.services.edges.map(service => (
              <Service key={service.node.databaseId} {...service.node}/>
            )) : null
          }
        </div>
      </Container>
      <Container style={{backgroundImage: 'url(http://a.ourhtmldemo.com/decorators/wp-content/uploads/2019/02/image-1-1.jpg)'}} className="h-96 bg-center bg-cover bg-fixed bg-neutral-600 bg-blend-overlay">
        <div className='container flex flex-col items-center justify-center h-full text-white text-center'>
          <h4 className="text-xl mb-5">Join with Decorators and</h4>
          <h3 className="text-4xl mb-8">Now Make Your Home More Lovely!</h3>
          <div className="flex sm:flex-row flex-col gap-y-4 gap-x-5">
            <Button>contact us</Button>
            <Button className="bg-neutral-800">shop now</Button>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Services