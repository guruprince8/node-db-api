-- employee table DDL
CREATE TABLE EMPLOYEE (
      ID INTEGER NOT NULL,
      FIRSTNAME VARCHAR(255),
      LASTNAME VARCHAR(255),
      EMAIL VARCHAR(255),
      PHONE VARCHAR(255),
      BIRTHDATE VARCHAR(10),
      TITLE VARCHAR(255),
      DEPARTMENT VARCHAR(255),
      PRIMARY KEY (ID)
);
-- employee sequence 
CREATE SEQUENCE EMPLOYEE_SEQ
 START WITH     100
 INCREMENT BY   1; 
 
-- sample data set
INSERT INTO EMPLOYEE (ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, BIRTHDATE, TITLE, DEPARTMENT) VALUES (EMPLOYEE_SEQ.nextVal, 'Hugh', 'Jast', 'Hugh.Jast@example.com', '730-715-4446', '1970-11-28' , 'National Data Strategist', 'Mobility'); 
INSERT INTO EMPLOYEE (ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, BIRTHDATE, TITLE, DEPARTMENT) VALUES (EMPLOYEE_SEQ.nextVal, 'Toy', 'Herzog', 'Toy.Herzog@example.com', '769-569-1789','1961-08-08', 'Dynamic Operations Manager', 'Paradigm'); 
INSERT INTO EMPLOYEE (ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, BIRTHDATE, TITLE, DEPARTMENT) VALUES (EMPLOYEE_SEQ.nextVal, 'Reed', 'Hahn', 'Reed.Hahn@example.com', '429-071-2018', '1977-02-05', 'Future Directives Facilitator', 'Quality'); 
INSERT INTO EMPLOYEE (ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, BIRTHDATE, TITLE, DEPARTMENT) VALUES (EMPLOYEE_SEQ.nextVal, 'Novella', 'Bahringer', 'Novella.Bahringer@example.com', '293-596-3547', '1961-07-25' , 'Principal Factors Architect', 'Division'); 
INSERT INTO EMPLOYEE (ID, FIRSTNAME, LASTNAME, EMAIL, PHONE, BIRTHDATE, TITLE, DEPARTMENT) VALUES (EMPLOYEE_SEQ.nextVal, 'Zora', 'Sawayn', 'Zora.Sawayn@example.com', '923-814-0502', '1978-03-18' , 'Dynamic Marketing Designer', 'Security');
commit;