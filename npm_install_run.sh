#!/bin/bash

npm audit

if [ $? -eq 1 ]; then
  npm audit fix

  if [ $? -eq 1 ]; then
    npm audit fix --force
  fi
fi

# Create .env file and prompt for MONGODB_URL input
if [ ! -f .env ]; then
  echo "MONGODB_URL="
  read mongodb_url
  echo "MONGODB_URL=${mongodb_url}" > .env
fi

npm install && npm run start

