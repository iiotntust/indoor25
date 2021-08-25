### Website description

This is a initial website page for visualizing our indoor positioning location.
Our positioning webpage is divided into 3 sections: 
- Home (viewing both factory and classroom in the same time)
- Factory 
- Classroom 

---

#### Home
<img width="480" alt="All" caption="Positioning view for both classroom and factory" src="https://user-images.githubusercontent.com/53463236/129820330-c21179fc-a42e-4e8c-b8c4-82dcb9a8bb5e.png">

#### Factory
<img width="480" alt="Factory" src="https://user-images.githubusercontent.com/53463236/129821148-05389375-a2e6-4b1d-9438-bda40261d1d6.png">

#### Classroom
<img width="480" alt="Classroom" src="https://user-images.githubusercontent.com/53463236/129821166-bc12b8c4-cb07-4f1d-8331-ba30faeb37d9.png">

### How to create a positioning visualization?
For this project `canvas` tag from the HTML is implemented.
```HTML
<canvas id="canvas"></canvas>
```
On the canvas, the location map image is set as the background of the canvas. Therefore, we could draw positioning dots on the canvas. The code block below presents the method of creating a canvas in javascript.
```javascript
var ctx = document.getElementById('canvas').getContext('2d');
var img = new Image();
img.src = './images/factory.png';
img.onload = function(){

    canvas.width = canvas.height = 1800;
    // set the display size
    canvas.style.width =  "537px";
    canvas.style.height = "528px";
    ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle
}
```

