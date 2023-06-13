import {
    Color
} from 'three'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'


let gltfLoader

let gltfGroup
let stili


function init( loadingManager ) {

    gltfLoader = new GLTFLoader( loadingManager )
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


export { init, crea, setStile }


window.setStileProdotto3D = setStile