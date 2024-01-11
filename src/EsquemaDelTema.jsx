function App2 (){
    
    function LaFuncionQueDejaElegirElTema(){
        Theme = "Claro u oscuro, lo que sea" //Esta funcion es un setState que declara el Tema que tiene toda la pagina.
    }

    LaFuncionQueDejaElegirElTema()

    return <ComponenteAbuelo Theme={Theme}/> //Esta parte ya esta hecha en el App2.jsx
}

function ComponenteAbuelo( {Theme} ){
    return <ComponentePadre Theme={Theme}/> //Pasamos la prop ya metida en el componente abuelo al componente padre, dandole el mismo nombre, o no, eso ya como queramos
}

function ComponentePadre( {Theme} ){
    return  <ComponenteHijo Theme={Theme}/> //Lo mismo de antes pero del padre al hijo
}



function ComponenteHijo ( {Theme} ) {
    //Theme aqui es una prop que viene definida desde la funcion App2, donde se seteo

    return <div></div>
    // aqui es donde hay algun componente, un div o algo, que necesita saber el tema de la pagina, por el motivo que sea
}
