import projects from "./projects";

// Lodash
import _ from 'lodash'

const getProject = (projectId: number) => {

    const project = _.find(projects, {id: projectId})

  return {
    project
  }
}

export default getProject