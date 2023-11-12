import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://catstronauts-server-alpha.23.94.26.231.sslip.io/",
    documents: ["src/**/*.tsx"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql"
            }
        }
    },
    ignoreNoDocuments: true
};

export default config;