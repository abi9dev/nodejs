# Use an official Node.js runtime as the base image.
# We're using a slim version to keep the image size smaller.
# Alpine is a good choice for even smaller images, but for simplicity, we'll start with 'slim'.
FROM node:20-slim

# Set the working directory inside the container.
# All subsequent commands will be executed relative to this directory.
WORKDIR /app

# Copy package.json and package-lock.json (if you have one) to the working directory.
# This allows Docker to cache the 'npm install' step.
COPY package*.json ./

# Install application dependencies.
# Using 'npm ci' is recommended in CI/CD environments for consistent builds.
RUN npm ci

# Copy the rest of the application code to the working directory.
COPY . .

# Expose the port your Node.js application will listen on.
# This should match the port defined in your app.js (e.g., 3000).
EXPOSE 3000

# Define the command to run your application when the container starts.
# 'node app.js' assumes your main application file is named app.js.
CMD [ "node", "app.js" ]
