FROM node:16.14

RUN apt update
RUN apt update && apt install lsof