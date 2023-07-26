// Custom Components
import BreadCrump from '@/components/BreadCrump'
import Container from '@/components/Container'
import Project from '@/components/Project'

// Utils
import { getProjects } from '@/lib/server-utils'

const Projects = async() => {

  const projectList = await getProjects()

  return (
    <>
      <BreadCrump>Projects</BreadCrump>
      <Container>
        <div className='container gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {(projectList.projects?.edges) ? projectList.projects?.edges.map(project => (
            <Project key={project.node.databaseId} {...project.node}/>
          )) : null}
        </div>
      </Container>
    </>
  )
}

export default Projects