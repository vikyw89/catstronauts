# Changelog

## 1.0.0 (2023-11-12)


### Features

* add Docker support for development and deployment ([1ee57a7](https://github.com/vikyw89/catstronauts/commit/1ee57a7bb0ba2ae363cdc4d434368d3f05b3e94c))
* **cd.yml:** add continuous deployment workflow for deploying static content to GitHub Pages on the alpha branch ([614fc2b](https://github.com/vikyw89/catstronauts/commit/614fc2bb228cd1259072d1be7661278871198765))
* finished apolo server backend ([93bc986](https://github.com/vikyw89/catstronauts/commit/93bc98621d155fb84b67b0922d99dd16c3f41f26))
* initial commit ([dc2e45f](https://github.com/vikyw89/catstronauts/commit/dc2e45f4d7416fad6500494ac044395eff0211b9))
* **schema.ts:** add GraphQL schema file with type definitions for Track and Author ([fa08b7b](https://github.com/vikyw89/catstronauts/commit/fa08b7bef5cc40dacf0d1ccc1222cf549fdd0ad5))
* **server/package.json:** add @apollo/datasource-rest dependency to enable REST data sources ([87a5b68](https://github.com/vikyw89/catstronauts/commit/87a5b68a529bb63457187c37be320fda84534fc3))
* **server/src/datasources/track-api.ts:** create TrackAPI class to handle REST API requests for tracks and authors ([87a5b68](https://github.com/vikyw89/catstronauts/commit/87a5b68a529bb63457187c37be320fda84534fc3))
* **server/src/index.ts:** add resolvers and data sources to Apollo Server configuration ([87a5b68](https://github.com/vikyw89/catstronauts/commit/87a5b68a529bb63457187c37be320fda84534fc3))
* **server/src/resolvers.ts:** add resolvers for tracks and authors in GraphQL schema ([87a5b68](https://github.com/vikyw89/catstronauts/commit/87a5b68a529bb63457187c37be320fda84534fc3))


### Bug Fixes

* **cd.yml:** fix path for uploading artifact to include the client/dist directory ([e07e6b6](https://github.com/vikyw89/catstronauts/commit/e07e6b67065166806849678958a8f74b47eec8ee))
* **cd.yml:** fix working directory for npm commands to be executed in the client directory ([e07e6b6](https://github.com/vikyw89/catstronauts/commit/e07e6b67065166806849678958a8f74b47eec8ee))
* **vite.config.ts:** set the base path to "/catstronauts/" to ensure correct routing for the deployed app on GitHub Pages ([614fc2b](https://github.com/vikyw89/catstronauts/commit/614fc2bb228cd1259072d1be7661278871198765))
