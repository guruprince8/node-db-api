/* platform */
-- set oracle script
alter session set "_ORACLE_SCRIPT"=true;
-- grant inherit privilege
GRANT INHERIT PRIVILEGES ON USER SYSTEM TO PUBLIC;
-- create pega schemas
CREATE USER RULES_88 IDENTIFIED BY oracle DEFAULT TABLESPACE USERS quota unlimited on USERS ;
CREATE USER DATA_88 IDENTIFIED BY oracle DEFAULT TABLESPACE USERS quota unlimited on USERS;
CREATE USER CUSTOMER_88 IDENTIFIED BY oracle DEFAULT TABLESPACE USERS quota unlimited on USERS;