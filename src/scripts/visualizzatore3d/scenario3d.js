import {
    DirectionalLight,
    AmbientLight,
    Color,
    MeshStandardMaterial,
    TextureLoader,
    RepeatWrapping
} from "three"

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()
const textureLoader = new TextureLoader()

class Scenario3D {

    constructor( scene ) {

        this._scene = scene

        this.init()
    }

    init() {

        this._dirLight = new DirectionalLight( 0xffffff )
        this._dirLight.castShadow = true
        this._dirLight.position.set( 2, 7.5, 5 )
        this._dirLight.lookAt( 0, 0, 0 )
        
        this._ambLight = new AmbientLight( 0x8f8f8f, 0.75 )
        
        this._scene.add( this._dirLight )
        this._scene.add( this._ambLight )
        
        this.caricaBaseScenario()
    }

    async caricaBaseScenario() {
        
        const gltf = await gltfLoader.loadAsync( "res/scenario/gltf/base_scenario.glb" )
        this._baseScenario = gltf.scene.children[ 0 ]
        this._baseScenario.receiveShadow = true

        Promise.all( [

            textureLoader.loadAsync( "res/scenario/materiali/metal/diffuse.jpg" ),
            textureLoader.loadAsync( "res/scenario/materiali/metal/normal.jpg" ),
            textureLoader.loadAsync( "res/scenario/materiali/metal/roughness.jpg" )
        ]  ).then( (textures) => {

            this._baseScenario.material = new MeshStandardMaterial( {
                map: textures[ 0 ],
                normalMap: textures[ 1 ],
                roughnessMap: textures[ 2 ]
            } )
        } )
        
        this._scene.add( this._baseScenario )
    }

    setMostraBase( stato ) {

        this._baseScenario.visible = stato
    }

    setColoreBase( colore ) {

        this._baseScenario.material.color = new Color( colore )
    }

    setPosizioneLuce( x, y, z ) {

        this._dirLight.position.set( x, y, z )
        this._dirLight.lookAt( 0, 0, 0 )
    }

    update() {
        
    }
}

export { Scenario3D }