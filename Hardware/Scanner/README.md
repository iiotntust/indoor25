---
tags: LCD 1602, Push Button, Menu, Start
---
# List of Components
---

The setup works with Linkit 7697


1x Linkit 7697

1x LCD 1602 (PCF8574 / PCF8574A)

3x 10k ohm resistor (5% tolerance)

3x Push Button


---

# Scanner Wiring

![](https://i.imgur.com/oxuwI5f.png)

---

### timestamp.js

---

```js=
let currentDate = new Date().toLocaleString([], {timeZone: "Asia/Taipei", hourCycle: 'h23',  seconds: 'long'});
msg.payload = {object:msg.payload, value:currentDate}; 

return msg; 
```

---

## MongoDB ports (common error)

Please pay special attention to MongoDB port. It is common for MongoDB when it restart to **change its port**, therefore, what yesterday was the port 49153, today can be 49156.

This change of ports will generate a connection error, due to Node-Red is not able to establish contact with the database, because the new port is not into the records.

In case of change of ports, please add the new port in the *output node* **mongodb out**.


![](https://i.imgur.com/28tANuk.png)

---

### Wrap up

- To keep a clear record, add a timestamp script to mark every data package.
- In case of connection error with database, please check if the port has changed in your own system.
- If the port has a different number, edit the output node of the database (mongodb) to recover the connection. 

---

### Thank you! :couch_and_lamp: 

You can find us on

- GitHub
- Twitter
- or email me
