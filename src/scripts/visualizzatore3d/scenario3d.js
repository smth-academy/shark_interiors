import {
    DirectionalLight,
    AmbientLight,
    Group,

    DirectionalLightHelper,
    AxesHelper
} from "three"

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'


let gltfLoader

function init( loadingManager ) {

    gltfLoader = new GLTFLoader( loadingManager )
}

async function crea() {

    const dirLight = new DirectionalLight( 0xfdf9f4 )
    dirLight.castShadow = true
    dirLight.position.set( 0, 2.5, 10)

    const debug = new Group()
    debug.add(new DirectionalLightHelper(dirLight))
    debug.add(new AxesHelper(10))

    const ambientLight = new AmbientLight( 0xffffff )

    const baseScenario = await caricaBaseScenario()

    const groupScenario3D = new Group()
    groupScenario3D.name = "Scenario3D"

    groupScenario3D.add( dirLight, ambientLight, baseScenario )

    return groupScenario3D
}

async function caricaBaseScenario() {

    const gltf = await gltfLoader.loadAsync( "res/scenario/gltf/base_scenario.glb" )
    const mesh = gltf.scene.children[ 0 ]
    mesh.receiveShadow = true
    mesh.material.side = 0

    return mesh
}

export { init, crea }