/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query GroupList {\n  groups {\n    edges {\n      node {\n        databaseId\n        name\n        slug\n      }\n    }\n  }\n}": types.GroupListDocument,
    "query ProjectList {\n  projects {\n    edges {\n      node {\n        ...Project\n      }\n    }\n  }\n}\n\nfragment Project on Project {\n  databaseId\n  slug\n  title\n  date\n  groups {\n    nodes {\n      name\n      slug\n    }\n  }\n  projectFields {\n    rating\n    client\n  }\n  featuredImage {\n    node {\n      sourceUrl(size: LARGE)\n    }\n  }\n}": types.ProjectListDocument,
    "query ServiceList {\n  services {\n    edges {\n      node {\n        ...Service\n      }\n    }\n  }\n}\n\nquery SingleService($slug: ID!) {\n  service(id: $slug, idType: SLUG) {\n    ...Service\n  }\n}\n\nfragment Service on Service {\n  databaseId\n  title\n  slug\n  content\n  featuredImage {\n    node {\n      sourceUrl(size: LARGE)\n    }\n  }\n  serviceFields {\n    projectsDone\n  }\n}": types.ServiceListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GroupList {\n  groups {\n    edges {\n      node {\n        databaseId\n        name\n        slug\n      }\n    }\n  }\n}"): typeof import('./graphql').GroupListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProjectList {\n  projects {\n    edges {\n      node {\n        ...Project\n      }\n    }\n  }\n}\n\nfragment Project on Project {\n  databaseId\n  slug\n  title\n  date\n  groups {\n    nodes {\n      name\n      slug\n    }\n  }\n  projectFields {\n    rating\n    client\n  }\n  featuredImage {\n    node {\n      sourceUrl(size: LARGE)\n    }\n  }\n}"): typeof import('./graphql').ProjectListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ServiceList {\n  services {\n    edges {\n      node {\n        ...Service\n      }\n    }\n  }\n}\n\nquery SingleService($slug: ID!) {\n  service(id: $slug, idType: SLUG) {\n    ...Service\n  }\n}\n\nfragment Service on Service {\n  databaseId\n  title\n  slug\n  content\n  featuredImage {\n    node {\n      sourceUrl(size: LARGE)\n    }\n  }\n  serviceFields {\n    projectsDone\n  }\n}"): typeof import('./graphql').ServiceListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
