tags: IPS, BLE 5.0, Beacon, Scanner, MQTT, NodeRed, MongoDB, Trilateration, Kalman Filter, Embedded Systems


# Indoor Positioning System (IPS)

---

RSSI-based IPS should contain transmitters and receivers, known as beacon and scanner, respectively. This study uses the beacon-based configuration, with **beacons** placed in a **fixed position**, and the **scanner** acts as a **moving element**. 

---

## Project Main Folders

📂 Hardware <br>
📂 Database <br>
📂 Website <br>

---



### Usage flow

---

![](https://i.imgur.com/As7X1O0.png)

---

## How to use this repository

To implement this repository, please follow the instructions:

1️⃣ **Select your beacon model**. Currently, this repository provide code for the following beacons: Linkit 7697, Nano33, HC-42 <br>

2️⃣ **Build your database**. Currently, this repository provide documentation for the following database: MongoBD. <br>

3️⃣ **Build your rssi scanner**. Currently, this repository provide code for the following scanner: Linkit 7697 <br>

4️⃣ **Collect the rssi data**. <br>

5️⃣ **Create the UX/UI (Website)**.  <br>


---

## RSSI Collection

After the hardware and database has been established, the system is ready for data collection.<br>

In this phase, the scanner will collect the data from the beacon, as the following image shows.<br>

![](https://www.mdpi.com/sensors/sensors-21-05181/article_deploy/html/images/sensors-21-05181-g007-550.jpg)

In each distance point, the scanner will collect a certain amount of RSSI signals, generating a comparison table of distance vs rssi.<br>

---

## Hardware (Beacon, Scanner)

The following selection of manufacturers are included in the hardware folder:

Mediatek (Linkit 7697)<br>
Arduino (Nano33)<br>
HC Tech (HC-42)<br>
Raspberry (Pi4)<br>

Beacons available: Linkit 7697, Nano33, HC-42.<br>

Scanner available: Linkit 7697.<br>

---


## Algorithm Specs

- Signal propagation model
    - Linear regression
- Trilateration
- Modification coefficients (Random Walk)
- Kalman Filter

---
## Required libraries


### Arduino IDE

```c=
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
// setup I2C address (LCD controller)
//     There are two different models of LCD, as follows:
//         0x3F (PCF8574A)
//         0x27 (PCF8574T)
```

```c=
//MQTT library
#include <PubSubClient.h>
```

---
### Python (to modify)

```typescript
// in background script
const fakeLogin = async () => true

channel.answer('isLogin', async () => {
  return await fakeLogin()
})
```

<br>

```typescript
// in inject script
const isLogin = await channel.callBackground('isLogin')
console.log(isLogin) //-> true
```

---

### Wrap up

- Cross envornment commnication
- A small library to solve messaging pain
- TypeScript Rocks :tada: 

---

### Thank you! :heart: 

You can find me on

- GitHub
- Twitter
- or email me
