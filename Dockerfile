FROM node:20-alpine3.16

RUN apk add --update --no-cache python3
RUN apk add --no-cache \
  make g++ && \
  apk add vips-dev fftw-dev --update-cache \
  && rm -fR /var/cache/apk/*


# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . /app

# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)

RUN npm install --legacy-peer-deps
RUN npm install -g gatsby-cli --legacy-peer-deps

# RUN npm install --package-lock-only


#RUN npm ci --legacy-peer-deps
# Build the app
RUN gatsby build  --verbose

# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 80
# Start the app
#CMD gatsby serve --port 3000 --host 0.0.0.0

CMD npm run deploy
