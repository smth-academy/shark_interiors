let prodotti = {}

creaProdotto( "tavoli", {
    titolo: "Tavolo Halley",
    descrizione: "",
    dimensioni: [7, 8, 9],
    modello: "tavolo_halley",
    stili: {
        "Predefinito": {
            gamba: 0xffffff,
            placca: 0xffffff,
            ripiano: 0xffffff
        },
        
        "Rosso": {
            ripiano: 0xff0000
        },

        "Blu": {
            gamba: 0x0000ff,
            placca: 0x0000ff
        }
    }
} )


function creaProdotto( categoria, oggettoProdotto ) {

    if ( !categoria )
        return
    
    if ( !prodotti[ categoria ] )
        prodotti[ categoria ] = []
    
    oggettoProdotto[ "categoria" ] = categoria
    oggettoProdotto[ "id" ] = prodotti[ categoria ].length

    prodotti[ categoria ].push( oggettoProdotto )
}

function getProdotto( categoria, id ) {

    if( !prodotti[ categoria ] )
        return null

    if( !prodotti[ categoria ][ id ] )
        return null
    
    return prodotti[ categoria ][ id ]
}