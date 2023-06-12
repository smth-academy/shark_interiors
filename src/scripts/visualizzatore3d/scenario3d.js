import {
    DirectionalLight,
    AmbientLight,
    MeshStandardMaterial,
    TextureLoader,
    Group,
    Object3D
} from "three"

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'


const gltfLoader = new GLTFLoader()
const textureLoader = new TextureLoader()


async function crea() {

    const dirLight = new DirectionalLight( 0xffffff )
    dirLight.name = "LuceDirezionale"
    dirLight.castShadow = true
    dirLight.position.set( 2, 7.5, 5 )

    const ambientLight = new AmbientLight( 0x8f8f8f, 0.75 )

    const baseScenario = await caricaBaseScenario( "res/scenario/gltf/base_scenario.glb" )

    const groupScenario3D = new Group()
    groupScenario3D.name = "Scenario3D"

    groupScenario3D.add( dirLight, ambientLight, baseScenario )

    return groupScenario3D
}

async function caricaBaseScenario() {

    const gltf = await gltfLoader.loadAsync( "res/scenario/gltf/base_scenario.glb" )
    const mesh = gltf.scene.children[ 0 ]

    Promise.all( [

        textureLoader.loadAsync( "res/scenario/materiali/metal/diffuse.jpg" ),
        textureLoader.loadAsync( "res/scenario/materiali/metal/normal.jpg" ),
        textureLoader.loadAsync( "res/scenario/materiali/metal/roughness.jpg" )
    ]  ).then( (textures) => {

        mesh.material = new MeshStandardMaterial( {
            map: textures[ 0 ],
            normalMap: textures[ 1 ],
            roughnessMap: textures[ 2 ]
        } )
    } )

    mesh.receiveShadow = true

    return mesh
}

export { crea }