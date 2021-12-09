#!/bin/bash

#curl -i -X POST -d \
#	'{ "target": "hello world" }' \
#	http://127.0.0.1:4010/translate
curl -i -X GET  \
	http://127.0.0.1:4010/api/translate
