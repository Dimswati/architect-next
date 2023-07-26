import 'server-only'

import { GroupListQuery, ProjectFragment, ProjectListDocument, ServiceFragment, ServiceListQuery } from '@/gql/graphql';
import { TypedDocumentString } from '@/gql/graphql';

import { GraphQLError } from 'graphql';

import { ApolloQueryResult } from '@apollo/client';

import { ProjectListQuery } from '@/gql/graphql';

// type GraphqlResponse<GraphqlData> = { data: GraphqlData } | { errors: GraphQLError[] }  


// QUERIES
import { GET_SERVICES, GET_SERVICE, GET_PROJECTS, GET_PROJECT, GET_GROUPS } from "./queries";

// Apollo Client
import { getClient } from "./apollo-client";

export async function getServices(): Promise<ServiceListQuery> {

  const { data, errors, error }: ApolloQueryResult<ServiceListQuery> = await getClient().query({
    query: GET_SERVICES
  })

  // console.log(data.services?.edges)

  if(error){
    throw new Error(error?.message)
  }

  return data
}

export async function getService(slug:string): Promise<ServiceFragment> {
  const {data, error, errors}: ApolloQueryResult<{service: ServiceFragment}> = await getClient().query({
    query: GET_SERVICE,
    variables: {
      slug
    }
  })

  if(error){
    throw new Error(error.message)
  }

  return data.service
}

export async function getProjects(): Promise<ProjectListQuery> {

  const { data, error, errors }: ApolloQueryResult<ProjectListQuery> = await getClient().query({
    query: GET_PROJECTS,
  })

  if(error){
    throw new Error(error.message)
  }

  return data
}

export async function getProject(slug:string): Promise<ProjectFragment> {
  const {data, error, errors}: ApolloQueryResult<{project: ProjectFragment}> = await getClient().query({
    query: GET_PROJECT,
    variables: {
      slug
    }
  })

  if(error){
    throw new Error(error.message)
  }

  return data.project
}

export async function getGroups(): Promise<GroupListQuery>{

  const { data, error, errors }: ApolloQueryResult<GroupListQuery> = await getClient().query({
    query: GET_GROUPS,
  })

  if(error){
    throw new Error(error.message)
  }

  return data
}

// export const execute = async<Result, Variables>(document: TypedDocumentString<Result, Variables>): Promise<Result> => {

//   const result: ApolloQueryResult<Result> = await getClient().query({
//     query: GET_PROJECTS,
//   })
  
//   if('errors' in result){
//     throw new Error()
//   }

//   return result.data
// }


// const result = await execute(ProjectListDocument)
