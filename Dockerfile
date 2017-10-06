# Create an image based on the official Node 6 image from dockerhub
FROM node:6

# Create app directory within the image
# RUN mkdir -p /data/app

# Change directory so future commands work on it
WORKDIR /app

# Copy dependency definition (package.json)
# COPY package.json /usr/src/app

# Install dependencies
# RUN npm install

# Get all code needed to run app
# COPY . /usr/src/app

# Expose the port the app will run in (Note: default of Angular CLI is 4200)
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]