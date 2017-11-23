FROM phusion/baseimage:latest

# Custom init script of phusion's stripped ubuntu image
CMD ["/sbin/my_init"]

ARG r_exp=recurring-expenses
ARG source_dir=/home/$r_exp
ARG NODE_ENV=production

ENV PORT=8000 \
	EXP_PATH=$source_dir/persistence/expenses

RUN apt-get update && apt-get install -y --no-install-recommends \
    curl && \
    rm -rf /var/lib/apt/lists/* && \
	curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    curl -sL https://deb.nodesource.com/setup_7.x | bash - && \
	apt-get install -y nodejs yarn
    
# Caching node_modules
COPY package.json /tmp/package.json
RUN cd /tmp && yarn && \
	if test $NODE_ENV = "development"; then yarn global add nodemon; fi && \
	mkdir -p $source_dir/$r_exp/node_modules && cp -r /tmp/node_modules $source_dir/$r_exp/ && \
	mkdir -p $EXP_PATH

WORKDIR $source_dir/$r_exp
COPY . $source_dir/$r_exp

EXPOSE $PORT
CMD yarn start