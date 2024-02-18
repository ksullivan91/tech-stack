FROM node:lts

WORKDIR /app

# Copying only package.json and package-lock.json first to leverage Docker cache
COPY package.json ./
COPY package-lock.json ./

RUN npm install

# Copy the rest of your app's source code
COPY . .


EXPOSE 3001

CMD ["npm", "run", "dev"]
