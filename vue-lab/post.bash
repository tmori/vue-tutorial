#!/bin/bash

curl -i -X POST \
	 -H "Content-Type: application/json" \
	-d '{"target":"hello world"}' \
	http://127.0.0.1:4010/api/translate
