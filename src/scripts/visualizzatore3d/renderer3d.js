import {
    WebGLRenderer,
    PCFSoftShadowMap
} from "three"

function setupRenderer( canvas ) {

    const renderer = new WebGLRenderer( {
        antialias: true,
        alpha: true
    } )
    renderer.setSize( canvas.clientWidth, canvas.clientHeight )
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = PCFSoftShadowMap

    canvas.appendChild( renderer.domElement )

    return renderer
}

export { setupRenderer }