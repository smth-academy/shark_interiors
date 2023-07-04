let prodotti = {}

creaProdotto( "tavoli", {
    titolo: "Tavolo Halley",
    descrizione: "Descrizione",
    dimensioni: [
        [3, 0.7, 1.30], "m"
    ],
    modello: "tavolo_halley",
    stili: {
        "Predefinito": {},
        
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
    descrizione: "Descrizione",
    dimensioni: [
        [70, 135, 46], "cm"
    ],
    modello: "armadio_nelson",
    stili: {
        "Predefinito": {}
    }
} )

creaProdotto( "mobili", {
    titolo: "Armadietto Nelson",
    descrizione: "Descrizione",
    dimensioni: [
        [2.4, 0.7, 0.5], "m"
    ],
    modello: "armadietto_nelson",
    stili: {
        "Predefinito": {}
    }
} )

creaProdotto( "sedie", {
    titolo: "Sedia Lilly",
    descrizione: "Descrizione",
    dimensioni: [
        [0.5, 1, 0.5], "m"
    ],
    modello: "sedia_lilly",
    stili: {
        "Predefinito": {},

        "Rosso": {
            sedile: 0xff6666
        },

        "Blu": {
            sedile: 0x6666ff
        }
    }
} )

creaProdotto( "divani", {
    titolo: "Divano Wes",
    descrizione: "Descrizione",
    dimensioni: [
        [2.7, 0.8, 1], "cm"
    ],
    modello: "divano_wes",
    stili: {
        "Predefinito": {}
    }
} )

creaProdotto( "mobili", {
    titolo: "Mobile Nelson 1",
    descrizione: "Mobile basso",
    dimensioni: [
        [240, 73, 51], "cm"
    ],
    modello: "nelson_1",
    stili: {
        "Predefinito": {},
    }
} )

creaProdotto( "mobili", {
    titolo: "Mobile Nelson 2",
    descrizione: "Mobile basso vetro",
    dimensioni: [
        [180, 60, 46], "cm"
    ],
    modello: "nelson_2",
    stili: {
        "Predefinito": {},
    }
} )

creaProdotto( "mobili", {
    titolo: "Mobile Nelson 3",
    descrizione: "Armadio",
    dimensioni: [
        [70, 135, 46], "cm"
    ],
    modello: "nelson_3",
    stili: {
        "Predefinito": {},
    }
} )

creaProdotto( "mobili", {
    titolo: "Mobile Nelson 4",
    descrizione: "Scaffale in vetro",
    dimensioni: [
        [80, 179, 46], "cm"
    ],
    modello: "nelson_4",
    stili: {
        "Predefinito": {},
    }
} )

creaProdotto( "tavoli", {
    titolo: "Tavolino Nelson 05A",
    descrizione: "Tavolino salotto",
    dimensioni: [
        [90, 40, 60], "cm"
    ],
    modello: "nelson_05A",
    stili: {
        "Predefinito": {},
    }
} )

creaProdotto( "divani", {
    titolo: "Poltrona Wes",
    descrizione: "Poltrona Wes",
    dimensioni: [
        [155, 86.5, 106], "cm"
    ],
    modello: "poltrona_wes",
    stili: {
        "Predefinito": {},
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