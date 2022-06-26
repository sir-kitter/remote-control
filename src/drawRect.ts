import robot from 'robotjs'


export const drawRect = async (width: number, height: number) => {
  let { x, y } = robot.getMousePos()

  robot.setMouseDelay(33)
  robot.mouseToggle('down')

  robot.moveMouse(x, y + height)
  robot.moveMouse(x + width, y + height)
  robot.moveMouse(x + width, y)
  robot.moveMouse(x, y)

  robot.mouseToggle('up')

  return 'success'
}

export const drawSquare = async (edge: number) => await drawRect(edge, edge)