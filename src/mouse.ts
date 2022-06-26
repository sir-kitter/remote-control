import robot from 'robotjs'
import { adjustCoords } from './utils'


export const moveUp = async (deltaY: number) => {
  const { mx, my } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(mx, my - deltaY))
  return 'success'
}

export const moveDown = async (deltaY: number) => {
  const { mx, my } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(mx, my + deltaY))
  return 'success'
}

export const moveLeft = async (deltaX: number) => {
  const { mx, my } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(mx - deltaX, my))
  return 'success'
}

export const moveRight = async (deltaX: number) => {
  const { mx, my } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(mx + deltaX, my))
  return 'success'
}

export const getPosition = async () => {
  const { mx, my } = robot.getMousePos()
  return `${mx},${my}`
}