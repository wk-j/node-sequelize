## Instructions

```
npm install --save-dev sequelize
npm install --save-dev @types/sequelize
npm install --save-dev mysql2

docker rm wk-mysql 
docker run --name wk-mysql -e MYSQL_ROOT_PASSWORD=1234 -p 3306:3306 -d mysql
mysql -u root -h 127.0.0.1 -p -e "create database Hello" 
mysql -h 127.0.0.1 -u root -p

show databases;
use Hello;
select * from Records;
drop table Records;
desc Records;

1234
```