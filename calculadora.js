window.addEventListener('load', language);
var idioma;
function language() {
    //Control del range para cambio de idioma
    //Recuperamos el valor del rango
    idioma = document.querySelector('#myRange')
    var mexico = document.getElementById('mx')
    var eua = document.getElementById('usa')
    mexico.addEventListener("click",cambioIdiomaMX,false)
    eua.addEventListener("click", cambioIdiomaEUA,false)
}

function cambioIdiomaMX(){
    idioma.value=0;
    console.log("idioma: "+idioma.value)
}
function cambioIdiomaEUA(){
    idioma.value=1;
    console.log("idioma: "+idioma.value)
}