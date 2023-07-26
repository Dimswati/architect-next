import { gql } from '@apollo/client'

export const GET_SERVICES = gql`
    query GetServices {
        services {
            edges {
                node {
                  databaseId
                  title
                  slug
                  content
                  featuredImage {
                    node {
                      sourceUrl(size: LARGE)
                    }
                  }
                  serviceFields {
                    projectsDone
                  }
                }
            }
        }
    }
`

export const GET_SERVICE = gql`
    query GetService($slug: ID!) {
      service(id: $slug, idType: SLUG) {
        databaseId
        title
        slug
        content
        featuredImage {
          node {
            sourceUrl(size: LARGE)
          }
        }
        serviceFields {
          projectsDone
        }
      }
    }
`
export const GET_PROJECTS = gql`
    query GetProjects {
      projects {
        edges {
          node {
            databaseId
            slug
            title
            date
            groups {
              nodes {
                name
                slug
              }
            }
            projectFields {
              rating
              client
            }
            featuredImage {
              node {
                sourceUrl(size: LARGE)
              }
            }
          }
        }
      }
    }
`

export const GET_PROJECT = gql`
  query GetProject($slug: ID!){
    project(id: $slug, idType: SLUG){
      databaseId
      slug
      title
      date
      groups {
        nodes {
          name
          slug
        }
      }
      projectFields {
        rating
        client
      }
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
    }
  } 
`

export const GET_GROUPS = gql`
  query GetGroups {
    groups {
      edges {
        node {
          databaseId
          name
          slug
        }
      }
    }
  }
`
