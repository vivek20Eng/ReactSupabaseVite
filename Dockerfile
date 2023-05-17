# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the React app
RUN yarn build

# Install serve globally
RUN npm install -g serve

# Specify the command to run when the container starts
CMD ["serve", "-s", "dist", "-l", "3000"]
