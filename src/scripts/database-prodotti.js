let prodotti = {}

creaProdotto( "divani", {
    titolo: "Divano Wes",
    descrizione: "Descrizione",
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

        "Stile 2": {
            base: "Base",
            cuciture: "Cuciture",
            cuscinoDX: "Base",
            cuscinoSX: "Base",
            piedini: "Base",
            schienaleDX: "Base",
            schienaleSX: "Base"
        },

        "Stile 3": {
            base: "Cuscino",
            cuciture: "Cuciture",
            cuscinoDX: "Base",
            cuscinoSX: "Base",
            piedini: "Base",
            schienaleDX: "Cuscino",
            schienaleSX: "Cuscino"
        }
    }
} )

creaProdotto( "sedie", {
    titolo: "Sedia Lilly",
    descrizione: "Descrizione",
    dimensioni: [2, 3, 4],
    modello: "sedia_lilly",
    stili: {
        "Predefinito": {
            gamba: "Base",
            sedile: "Legno"
        },

        "Stile 2": {
            gamba: "Test",
            sedile: "Base"
        },

        "Stile 3": {
            gamba: "Legno",
            sedile: "Schienale"
        }
    }
} )

creaProdotto( "mobili", {
    titolo: "Armadietto Nelson",
    descrizione: "Descrizione",
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
    descrizione: "Descrizione",
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