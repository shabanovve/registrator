#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER registrator WITH password 'registrator';
    CREATE DATABASE registrator;
    GRANT ALL ON DATABASE registrator TO registrator;
EOSQL