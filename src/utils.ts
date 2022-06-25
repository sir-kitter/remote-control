import robot from 'robotjs'


export const adjustCoords = (x, y) => {
  const { width, height } = robot.getScreenSize()
  let rx = x < 0 ? 0 : x
  let ry = y < 0 ? 0 : y
  return [ (rx >= width ? width - 1 : rx), (ry >= height ? height - 1 : ry) ]
}
