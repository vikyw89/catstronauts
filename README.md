# Catstornauts

Fullstack Graphql playground using apollo and TS

## Preview

client-alpha: https://catstronauts-seven.vercel.app/
server-alpha: https://catstronauts-server-alpha.23.94.26.231.sslip.io/

## Getting Started

These instructions will guide you on how to set up and run the project locally.

### Prerequisites

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)
- Node.js: [Installation Guide](https://nodejs.org/en/download/)

### Development

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

   Navigate to the project root directory:

   ```
   cd project-directory
   ```

   Install the dependencies:

   ```
   npm install
   ```

   Start the backend server:

   ```
   npm start
   ```

   The GraphQL API server will start running on http://localhost:4000.

   Start the frontend client:

   ```
   cd client
   npm install
   npm start
   ```

   The React application will start running on http://localhost:3000.

2. Deployment
   To deploy the application using Docker, follow these steps:

   ```bash
   docker compose -f compose.alpha.yml up
   ```

   The application will be accessible at http://localhost:3000.

### Built With

List the technologies/frameworks used in the project.
License
This project is licensed under the [License Name] - see the LICENSE file for details.

### Acknowledgments

Apollo graphql
