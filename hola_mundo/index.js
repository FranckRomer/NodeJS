// HOla
    // console.log('Hola mundo');

    // let i=0;
    // setInterval(() => {
    //     console.log('Sigo vivo', i)
    //     i++
    // }, 1000);


//  Funcion asincrona
let i=0;
function soyAsincrona(miCallback){
    console.log("soy una funcion asincrona")
    setTimeout(() => {
        console.log('estoy siendo asincrona',i)
        miCallback();
        i++
    }, 1000);
}

console.log('iniciando proceso . . .')
soyAsincrona(function(){
    console.log('terminando proceso . . .')
});
