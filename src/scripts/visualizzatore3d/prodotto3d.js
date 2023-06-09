import {
    Color,
    MeshStandardMaterial,
    TextureLoader
} from 'three'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const gltfLoader = new GLTFLoader()
const textureLoader = new TextureLoader()

class Prodotto3D {

    constructor( objProdotto, scene ) {

        this._scene = scene
        this._caricato = false

        this.init( objProdotto )
    }

    async init( objProdotto ) {

        const nomeModello = objProdotto.modello

        if (nomeModello) {
            const pathModello = `res/prodotti/gltf/${nomeModello}.glb`

            this._group = await this.caricaGLTF( pathModello )
            this._stili = objProdotto.stili
            this.setupMateriale( this._stili[ "Predefinito" ] )
            
            this._scene.add( this._group )
        }
    }

    async caricaGLTF( pathModello ) {

        let gltf = await gltfLoader.loadAsync( pathModello )
        let group = gltf.scene

        group.name = "groupProdotto3D"
        this._caricato = true

        return group
    }

    setupMateriale( stile ) {

        this._group.traverse( (obj) => {

            if ( !obj.isMesh ) return

            obj.material = new MeshStandardMaterial()

            //fix shadow acne nascondendo le backface
            obj.material.side = 0

            const materialeOggetto = getMateriale( stile[ obj.name ] )

            if (materialeOggetto) {

                if ( materialeOggetto["color"] )
                    obj.material.color = new Color( materialeOggetto["color"] )
                
                if ( materialeOggetto["metalness"] )
                    obj.material.metalness = materialeOggetto["metalness"]
                
                if ( materialeOggetto["roughness"] )
                    obj.material.roughness = materialeOggetto["roughness"]

                if ( materialeOggetto["map"] )
                    obj.material.map = textureLoader.load( materialeOggetto["map"] )
                
                if ( materialeOggetto["metalnessMap"] )
                    obj.material.metalnessMap = textureLoader.load( materialeOggetto["metalnessMap"] )
                
                if ( materialeOggetto["roughnessMap"] )
                    obj.material.roughnessMap = textureLoader.load( materialeOggetto["roughnessMap"] )
            }

            obj.receiveShadow = true
            obj.castShadow = true
        } )
    }

    setStile( nomeStile ) {

        this.setupMateriale( this._stili[ nomeStile ] )
    }
}

export { Prodotto3D }