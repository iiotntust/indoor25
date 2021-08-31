# List of Components
---

The setup is represented in a breadboard. The use of a Perfboard is recommended for a more compact setting.


1x Linkit 7697

1x LCD 1602 (PCF8574 / PCF8574A)

3x 10k ohm resistor (5% tolerance)

3x Push Button


---

# Scanner Wiring

![](https://i.imgur.com/oxuwI5f.png)

```diff
-Red wires represent the connection to 5V.
```
```diff
Black wires represent the connection to GND.
```


The other colors (Blue, Orange, Purple, Yellow, Green), represent the connection to the inputs of the MCU, if needed, this can be modified in the code, assigining more convenient ports to each personal design, or, adding extra sensors to provide extra information to the database.

---

### timestamp.js

---

```js=
let currentDate = new Date().toLocaleString([], {timeZone: "Asia/Taipei", hourCycle: 'h23',  seconds: 'long'});
msg.payload = {object:msg.payload, value:currentDate}; 

return msg; 
```

---

## List of ports

Please pay special attention to the connection of each port.

```diff
P17: Decrease Value (--)
```
```diff
P16: Increase Value (++)
```

```diff
P15: Start Scan
```

```diff
P9: Serial Data Line (SDA) (PCF8574/PCF8574A)
```

```diff
P8: Serial Clock Line (SCL) (PCF8574/PCF8574A)
```

It is recommended to **not** modify the position of P8 and P9, due to this are the **only I2C ports available for the Linkit 7697**.

For more information, please visit the following link

7697 pinout: https://www.mouser.tw/new/seeed-studio/seeed-studio-linkit-board/

I2C basic concepts: https://learn.sparkfun.com/tutorials/i2c/all

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
