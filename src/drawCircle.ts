import robot from 'robotjs'

import { adjustCoords } from './utils'


export const drawCircle = async (radius: number) => {
  const { x, y } = robot.getMousePos()

  robot.moveMouseSmooth(x, y - radius)

  robot.setMouseDelay(11)
  robot.mouseClick('left')
  robot.mouseToggle('down')

  for (let rad = -Math.PI/2; rad <= 3*Math.PI/2; rad += 0.05) {
    robot.moveMouse(...adjustCoords(x + radius * Math.cos(rad), y + radius * Math.sin(rad)))
  }

  robot.mouseToggle('up')
  robot.moveMouseSmooth(x, y)

  return 'success'
}