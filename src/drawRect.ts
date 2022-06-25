import robot from 'robotjs'


export const drawRect = async (width: number, height: number) => {
  let { mx, my } = robot.getMousePos()

  robot.setMouseDelay(33)
  robot.mouseClick('left')
  robot.mouseToggle('down')

  robot.moveMouse(mx, my + height)
  robot.moveMouse(mx + width, my + height)
  robot.moveMouse(mx + width, my)
  robot.moveMouse(mx, my)

  robot.mouseToggle('up')
}

export const drawSquare = async (edge: number) => await drawRect(edge, edge)