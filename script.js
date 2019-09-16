var currentTab = 0;
showTab(currentTab);

var data = {
    //Datos Generales del Alumno
    'claveAlumno': '',
    'escuela': '',
    'municipio': '',
    'grado': '',
    'grupo': '',
    'numLista': '',
    'turno': '',
    //Nombre del alumno
    'aPaterno' : '',
    'aMaterno' : '',
    'nombres' : '',
    'edad' : '',
    'sexo' : '',
    'lugarNacimiento' : '',

    //Redes Sociales
    'facebook' : '',
    'instagram' : '',
    'correo' : '',

    //Domicilio
    'calle' : '',
    'numCasa' : '',
    'entreCalles': '',
    'colonia' : '',
    'municipio' : '',
    'telefono' : '',
    'celular' : '',

    //Datos de Padre, Madre o Tutor
    //Nombre completo del Padre
    'aPaternoPadre': '',
    'aMaternoPadre': '',
    'nombresPadre': '',
    'edadPadre' : '',
    'ocupacionPadre': '',
    'gradoPadre' : '',
    'telefonoPadre' : '',

    //Nombre completo de la Madre
    'aPaternoMadre' : '',
    'aMaternoMadre' : '',
    'nombresMadre' : '',
    'edadMadre' : '',
    'ocupacionMadre' : '',
    'gradoMadre' : '',
    'telefonoMadre' : '',

    //Datos de Familia
    //Estado Civil de Tus Padres
    'civilCasados' : '',
    'civilDivorciados' : '',
    'civilSeparados' : '',
    'civilUnionL' : '',
    'civilViudo' : '',
    'civilJuntoDeNuevo' : '',
    'civilVolvioACasar' : '',

    //¿Con quien vives?
    'vivePapa' : '',
    'viveMama' : '',
    'viveHermano' : '',
    'viveAbuelo' : '',
    'viveTio' : '',
    'vivePrimo' : '',
    'viveSobrino' : '',
    'viveTutor' : '',
    'viveOtro' : '',
    
    //Contacto Emergencia
    'nombreContacto' : '',
    'relacionContacto' : '',
    'telefonoContacto' : ''

};
function sanitize(str){
    var ans = str.normalize("NFD").replace(/[\u0300-\u036f]^([a-zA-Z0-9\s]+)/g, "")
    ans = ans.replace(/[^0-9a-z\s]/gi, '')
    return ans.toUpperCase();
}
   
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function checkAnswers(){

}

function getRadioVal(form, name) {
    var val;
    var radios = form[name];
    
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break; 
        }
    }
    return val;
}

function getCheckBoxVal(form,name){
    var atLeastOne = false;
    var checkboxes = form[name];

    for (var i=0, len=checkboxes.length; i<len; i++) {
        if ( checkboxes[i].checked ) { 
            data[checkboxes[i].id] = 'SI';
            atLeastOne = true;
        }
    }
    return atLeastOne;
}

function dumpInfoByForm(form){
    for (var i = 0; i < form.length ;i++) {
        var value;
        if(form.elements[i].type == "radio"){
            value = getRadioVal(form, form.elements[i].name);
            if(form.elements[i].className=='required' && value===undefined){ 
                alert("Completa todos los campos");
                return false;
            }
            i += form.elements[form.elements[i].name].length-1;
        }

        else if(form.elements[i].type == "checkbox"){
            var atLeastOne = getCheckBoxVal(form, form.elements[i].name);
            if(form.elements[i].className == 'required' && atLeastOne == false){
                alert("Elegir al menos una opción");
                return false;
            }
            i += form.elements[form.elements[i].name].length-1;
            continue;
        }

        else{
            value = form.elements[i].value;
            if(form.elements[i].className=='required' && value===''){
                alert("Completa todos los campos");
                return false;
            }
        }

        data[form.elements[i].name] = sanitize(value);
    }

    return true;
}

function sendAnswers(){
    var today = new Date();
    var year = today.getFullYear();
    var minutes = today.getMinutes();
    var claveAlumno= '122'+data['turno']+'SJL'+data['grado']+data['grupo']+data['numLista']+data['sexo']+'-'+year+'-'+minutes;
    data['claveAlumno'] = claveAlumno;
    const keys = Object.keys(data);
    console.log(keys.length);
    var answers = new Array(keys.length);
    for (var i = 0; i < answers.length; i++) {
        answers[i] = new Array(2);
    }
    var csv="";
    for (var i = 0; i < answers.length; i++) {
        answers[i][0] = keys[i];
        csv+=keys[i];
        csv+=', ';
        answers[i][1] = data[keys[i]];
    }
    csv+="\r\n";
    for (var i = 0; i < answers.length; i++) {
        csv+=data[keys[i]];
        csv+=', ';
    }
    csv+="\r\n";
    download(csv, 'AXIOS-'+claveAlumno+'.csv', 'data:text/csv;charset=urf-8');
    console.log(csv);
    document.location.reload(true);
}
      
function showTab(n){
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Enviar Respuestas";
    } else {
      document.getElementById("nextBtn").innerHTML = "Siguiente";
    }
    //... and run a function that will display the correct step indicator:
    //fixStepIndicator(n)

}

function nextPrev(n) {
    console.log(data);
    var x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;

    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
    //document.getElementById("frm1").submit();
    sendAnswers();
    return false;
    }
    showTab(currentTab);
}

function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}

function validateForm() {
    var x = document.getElementsByClassName("tab");
    return dumpInfoByForm(x[currentTab].getElementsByTagName("form")[0]);
  }