import {
    Scene,
    PerspectiveCamera,
    LoadingManager
} from 'three'

import { setupRenderer } from './visualizzatore3d/renderer3d.js'
import { creaCameraController } from './visualizzatore3d/cameraController3d.js'
import * as Scenario3D from './visualizzatore3d/scenario3d.js'
import * as Prodotto3D from './visualizzatore3d/prodotto3d.js'

const canvas = document.getElementById( "canvas-container" )
const renderer = setupRenderer( canvas )

let scene
let camera
let cameraController

let scenario3d
let prodotto3d

init()

function init() {
    
    scene = new Scene()
    camera = new PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight )

    const loadingManager = new LoadingManager()

    Scenario3D.init( loadingManager )
    Prodotto3D.init( loadingManager )

    cameraController = creaCameraController( camera, renderer.domElement )

    camera.position.set( 2.5, 2, 2.5 )
    cameraController.update()

    initScena()
    
    window.addEventListener( "resize", resize )

    loadingManager.onLoad = () => {
        render()
    }
}

async function initScena() {
    
    scenario3d = await Scenario3D.crea()
    scene.add( scenario3d )
}

async function setProdotto3D( objProdotto ) {

    if ( !objProdotto )
        return

    if ( prodotto3d )
        return

    prodotto3d = await Prodotto3D.crea( objProdotto )
    scene.add( prodotto3d )
}

function render() {

    requestAnimationFrame( render )

    cameraController.update()

    if ( prodotto3d )
        prodotto3d.rotation.y += 0.005

    renderer.render( scene, camera )
}

function resize() {
    
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
    
    renderer.setSize( canvas.clientWidth, canvas.clientHeight )
    renderer.setPixelRatio( window.devicePixelRatio )
}


window.setProdotto3D = setProdotto3D