#!/bin/bash

curl -i -X POST \
	 -H "Content-Type: application/json" \
	-d '{"target":"hello world"}' \
	http://localhost:8080/api/translate
