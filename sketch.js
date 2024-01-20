const canvasSketch = require("canvas-sketch")

const settings = {
   dimensions: [1000, 1000],
}

const sketch = () => {
   return ({context, width, height}) => {
      context.fillStyle = "white"
      context.fillRect(0, 0, width, height)

      context.lineWidth = width * 0.015
      context.beginPath()

      const w = width * 0.1
      const h = height * 0.1
      const gap = width * 0.02
      let x, y

      for (let i = 0; i < 5; i++) {
         for (let j = 0; j < 5; j++) {
            let x = w + (gap + w) * i
            let y = h + (gap + h) * j

            context.rect(x, y, w, h)

            if (Math.random() < 0.5) {
               const off = width * 0.016
               context.rect(x + off / 2, y + off / 2, w - off, h - off)
            }
         }
      }

      context.stroke()
   }
}

canvasSketch(sketch, settings)
