import robot from 'robotjs'
import { adjustCoords } from './utils'


export const moveUp = async (deltaY: number) => {
  const { x, y } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(x, y - deltaY))
  return 'success'
}

export const moveDown = async (deltaY: number) => {
  const { x, y } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(x, y + deltaY))
  return 'success'
}

export const moveLeft = async (deltaX: number) => {
  const { x, y } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(x - deltaX, y))
  return 'success'
}

export const moveRight = async (deltaX: number) => {
  const { x, y } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(x + deltaX, y))
  return 'success'
}

export const getPosition = async () => {
  const { x, y } = robot.getMousePos()
  return `${x},${y}`
}