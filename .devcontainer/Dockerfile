FROM node:18.17.1
# Last version check on 02 Aug 2023.
# Check for new versions at https://nodejs.org/en/ or at https://hub.docker.com/_/node
# Note that if you want to use this container for a Create React Application (CRA)
# you may need to use a different version. Consult React documentation.
# [Manfred]


################################################################################
# Install prerequisites and utilities
RUN apt-get update
RUN apt-get install -y \
    lsb-release \
    procps \
    iputils-ping \
    net-tools
# lsb_release: use lsb_release -a to show the linux version used by the dev container
# procps: to support command 'ps'
# iputils-ping: to support command 'ping'
#    See: https://linuxconfig.org/ping-command-not-found-on-ubuntu-20-04-focal-fossa-linux
# net-tools: to support command such as 'arp', 'ifconfig', 'netstat', etc.
#    See: https://helpmanual.io/packages/apt/net-tools/
# [Manfred]


################################################################################
# Install pnpm
RUN npm install -g pnpm@8.6.12
# Last version check on 02 Aug 2023.
# Newer versions might be available at https://www.npmjs.com/search?q=yarn
# [Manfred]
