```markdown
# Multi-Instance API with NGINX, PostgreSQL, Elasticsearch, and TypeScript

## Overview

This repository contains a sample project demonstrating the setup of a multi-instance API environment using NGINX as a reverse proxy, PostgreSQL as the database, Elasticsearch for efficient querying, all built with TypeScript. The application leverages TypeScript's capabilities, including the use of Proxy to handle environment variables dynamically.

## Features

- **Load Balancing**: NGINX is used to distribute incoming requests among multiple API instances for load balancing.

- **Failover**: NGINX is configured to handle failover, automatically routing traffic to backup API instances in case of failures.

- **PostgreSQL**: The application uses PostgreSQL as a relational database for data storage.

- **Elasticsearch**: Elasticsearch is employed for efficient and powerful querying of the data.

- **TypeScript**: The entire project is written in TypeScript, providing strong typing and enhanced development capabilities.

- **Environment Variables Handling**: The application utilizes TypeScript's Proxy feature to dynamically manage environment variables, enhancing configurability and ease of deployment.

## Getting Started

Follow these steps to get the project up and running:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/GabrielAlonsoCabral/typescript-api-nginx.git
   cd typescript-api-nginx
   ```

2. **Install Dependencies**:

   Install the necessary dependencies by running:

   ```bash
   yarn
   ```

3. **Configure Environment Variables**:

   The project utilizes a `.env` file for environment variables. Copy the `.env.example` file to `.env` and configure your environment variables accordingly.

4. **Build and Run**:

   Build and start the project using Docker Compose:

   ```bash
   docker-compose build
   docker-compose up
   ```

5. **Access the API**:

   The API should now be accessible at `http://localhost:80` (NGINX port) or `http://localhost:8080` (alternate port). The NGINX reverse proxy will distribute requests to multiple API instances, providing load balancing and failover.

## Usage

- **API Endpoints**: Define your API endpoints in the TypeScript code and configure NGINX accordingly to route requests.

- **Database**: Interact with the PostgreSQL database for data storage and retrieval.

- **Elasticsearch Queries**: Leverage Elasticsearch for efficient and powerful queries on your data.
```