let prodotti = {}

creaProdotto( "divani", {
    titolo: "Divano Wes",
    descrizione: "Lorem ipsum dolor sit amet",
    dimensioni: [1, 2, 3],
    modello: "divano_wes",
    stili: {
        "Predefinito": {
            base: "Base",
            cuciture: "Cuciture",
            cuscinoDX: "Cuscino",
            cuscinoSX: "Cuscino",
            piedini: "Base",
            schienaleDX: "Schienale",
            schienaleSX: "Schienale"
        },

        "Test": {
            base: "Base",
            cuciture: "Base",
            cuscinoDX: "Base",
            cuscinoSX: "Base",
            piedini: "Base",
            schienaleDX: "Base",
            schienaleSX: "Base"
        }
    }
} )

creaProdotto( "sedie", {
    titolo: "Sedia Lilly",
    descrizione: "Sedia Lilly",
    dimensioni: [2, 3, 4],
    modello: "sedia_lilly",
    stili: {
        "Predefinito": {
            gamba: "Base",
            sedile: "Schienale"
        },

        "Invertito": {
            gamba: "Schienale",
            sedile: "Base"
        }
    }
} )

creaProdotto( "mobili", {
    titolo: "Armadietto Nelson",
    descrizione: "Armadietto Nelson",
    dimensioni: [3, 4, 5],
    modello: "armadietto_nelson",
    stili: {
        "Predefinito": {
            gambe: "Base",
            maniglie: "Schienale",
            sportelli: "Base",
            struttura: "Cuscino"
        }
    }
} )

creaProdotto( "mobili", {
    titolo: "Armadio Nelson",
    descrizione: "Armadio Nelson",
    dimensioni: [4, 5, 6],
    modello: "armadio_nelson",
    stili: {
        "Predefinito": {
            maniglie: "Cuscino",
            porte: "Schienale",
            sostegno: "Cuciture",
            struttura: "Base"
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