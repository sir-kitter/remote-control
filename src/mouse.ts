import robot from 'robotjs'
import { adjustCoords } from './utils'


export const moveUp = async (deltaY: number) => {
  const { mx, my } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(mx, my - deltaY))
}

export const moveDown = async (deltaY: number) => {
  const { mx, my } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(mx, my + deltaY))
}

export const moveLeft = async (deltaX: number) => {
  const { mx, my } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(mx - deltaX, my))
}

export const moveRight = async (deltaX: number) => {
  const { mx, my } = robot.getMousePos()
  robot.moveMouse(...adjustCoords(mx + deltaX, my))
}

export const getPosition = async () => robot.getMousePos()