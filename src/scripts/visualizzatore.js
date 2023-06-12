const pathAnteprime = "res/prodotti/"

let visualizzatore
let info
let stileSlotContainer

function initDomSelector() {

    visualizzatore = document.querySelector( "#visualizzatore" )

    info = {
        categoria:      document.querySelector( "[data-info=categoria]" ),
        titolo:         document.querySelector( "[data-info=titolo]" ),
        dimensioni:     document.querySelector( "[data-info=dimensioni]" ),
        stile:          document.querySelector( "[data-info=stile]" ),
        descrizione:    document.querySelector( "[data-info=descrizione]" )
    }

    stileSlotContainer = document.querySelector( "#stile-slot-container" )
}

let slotStili = []

function addSlotStile( nomeStile ) {

    const btn = document.createElement( "button" )
    btn.classList = "stile-slot"
    btn.innerText = nomeStile

    btn.onclick = () => {

        setStileAttivo( nomeStile )
        window.setStileProdotto3D( nomeStile )
    }

    slotStili.push( btn )
    stileSlotContainer.append( btn )
}

function setStileAttivo( nomeStile ) {

    info.stile.innerText = `Stile: ${nomeStile}`

    slotStili.forEach( (s) => {
            
        if ( s.innerText === nomeStile ) {
            s.classList.add( "active-slot" )
            return
        }

        s.classList.remove( "active-slot" )
    } )
}

function visualizzaProdotto( categoria, id ) {

    let pr = getProdotto( categoria, id )
    
    if ( pr == null ) {
        visualizzaVuoto()
        return
    }

    info.categoria.innerText =
        `Collezione ${pr.categoria}`
    
    info.titolo.innerText =
        pr.titolo

    info.dimensioni.innerText =
        `Dimensioni: ${pr.dimensioni[0]}x${pr.dimensioni[1]}x${pr.dimensioni[2]}`

    for( const nomeStile of Object.keys( pr.stili ) ) {
        addSlotStile( nomeStile )
    }

    window.setProdotto3D( pr )

    setStileAttivo( "Predefinito" )
    
    info.descrizione.innerText =
        pr.descrizione
}

function visualizzaVuoto() {

    visualizzatore.style.display = "none"
}

function init() {

    initDomSelector()
    
    const urlSearchParams = new URLSearchParams( window.location.search )

    let categoria = urlSearchParams.get( "categoria" )
    let id = urlSearchParams.get( "id" )

    if ( !categoria || !id ) {
        visualizzaVuoto()
        return
    }

    visualizzaProdotto( categoria, id )
}


window.onload = init