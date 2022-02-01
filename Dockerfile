FROM denoland/deno:1.18.0

ARG WORKDIR=/usr/src/app

RUN apt-get update && apt-get install -y \
  git \
  && rm -rf /var/lib/apt/lists/*

ENV LANG=C.UTF-8 TZ=Asia/Tokyo

RUN mkdir -p $WORKDIR

WORKDIR $WORKDIR

VOLUME ["$WORKDIR"]

CMD ["/bin/bash"]
