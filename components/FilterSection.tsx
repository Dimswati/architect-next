'use client'

import Project from './Project'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

import getProjectsByTag from '@/lib/getProjectsByTag'
import { GET_GROUPS, GET_PROJECTS } from '@/lib/queries'
import { GroupListQuery, ProjectListQuery } from '@/gql/graphql'

const FilterSection = () => {

  // const { projects, tags } = getProjectsByTag('painting')
  const [ filterTag, setFilterTag ] = useState<string>('painting')

  const { data: { projects }, error } = useSuspenseQuery<ProjectListQuery>(GET_PROJECTS)

  const { data: { groups } } = useSuspenseQuery<GroupListQuery>(GET_GROUPS)
  
  return (
    <div className="flex lg:flex-row flex-col lg:gap-x-4 gap-y-6 mb-12">
            <ul className="lg:basis-2/12 flex lg:flex-col flex-row gap-x-3 gap-y-3 flex-wrap">
              {
                 (groups?.edges) ? groups?.edges.map(tag => (
                  <li key={tag.node.databaseId} className={twMerge("uppercase font-semibold py-3 border border-neutral-300 hover:border-orange-500 text-center px-6 lg:px-0 cursor-pointer", tag.node.slug === filterTag ? 'bg-orange-500 text-white border-orange-500' : '')} onClick={()=>setFilterTag(tag.node.slug as string)}>
                    {tag.node.name}
                  </li>
                )) : null
              }
            </ul>
            <div className="lg:basis-10/12 basis-full grid grid-cols-1 md:grid-cols-2 gap-4">
              {(projects?.edges) ? projects.edges.map(project => (
                  <Project key={project.node.databaseId} {...project.node}/>
                )) : null
              }
            </div>
    </div>
  )
}

export default FilterSection