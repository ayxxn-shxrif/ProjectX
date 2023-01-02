#!/bin/bash

# Check if npm audit fix is needed
npm audit

# If npm audit finds vulnerabilities, run npm audit fix
if [ $? -eq 1 ]; then
  npm audit fix

  # If npm audit fix fails, run npm audit fix --force
  if [ $? -eq 1 ]; then
    npm audit fix --force
  fi
fi

# Install dependencies
npm install
