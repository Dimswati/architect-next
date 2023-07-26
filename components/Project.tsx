'use client'

import { ProjectFragment } from "@/gql/graphql"
//Next Components
import Image from "next/image"
import Link from "next/link"

//React Icons
import { SlLink } from "react-icons/sl"

const Project: React.FC<ProjectFragment> = (props) => {
  return (
    <div className=" h-fit group transition ease-in-out duration-300">
      <div className="relative">      
        <Image src={props.featuredImage?.node.sourceUrl || 'http://a.ourhtmldemo.com/decorators/wp-content/uploads/2016/11/31.jpg'} width={500} height={500} className="w-full h-auto" alt={props.title || 'project image'}/>
          <div className="absolute top-0 inset-0 bg-orange-500/80 group-hover:flex items-center justify-center -translate-y-56 hidden group-hover:translate-y-0 transition duration-300">
          <Link href={`/projects/${props.slug}`} className="bg-white hover:bg-neutral-800 p-4 rounded-full text-xl text-orange-500 hover:text-white cursor-pointer">
            <SlLink/>
          </Link>
        </div>
      </div>
      <div className="bg-neutral-100 flex flex-col items-center py-4">
        <h4 className="text-xl font-bold text-neutral-800">{props.title}</h4>
        <ul className="flex gap-x-3">
            {(props.groups?.nodes) ? props.groups.nodes.map(tag => (<li key={tag.slug} className="text-orange-500 italic">{tag.name}</li>)) : null}
        </ul>
        </div>
    </div>
  )
}

export default Project