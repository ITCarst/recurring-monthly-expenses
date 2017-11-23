FROM mysql:latest

ENV PORT=3306

ENV MYSQL_ROOT_PASSWORD=rexpenses \
    MYSQL_USER=root \
    MYSQL_PASSWORD=rootz \
    MYSQL_DATABASE=recurring_expenses

ADD expenses.sql /docker-entrypoint-initdb.d

EXPOSE $PORT