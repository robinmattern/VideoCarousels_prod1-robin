#!/bin/bash

  aEXE=../client/node_modules/serve/bin/serve.js
# aEXE=../server/node_modules/serve/bin/json-server.js

  echo ""
  echo ${aEXE}
  echo "---------------------------------------------------------------"
  echo ""
       ${aEXE} $@
  echo ""

# http-server -a localhost -p 80