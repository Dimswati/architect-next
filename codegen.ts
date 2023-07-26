
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://architect.paulmbatia.com/graphql/",
  documents: "graphql/**/*.graphql",
  generates: {
    "gql/": {
      preset: "client",
      config: {
        documentMode: 'string',
        avoidOptionals: true
      },
      presetConfig: {
        dedupeFragments: true,
        fragmentMasking: false
      },
      plugins: []
    }
  }
};

export default config;
