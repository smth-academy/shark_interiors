let prodotti = {}

creaProdotto( "tavoli", {
    titolo: "Tavolo Halley",
    descrizione: "",
    dimensioni: [
        [3, 0.7, 1.30], "m"
    ],
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

creaProdotto( "mobili", {
    titolo: "Armadio Nelson",
    descrizione: "",
    dimensioni: [
        [70, 135, 46], "cm"
    ],
    modello: "armadio_nelson",
    stili: {
        "Predefinito": {

        }
    }
} )

creaProdotto( "mobili", {
    titolo: "Armadietto Nelson",
    descrizione: "",
    dimensioni: [
        [2.4, 0.7, 0.5], "m"
    ],
    modello: "armadietto_nelson",
    stili: {
        "Predefinito": {

        }
    }
} )

creaProdotto( "sedie", {
    titolo: "Sedia Lilly",
    descrizione: "",
    dimensioni: [
        [0.5, 1, 0.5], "m"
    ],
    modello: "sedia_lilly",
    stili: {
        "Predefinito": {

        },

        "Rosso": {
            sedile: 0xff6666
        },

        "Blu": {
            sedile: 0x6666ff,
        }
    }
} )

creaProdotto( "divani", {
    titolo: "Divano Wes",
    descrizione: "",
    dimensioni: [
        [2.7, 0.8, 1], "cm"
    ],
    modello: "divano_wes",
    stili: {
        "Predefinito": {

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