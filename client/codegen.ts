import { CodegenConfig } from "@graphql-codegen/cli";

const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL

const config: CodegenConfig = {
  schema: SERVER_BASE_URL,
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  }
};

export default config;
