import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    
    PCFSoftShadowMap
} from 'three'

import { creaCameraController } from './visualizzatore3d/cameraController3d.js'

import { Prodotto3D } from './visualizzatore3d/prodotto3d.js'
import { Scenario3D } from './visualizzatore3d/scenario3d.js'


const visualizzatore = document.getElementById( "canvas-container" )

const renderer = new WebGLRenderer( {
    antialias: true,
    alpha: true
} )
renderer.setSize( visualizzatore.clientWidth, visualizzatore.clientHeight )
renderer.setPixelRatio( window.devicePixelRatio )
renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFSoftShadowMap

visualizzatore.appendChild( renderer.domElement )

window.addEventListener( "resize", resize )

let scene
let camera
let cameraController

let scenario3d
let prodotto3d


init()
render()

function init() {
    
    scene = new Scene()
    camera = new PerspectiveCamera( 45, visualizzatore.clientWidth / visualizzatore.clientHeight )

    cameraController = creaCameraController( camera, renderer.domElement )

    camera.position.set( 2.5, 2, 2.5 )
    cameraController.update()

    scenario3d = new Scenario3D( scene )
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
        cameraController.update()
        scenario3d.update()
    }

    renderer.render( scene, camera )
}

function resize() {
    camera.aspect = visualizzatore.clientWidth / visualizzatore.clientHeight
    camera.updateProjectionMatrix()
    
    renderer.setSize( visualizzatore.clientWidth, visualizzatore.clientHeight )
    renderer.setPixelRatio( window.devicePixelRatio )
}




window.setProdotto3D = setProdotto3D
window.setStileProdotto3D = setStileProdotto3D