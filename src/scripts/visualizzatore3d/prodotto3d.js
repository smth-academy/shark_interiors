import {
    Color,
    MeshStandardMaterial,
    RepeatWrapping,
    TextureLoader
} from 'three'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'


let gltfLoader
let textureLoader

let gltfGroup
let stili


function init( loadingManager ) {

    gltfLoader = new GLTFLoader( loadingManager )
    textureLoader = new TextureLoader( loadingManager )
}

async function crea( objProdotto ) {

    const nomeModello = objProdotto.modello
    const pathModello = `res/prodotti/gltf/${nomeModello}.glb`

    gltfGroup = await caricaGLTF( pathModello )
    stili = objProdotto.stili

    setMateriali()

    return gltfGroup
}

async function caricaGLTF( pathModello ) {

    let gltf = await gltfLoader.loadAsync( pathModello )
    let group = gltf.scene

    group.name = "groupProdotto3D"

    return group
}

async function setMateriali() {

    gltfGroup.traverse( (obj) => {

        if ( !obj.isMesh )
            return
        
        obj.receiveShadow = true
        obj.castShadow = true

        obj.material.side = 0
        obj.material.metalness *= 0.5
    } )
}

function setStile( nomeStile ) {
    
    const stile = stili[ nomeStile ]

    gltfGroup.traverse( (obj) => {

        if ( !obj.isMesh )
            return
        
        obj.material.color = new Color( stile[ obj.name ] )
    } )
}

function caricaTexture( path, scale ) {

    const texture = textureLoader.load( "res/prodotti/materiali/" + path )
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.repeat.set( scale, scale )

    if ( !texturesPool[ path ] )
        texturesPool[ path ] = texture
    
    return texturesPool[ path ]
}


export { init, crea, setStile }


window.setStileProdotto3D = setStile