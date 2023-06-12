import {
    Scene,
    PerspectiveCamera
} from 'three'

import { Prodotto3D } from './visualizzatore3d/prodotto3d.js'
import { Scenario3D } from './visualizzatore3d/scenario3d.js'
import { creaCameraController } from './visualizzatore3d/cameraController3d.js'
import { setupRenderer } from './visualizzatore3d/renderer3d.js'



const canvas = document.getElementById( "canvas-container" )
const renderer = setupRenderer( canvas )

let scene
let camera
let cameraController

let scenario3d
let prodotto3d


init()
render()

function init() {
    
    scene = new Scene()
    camera = new PerspectiveCamera( 45, canvas.clientWidth / canvas.clientHeight )

    cameraController = creaCameraController( camera, renderer.domElement )

    camera.position.set( 2.5, 2, 2.5 )
    cameraController.update()

    scenario3d = new Scenario3D( scene )

    window.addEventListener( "resize", resize )
}

function setProdotto3D( objProdotto ) {

    if ( prodotto3d ) return

    prodotto3d = new Prodotto3D( objProdotto, scene )
}

function setStileProdotto3D( nomeStile ) {

    prodotto3d.setStile( nomeStile )
}

function render() {

    requestAnimationFrame( render )

    {
        scenario3d.update()
        
        if (prodotto3d)
            prodotto3d.update()
        
        cameraController.update()
    }

    renderer.render( scene, camera )
}

function resize() {
    
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
    
    renderer.setSize( canvas.clientWidth, canvas.clientHeight )
    renderer.setPixelRatio( window.devicePixelRatio )
}




window.setProdotto3D = setProdotto3D
window.setStileProdotto3D = setStileProdotto3D