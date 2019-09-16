var currentTab = 0;
showTab(currentTab);

var data = {
    //Datos Generales del Alumno
    'claveAlumno': '',
    'escuela': '',
    'municipioEscuela': '',
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

    'asistidoAcompPersonal': '',
    'numAcompPersonal': '',

    //Redes Sociales
    'facebook' : '',
    'instagram' : '',
    'correo' : '',

    //Domicilio
    'calle' : '',
    'numCasa' : '',
    'entreCalles': '',
    'colonia' : '',
    'municipioCasa' : '',
    'telefonoCasa' : '',
    'celular' : '',

    //Datos de Padre, Madre o Tutor
    //Nombre completo del Padre
    'aPaternoPadre': '',
    'aMaternoPadre': '',
    'nombresPadre': '',
    'edadPadre' : '',
    'ocupacionPadre': '',
    'gradoPadre' : '',
    'gradoPadreCompleto' : '',
    'telefonoPadre' : '',

    //Nombre completo de la Madre
    'aPaternoMadre' : '',
    'aMaternoMadre' : '',
    'nombresMadre' : '',
    'edadMadre' : '',
    'ocupacionMadre' : '',
    'gradoMadre' : '',
    'gradoMadreCompleto': '',
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
    'civilOtro' : '',

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

var municipios = [
        {
            clave: "SJL",
            name: "San Juan de los Lagos",
            escuelas: [
                {
                    clave: "25",
                    name: "General Foránea #25"
                    
                },
                {
                    clave: "48",
                    name: "#48"
                },
                {
                    clave: "122",
                    name: "#122 Francisco Montes de Oca"

                }
            ]
        }, 
        {
            clave: "SMA",
            name: "San Miguel el Alto",
            escuelas: [
                {
                    clave: "25",
                    name: "#25"
                    
                },
                {
                    clave: "77",
                    name: "General Foránea #77"
                },
            ]
        },
        {
            clave: "ZAP",
            name: "Zapopan",
            escuelas: [
                {
                    clave: "5",
                    name: "Mixta No. 5 Lic Juan Manuel Ruvalcaba de la Mora"
                    
                },
                {
                    clave: "59",
                    name: "General #59 Francisco Márquez"
                },
                {
                    clave: "67",
                    name: "General #67 Juan José Arreola"
                    
                },
                {
                    clave: "136",
                    name: "General #136 Alma Rosa Padilla Rodriguez"
                },
            ]
        },
    ]

function sanitize(str){
    var ans = str.normalize("NFD").replace(/[\u0300-\u036f]^([a-zA-Z0-9\s]+)/g, "")
    ans = ans.replace(/[^0-9a-z\s]/gi, '')
    return ans.toUpperCase();
}

function showNumbSessions(){
    if(document.getElementById("numSessions").style.visibility=="hidden"){
        document.getElementById("numSessions").style.visibility="visible"   
    } else document.getElementById("numSessions").style.visibility="hidden";
}

function setSchools(){
    var selectMun = document.getElementById("municipioEscuela");
    var mun = selectMun.options[selectMun.selectedIndex].value;
    var filteredMunicipios = municipios.filter(function(x){
        return x.clave == mun;
    })
    schools = filteredMunicipios[0].escuelas;
    var select = document.getElementById("escuela");
    for(var i=select.options.length-1; i>=0; i--){
        select.options.remove(i);
    }
    select.options = null;
    for(var i=0; i<schools.length; i++){
        var option = document.createElement("OPTION");
        option.text=schools[i].name;
        option.value = schools[i].clave;
        select.options.add(option);
    }

}

var municipiosEscuela = [['SJL', 'San Juan de los Lagos'], ['SMA', 'San Miguel el Alto'], ['ZAP', 'Zapopan']]



function loadForms(){
    /*
    for(var i=0; i<municipios.length; i++){
        
        var select = document.getElementById("municipioEscuela");
        var option = document.createElement("OPTION");
        option.text=municipios[i].name;
        option.value = municipios[i].clave;
        select.options.add(option);
        
    }
    var selectMun = document.getElementById("municipioEscuela");
    var mun = selectMun.options[selectMun.selectedIndex].value;
    var filteredMunicipios = municipios.filter(function(x){
        return x.clave == mun;
    })
    
    schools = filteredMunicipios[0].escuelas;
    //console.log('schools', schools);
    for(var i=0; i<schools.length; i++){
        var select = document.getElementById("escuela");
        var option = document.createElement("OPTION");
        option.text=schools[i].name;
        option.value = schools[i].clave;
        select.options.add(option);
    }
*/
    for(var i=1; i<=40; i++){
        var select = document.getElementById("numLista");
        var option = document.createElement("OPTION");
        option.text=i;
        option.value=i;
        select.options.add(option);
    }
    for(var i=1; i<=20; i++){
        var select = document.getElementById("edad");
        var option = document.createElement("OPTION");
        option.text=i;
        option.value=i;
        select.options.add(option);
    }
    for(var i=1; i<=100; i++){
        var select = document.getElementById("edadPadre");
        var option = document.createElement("OPTION");
        option.text=i;
        option.value=i;
        select.options.add(option);
    }
    for(var i=1; i<=100; i++){
        var select = document.getElementById("edadMadre");
        var option = document.createElement("OPTION");
        option.text=i;
        option.value=i;
        select.options.add(option);
    }
    for(var i=1; i<=10; i++){
        var select = document.getElementById("numAcompPersonal");
        var option = document.createElement("OPTION");
        option.text=i;
        option.value=i;
        select.options.add(option);
    }
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
        var specialText =false;
        var value;
        if(form.elements[i].type == "radio"){
            value = getRadioVal(form, form.elements[i].name);
            if(form.elements[i].className=='required form-check-input' && value===undefined){ 
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
        else if(form.elements[i].type == "select"){
            var e = form.elements[i];
            data[e.name] = e.options[e.selectedIndex].value;
            //console.log(e, e.options[e.selectedIndex].value)

        }else{
            x = form.elements[i];
            if(x.className=="specialText form-control"){
                specialText = true;
            }
            value = x.value;
            if(form.elements[i].className=='required form-control' && value===''){
                alert("Completa todos los campos");
                return false;
            }
        }
        if(specialText){
            data[form.elements[i].name] = value.replace(/,/g, '');
        } else {
            data[form.elements[i].name] = sanitize(value);
        }

    }

    return true;
}

function sendAnswers(){
    var today = new Date();
    var year = today.getFullYear();
    var minutes = today.getMinutes();
    var claveAlumno= data['escuela']+data['turno']+data['municipioEscuela']+data['grado']+data['grupo']+data['numLista']+data['sexo']+'-'+year+'-'+minutes;
    data['claveAlumno'] = claveAlumno;
    const keys = Object.keys(data);
    //console.log(keys.length);
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
    //console.log(csv);
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
    } else if(n==0){
        document.getElementById("nextBtn").innerHTML = "He leído y acepto el aviso de privacidad";
    }else {
        
      document.getElementById("nextBtn").innerHTML = "Siguiente";
    }
    //... and run a function that will display the correct step indicator:
    //fixStepIndicator(n)

}

function nextPrev(n) {
    //console.log(data);
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