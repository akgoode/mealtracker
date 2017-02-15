#!/bin/bash

# Example:
# API = http://httpbin.org API_PATH = "/post" scripts/sign_ip.sh
curl "${API}${API_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'${EMAIL}'",
      "password": "'${PASSWORD}'",
      "password_confirmation": "'${PASSWORD}'"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
