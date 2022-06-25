import robot from 'robotjs'


export const drawCircle = async (radius: number) => {
	const { mx, my } = robot.getMousePos()

	robot.moveMouseSmooth(mx, my - radius)

	robot.setMouseDelay(11)
    robot.mouseClick('left')
	robot.mouseToggle('down')

	for (let rad = 0; rad <= 2 * Math.PI; rad += 0.05) {
		const tx = mx + radius * Math.cos(rad)
		const ty = my + radius * Math.sin(rad - Math.PI/2)
		robot.moveMouse(tx, ty)
	}

	robot.mouseToggle('up')
    robot.moveMouseSmooth(mx, my)
}