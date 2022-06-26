import robot from 'robotjs'

import { adjustCoords } from './utils'


export const drawCircle = async (radius: number) => {
  const { mx, my } = robot.getMousePos()

  robot.moveMouseSmooth(mx, my - radius)

  robot.setMouseDelay(11)
  robot.mouseClick('left')
  robot.mouseToggle('down')

  for (let rad = Math.PI/2; rad <= 3*Math.PI/2; rad += 0.05) {
    robot.moveMouse(...adjustCoords(mx + radius * Math.cos(rad), my + radius * Math.sin(rad)))
  }

  robot.mouseToggle('up')
  robot.moveMouseSmooth(mx, my)

  return 'success'
}