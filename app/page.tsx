// Next Components
import Link from "next/link"

// Modules
import { twMerge } from "tailwind-merge"

// React Icons
import { FcOk, FcBusinessman, FcIdea } from "react-icons/fc"
import { FaCaretRight, FaQuoteLeft, FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { GiPaintRoller } from 'react-icons/gi'

// Custom Components
import Container from "@/components/Container"
import Button from "@/components/Button"
import Project from "@/components/Project"

// Utils
import { getServices } from "@/lib/server-utils"
import getProjectsByTag from "@/lib/getProjectsByTag"
import getSliders from "@/lib/getSliders" 
import HomeSwiper from "@/components/HomeSwiper"
import FilterSection from "@/components/FilterSection"

const Home = async() => {

  const services = await getServices()

  return (
    <main>
      <HomeSwiper/>
      <Container className="py-0 pb-20">
        <div className="container flex gap-x-20 lg:flex-row flex-col">
          <div className="-mt-8 flex-1 bg-neutral-900 text-white p-8 z-20 rounded">
              <h2 className="mb-12 text-3xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Welcome to Decorators</h2>
              <h3 className="text-2xl font-bold mb-12">We Have The Right Products to Fit Your Needs and Budget <span className="text-orange-500">Purchase - Decorators.</span></h3>
              <p className="mb-8">Explain to you how all this mistaken idea of denouncing ut pleasures work praising pain was born and will give you can complete design account sed the system, and expound the actual teachngs interiors of the great design explorer of the truth, the master-builders design of human happiness one seds rejects, dislikes, or avoids pleasures itself.</p>
              <img src="http://a.ourhtmldemo.com/decorators/wp-content/uploads/2019/02/signature.png" alt="ceo signature" className="mb-8"/>
              <h4 className="text-xl font-bold">William Shocks, <span className="text-neutral-700 font-normal">Founder</span></h4>
              <p className="text-orange-500">Decorators.</p>
          </div>
          <div className="flex-1 flex flex-col gap-8 md:pt-24 pt-12">
              <div className="flex gap-x-6">
                <div className="text-6xl">
                  <FcBusinessman/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">We are Professional</h3>
                  <span className="text-orange-500 italic text-lg">Designers</span>
                  <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="text-6xl">
                  <FcOk/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">We are Trusted</h3>
                  <span className="text-orange-500 italic text-lg">Team Members</span>
                  <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="text-6xl">
                  <FcIdea/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">We are Expert</h3>
                  <span className="text-orange-500 italic text-lg">Interiors</span>
                  <p className="mt-4 text-neutral-800">How all this mistakens idea of denouncing pleasures and praising pain was born and I will give you a completed by account of the system, and expound.</p>
                </div>
              </div>
          </div>
        </div>
      </Container>
      <Container className="bg-neutral-100 py-24">
        <div className="container">
          <div className="flex justify-between pb-8 items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Our Best Services</h2>
              <div className="sm:flex hidden gap-x-1 items-center h-fit border-b border-neutral-900">
                <h5 className="uppercase font-bold text-center text-neutral-900">MORE SERVICES </h5>
                <span><FaCaretRight/></span>
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services.services?.edges) ? services.services.edges.map(service => (
              <div key={service.node.databaseId} style={{backgroundImage: `url(${service.node.featuredImage?.node.sourceUrl})`}} className={`p-6 transition bg-no-repeat bg-center bg-cover bg-blend-overlay bg-white flex hover:bg-orange-600 gap-x-4 drop-shadow-lg group`}>
                <div className="text-4xl text-white group-hover:bg-white group-hover:text-orange-500 bg-orange-500 w-fit h-fit p-2">
                    <GiPaintRoller/>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h4 className="text-2xl font-bold text-neutral-800 group-hover:text-white">{service.node.title}</h4>
                  <p className="text-neutral-600 group-hover:text-white font-normal" dangerouslySetInnerHTML={{__html: service.node.content as string}}/>
                  <Link href={`/services/${service.node.slug}`} className="uppercase font-bold text-neutral-800 group-hover:text-white">read more</Link>
                </div>
              </div>
            )) : null}
          </div>
        </div>
      </Container>
      <Container>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl mb-16 font-bold text-left relative before:absolute before:w-16 before:h-0.5 before:-bottom-5 before:bg-orange-400 after:absolute after:w-20 after:h-1 after:bg-orange-400 after:-bottom-7 after:left-0">Recent Projects</h2>
          <FilterSection/>
        </div>
      </Container>
    </main>
  )
}

export default Home

