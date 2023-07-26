import { useMemo } from "react"
import _ from 'lodash'

import projectsList from "./projects"

const getProjectsByTag = ( filterTag: string ) => {

    const projects = projectsList.reduce<Project[]>((acc, obj)=> {
        //check if object tag has filter tag precent
        const tags = obj.tags
        const filterTagPresent = tags.includes(filterTag)

        if(filterTagPresent){
          return acc.concat(obj)
        }

        return acc
    }, [])

    const tags = useMemo<string[]>(()=>{
      return projectsList.map(project => ([...project.tags])).reduce((acc, arr)=> acc.concat(arr), [])
    }, [])

    const uniqueTags = _.uniq(tags)

  return {
    projects,
    tags: uniqueTags
  }
}

export default getProjectsByTag