let materiali = {}

creaMateriale( "MetalloRiciclato", {
    map: "metalloRiciclato/diffuse.jpg",
    scale: 16,
    metallic: 1,
    roughness: 0.3,
    normalMap: "metalloRiciclato/normal.jpg"
} )

creaMateriale( "MetalloLucido", {
    map: "metalloLucido/diffuse.jpg",
    roughness: 0.5,
    metalnessMap: "metalloLucido/metalness.jpg",
    normalMap: "metalloLucido/normal.jpg"
} )

creaMateriale( "Legno", {
    map: "legno/diffuse.jpg",
    roughnessMap: "legno/roughness.jpg",
    normalMap: "legno/normal.jpg"
} )


function creaMateriale( nomeMateriale, params ) {

    let mat = {}

    mat[ "color" ]                  = ( params.color ? params.color : null)
    mat[ "scale" ]                  = ( params.scale ? params.scale : 1)
    mat[ "map" ]                    = ( params.map ? params.map : null)
    mat[ "metalness" ]              = ( params.metalness ? params.metalness : null)
    mat[ "metalnessMap" ]           = ( params.metalnessMap ? params.metalnessMap : null)
    mat[ "roughness" ]              = ( params.roughness ? params.roughness : null)
    mat[ "roughnessMap" ]           = ( params.roughnessMap ? params.roughnessMap : null)
    mat[ "normalMap" ]              = ( params.normalMap ? params.normalMap : null)

    if ( !materiali[ nomeMateriale ] )
        materiali[ nomeMateriale ] = {}

    Object.assign( materiali[ nomeMateriale ], mat )
}

function getMateriale( nomeMateriale ) {

    if( !materiali[ nomeMateriale ] )
        return null
    
    return materiali[ nomeMateriale ]
}