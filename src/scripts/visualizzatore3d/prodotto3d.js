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

    setMateriali( stili[ "Predefinito" ] )

    return gltfGroup
}

async function caricaGLTF( pathModello ) {

    let gltf = await gltfLoader.loadAsync( pathModello )
    let group = gltf.scene

    group.name = "groupProdotto3D"

    return group
}

async function setMateriali( stile ) {

    gltfGroup.traverse( (obj) => {

        if ( !obj.isMesh )
            return
        
        obj.receiveShadow = true
        obj.castShadow = true

        obj.material.side = 0
        obj.material.metalness *= 0.5

        //setMaterialeOggetto( obj, getMateriale(stile[ obj.name ]) )
    } )
}

let texturesPool = {}

function setMaterialeOggetto( obj, mat ) {

    if ( !obj.isMesh )
        return

    obj.material = new MeshStandardMaterial( { side: 0 } )
    obj.receiveShadow = true
    obj.castShadow = true

    if ( !mat )
        return
    
    obj.material.color = new Color( mat["color"] )
    
    if ( mat["metalness"] )
        obj.material.metalness = mat["metalness"]
    
    if ( mat["roughness"] )
        obj.material.roughness = mat["roughness"]

    if ( mat["map"] )
        obj.material.map = caricaTexture( mat["map"], mat["scale"] )
    
    if ( mat["metalnessMap"] )
        obj.material.metalnessMap = caricaTexture( mat["metalnessMap"], mat["scale"] )
    
    if ( mat["roughnessMap"] )
        obj.material.roughnessMap = caricaTexture( mat["roughnessMap"], mat["scale"] )

    if ( mat["normalMap"] )
        obj.material.normalMap = caricaTexture( mat["normalMap"], mat["scale"] )
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

function setStile( nomeStile ) {

    if ( !gltfGroup )
        return

    setMateriali( stili[ nomeStile ] )
}


export { init, crea, setStile }


window.setStileProdotto3D = setStile