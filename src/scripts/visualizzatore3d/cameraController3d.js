import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

function creaCameraController( camera, rendererDom ) {

    const controller = new OrbitControls( camera, rendererDom )
    controller.enableDamping = true
    controller.maxPolarAngle = Math.PI/2 - 0.1
    controller.minDistance = 1

    return controller
}

export { creaCameraController }