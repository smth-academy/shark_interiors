import {
    Color,
    MeshStandardMaterial,
    TextureLoader
} from 'three'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'


const gltfLoader = new GLTFLoader()
const textureLoader = new TextureLoader()

let gltfGroup
let stili


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

        setMaterialeOggetto( obj, getMateriale(stile[ obj.name ]) )
    } )
}

function setMaterialeOggetto( obj, mat ) {

    if ( !obj.isMesh )
        return

    obj.material = new MeshStandardMaterial( { side: 0 } )
    obj.receiveShadow = true
    obj.castShadow = true

    if ( !mat )
        return
    
    if ( mat["color"] )
        obj.material.color = new Color( mat["color"] )
    
    if ( mat["metalness"] )
        obj.material.metalness = mat["metalness"]
    
    if ( mat["roughness"] )
        obj.material.roughness = mat["roughness"]

    if ( mat["map"] )
        obj.material.map = textureLoader.load( mat["map"] )
    
    if ( mat["metalnessMap"] )
        obj.material.metalnessMap = textureLoader.load( mat["metalnessMap"] )
    
    if ( mat["roughnessMap"] )
        obj.material.roughnessMap = textureLoader.load( mat["roughnessMap"] )
}

function setStile( nomeStile ) {

    if ( !gltfGroup )
        return

    setMateriali( stili[ nomeStile ] )
}


export { crea, setStile }


window.setStileProdotto3D = setStile