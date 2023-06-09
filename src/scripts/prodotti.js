const containerProdotti = document.querySelector( ".prodotti-container" )
const containerMenu = document.querySelector( ".menu-container" )
const containerListMenu = document.querySelector( ".list-menu-container" ).querySelector( ".menu-item" )

containerListMenu.onchange = () => {
    document.location.href = containerListMenu.value
}

function creaElemento( categoria, id ) {

    const a = document.createElement( "a" )
    a.href = `visualizzatore.html?categoria=${categoria}&id=${id}`
    a.style.textDecoration = "none"
    a.style.color = "var(--blue-color)"
    a.target = "_blank"

    const h2 = document.createElement( "h2" )
    h2.innerText = getProdotto( categoria, id ).titolo

    a.appendChild( h2 )

    return a
}

function creaCategoria( nomeCategoria ) {

    const div = document.createElement( "div" )
    div.id = nomeCategoria
    div.classList = "content content-prodotti"

    const h1 = document.createElement( "h1" )
    h1.innerText = nomeCategoria.charAt( 0 ).toUpperCase() + nomeCategoria.slice( 1 )
    h1.classList = "info-titolo"

    div.appendChild( h1 )

    addCategoriaMenu( nomeCategoria )
    addCategoriaListMenu( nomeCategoria )

    return div
}

function addCategoriaMenu( nomeCategoria ) {

    const a = document.createElement( "a" )
    a.href = `#${nomeCategoria}`
    a.classList = "menu-item"
    a.innerText = nomeCategoria.charAt( 0 ).toUpperCase() + nomeCategoria.slice( 1 )

    containerMenu.append( a )
}

function addCategoriaListMenu( nomeCategoria ) {

    const option = document.createElement( "option" )
    option.value = `#${nomeCategoria}`
    option.innerText = nomeCategoria

    containerListMenu.append( option )
}

for ( const nomeCategoria in prodotti ) {
    
    const sezione = creaCategoria( nomeCategoria )

    prodotti[ nomeCategoria ].forEach(prod => {
        
        sezione.append( creaElemento( nomeCategoria, prod.id ) )
    });

    containerProdotti.append( sezione )
}