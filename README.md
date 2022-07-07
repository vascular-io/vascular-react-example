# VascularIO ReactJS example.

This example demonstrate the use of [VascularIO JS SDK](https://github.com/vascular-io/vascular-js).

In this example we're running an [Envoy](https://www.envoyproxy.io/) as reverse-proxy to route the traffic to VascularIO API.

Note: in production running reverse-proxy is not needed.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisite
- NodeJS
- Docker

## How to start

- Clone the project `git clone git@github.com:vascular-io/vascular-react-example.git`
- Run `npm i`
- Run the Proxy
  1. `docker build -t vascular-react .`
  2. `docker run -d  --name vascular-react -p 8080:8080 -p 9901:9901 grpc-web-react`
Note: in case of running on Mac M1 add the `--platform=linux/amd64` flag to each docker command.
- Run `npm start`

