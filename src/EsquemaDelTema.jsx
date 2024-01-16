//Las funciones ThemeToggle estaban en ThemeToggle.jsx y usaban un useState y un useEffect.
//El UseEffect establece que ha de cambiar y como (el theme, que en ThemeToggle.jsx es una variable, y la
//arrowfunction que setea el tema general de la pagina) y las dependencias, que esencialmente, es el objeto [Theme].
//El objeto [theme] ha de ser fabricado mediante un useState en app2.jsx, y pasado como prop hasta donde haga falta (en
//donde este usado el themetoggle, es decir, en navbar y en el footer) y de ahi ser pasado de nuevo como prop al ThemeToggle de cada uno.

//El codigo no ha cambiado, unicamente se ha movido el sestate y el objeto Theme al app, de forma global. Los elementos capaces de variar
//son pasados como props a los elementos padres de los dos themtoggles. De este modo, ambos tienen acceso simultaneo al tema de la pagina,
//sin interferir uno con otro

//Aqui un ejemplo visual


function App2 (){
    
    function LaFuncionQueDejaElegirElTema(){
        Theme = "Claro u oscuro, lo que sea" //Esta funcion es un setState que declara el Tema que tiene toda la pagina.
    }

    LaFuncionQueDejaElegirElTema()

    return <ComponenteAbuelo Theme={Theme}/> //Se pasa el theme declarado en App2 todos los componentes de App2. Esta parte ya esta hecha en el App2.jsx. 
}

function ComponenteAbuelo( {Theme} ){
    return <ComponentePadre Theme={Theme}/> //Se pasa la prop ya metida en el componente abuelo al componente padre, dandole el mismo nombre, o no, eso ya como queramos
}

function ComponentePadre( {Theme} ){
    return  <ComponenteHijo Theme={Theme}/> //Lo mismo de antes pero del padre al hijo
}



function ComponenteHijo ( {Theme} ) {
    //Theme aqui es una prop que viene definida desde la funcion App2, donde se seteo

    return <div className={Theme === 'light' ? "DivModoClaro" : "DivModoOscuro"}></div>
    // aqui es donde hay algun componente, un div o algo, que necesita saber el tema de la pagina, por el motivo que sea
}

