#!/bin/bash

if [ "$VERCEL" != "1" ]; then
  source .env.local
fi

echo "Logging in to Storyblok..."
npx storyblok@3.36.1 login --token $STORYBLOK_AUTH_TOKEN --region eu
