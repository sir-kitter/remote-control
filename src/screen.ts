import robot from 'robotjs'
import jimp from 'jimp'
import { adjustCoords } from './utils'


const edge = 200

export const capture = async () => {
  const { x, y } = robot.getMousePos()
  const [ sx, sy ] = adjustCoords(x - edge/2, y - edge/2)
  const bitmap = robot.screen.capture(sx, sy, edge, edge)
  const image = new jimp({ data: bitmap.image, width: edge, height: edge })

  for (let offset = 0; offset < bitmap.image.length; offset += 4) {
    [ image.bitmap.data[offset], image.bitmap.data[offset + 2] ] = [ image.bitmap.data[offset + 2], image.bitmap.data[offset] ]
  }

  return (await image.getBufferAsync(jimp.MIME_PNG)).toString('base64')
}
