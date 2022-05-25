#!/bin/bash

docker build -t jomartz/hetzer-app:v0.1 . --no-cache
docker image push jomartz/hetzer-app:v0.1