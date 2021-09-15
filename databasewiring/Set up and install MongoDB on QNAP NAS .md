# Set up and install MongoDB on QNAP NAS

---

# Open "Container Station"
![](https://i.imgur.com/CC3nLph.png)

---

# Click "Create"
![](https://i.imgur.com/ZA8VOOC.png)

---

# Search  MongoDB, select MongoDB DOCKER and click install
![](https://i.imgur.com/aYaZQBO.png)

---

# Click "Create"
![](https://i.imgur.com/VFlvcyc.png)

---

# Click "OK"
![](https://i.imgur.com/s5P6fl0.png)

---

# Choose the container and remove it.
![](https://i.imgur.com/TVTsIhg.png)

---

# Click "Create", and click "Install" to rebuild the MongoDB.
![](https://i.imgur.com/sLgcgDM.png)


---

# In Command, enter "mongod --auth",and click "Create".
![](https://i.imgur.com/tIXbQ6a.png)

---

#  click "Terminal", enter "mongo admin".
![](https://i.imgur.com/AqxP1uC.png)

---

# Enter the command " db.createUser({ user: 'input account', pwd: 'input password', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] }); ".
![](https://i.imgur.com/1asvp3c.png)

---

# Return to the MongoDB container, click "Terminal" and enter the command "mongo -u input account -p input password --authenticationDatabase admin",and click "OK".
![](https://i.imgur.com/oUp9FKW.png)

---

# Enter the command "use database name" (for example: "use qiotdatabase"). 
![](https://i.imgur.com/ty6FY6a.png)

---

# Enter the command "db.createUser({ user: "input account of DB ", pwd: "input password of DB", roles: [ { role: "dbOwner", db: "input the DB name you established previously"}]});"

(When you "establish another new account and password", it cannot be the same as the previously created user account (for example: "qiotduser")).

![](https://i.imgur.com/ojvEd1u.png)


---












