function initIntersectionObserver() {
    
    const callback = (entries) => {
        entries.forEach( (entry) => {
            if ( entry.isIntersecting )
                entry.target.classList.add( "anima-content" )
        } );
    }

    const observer = new IntersectionObserver( callback )

    const contentDivs = document.querySelectorAll(".content")

    contentDivs.forEach( (elem) => {
        observer.observe( elem )
    } );
}

function initPulsanteDownload() {
    const pulsanteDownload = document.querySelectorAll(".btn-download")
    pulsanteDownload.forEach( (i) => {
        i.onclick = () => { alert("Download!") }
    } )
}

function initPulsanteProdotti() {

    const pulsanteProdotti = document.querySelector( ".btn-products" )
    pulsanteProdotti.onclick = () => { this.location.href = "prodotti.html" }
}

function initListMenu() {

    const listMenu = document.querySelector( ".list-menu-container" ).getElementsByTagName( "select" )[0]

    listMenu.onchange = () => {
        this.location.href = listMenu.value;
    }
}


function init() {
    initIntersectionObserver()
    initPulsanteDownload()
    initPulsanteProdotti()
    initListMenu()
}

window.onload = init