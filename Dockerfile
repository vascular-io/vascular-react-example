FROM --platform=linux/amd64 envoyproxy/envoy-dev:latest
COPY envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml