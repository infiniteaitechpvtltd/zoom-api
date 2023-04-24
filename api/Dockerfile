# FROM node:alpine3.16 as nodework

# WORKDIR /zoomapi-teacher 

# COPY  package.json .

# RUN npm install

# COPY . .

# RUN npm run build


# FROM nginx:1.23-alpine
# WORKDIR /user/share/nginx/html
# RUN rm -rf ./*
# COPY --from=nodework /zoomapi-teacher .
# ENTRYPOINT [ "nginx","-g","daemon off;" ]


#------------------------------------------------------------------------------------------

# Use a lightweight Linux distribution as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /zooapi

# Copy the source code into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port used by your app (usually 3000 for React)
EXPOSE 4000

# Specify the command to run your app
CMD [ "npm", "run", "dev" ]
