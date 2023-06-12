let materiali = {}

creaMateriale( "Base", {
    color: 0xD9DCD6,
    metalness: 0.5,
    roughness: 0.2
} )

creaMateriale( "Cuciture", {
    color: 0x16425B,
    metalness: 0.5,
    roughness: 0.2
} )

creaMateriale( "Legno", {
    color: 0x9a9a9a,
    map: "res/texturetest2.jpg",
    roughness: 0.8,
    roughnessMap: "res/texturetest2.jpg"
} )

creaMateriale( "Schienale", {
    color: 0x2F6690,
    map: "res/texturetest.jpg",
    roughness: 0.8,
    roughnessMap: "res/texturetest.jpg"
} )

creaMateriale( "Cuscino", {
    color: 0x3A7CA5,
    map: "res/texturetest.jpg",
    roughness: 0.8,
    roughnessMap: "res/texturetest.jpg"
} )

creaMateriale( "Test", {
    map: "res/checker3.png"
} )



function creaMateriale( nomeMateriale, params ) {

    let mat = {}

    mat[ "color" ]          = ( params.color ? params.color : null)
    mat[ "map" ]            = ( params.map ? params.map : null)
    mat[ "metalness" ]      = ( params.metalness ? params.metalness : null)
    mat[ "metalnessMap" ]   = ( params.metalnessMap ? params.metalnessMap : null)
    mat[ "roughness" ]      = ( params.roughness ? params.roughness : null)
    mat[ "roughnessMap" ]   = ( params.roughnessMap ? params.roughnessMap : null)

    if ( !materiali[ nomeMateriale ] )
        materiali[ nomeMateriale ] = {}

    Object.assign( materiali[ nomeMateriale ], mat )
}

function getMateriale( nomeMateriale ) {

    if( !materiali[ nomeMateriale ] )
        return null
    
    return materiali[ nomeMateriale ]
}