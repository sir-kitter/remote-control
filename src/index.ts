import ws from 'ws'

import mouse from './mouse'
import screen from './screen'
import { drawRect, drawSquare } from './drawRect'
import { drawCircle } from './drawCircle'


const port = 8080

const mapCommands = {
  // Navigation over the x and y axis
  'mouse_up': { f: mouse.moveUp, p: 1, r: false },
  'mouse_down': { f: mouse.moveDown, p: 1, r: false },
  'mouse_left': { f: mouse.moveLeft, p: 1, r: false},
  'mouse_right': { f: mouse.moveRight, p: 1, r: false},
  'mouse_position': { f: mouse.getPosition, p: 0, r: true },

  // Drawing
  'draw_circle': { f: drawCircle, p: 1, r: false },
  'draw_rectangle': { f: drawRect, p: 2, r: false },
  'draw_square': { f: drawSquare, p: 1, r: false },

  // Print screen
  'prnt_scrn': { f: screen.capture, p: 0, r: true },
}

const server = new WebSocketServer({ port: PORT })
console.log(`server started on port ${port}`)

server.on('close', () => {
  console.log('shutting down')
})
.on('connection', (webSocket, req) => {
  console.log(`connection from ${req.socket.remoteAddress}:${req.socket.remotePort}`)
  const wss = createWebSocketStream(webSocket, { encoding: 'utf8', decodeStrings: false })
  wss.on('close', () => console.log('connection closed'))
     .on('data', async data => {
       const [cmd, ...args] = data.split(' ')
       const numberArgs = args.map(Number)
       const cmdInfo = mapCommands[cmd]
       if(cmd in mapCommands && cmdInfo.p == args.length && !numberArgs.some(Number.isNaN)) {
         const result = cmdInfo.f(...args.map(Number))
         console.log(`${cmd} == ${JSON.stringify(result)}`)
         if(cmdInfo.r) {
           wss.write(JSON.stringify(result) + '\0')
         }
       } else {
         console.log(`wrong command received: ${data}`)
       }
     })
})

process.on('SIGINT', () => {
  server.clients.forEach(socket => if (ws.OPEN == socket.readyState) socket.close())
  server.close()
})
