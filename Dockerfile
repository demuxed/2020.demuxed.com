FROM ruby:2.7
RUN gem install middleman && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y nodejs
WORKDIR /code
COPY . .
RUN bundle install
