var data = {
    'escuela': '',
    'municipio': '',
    'grado': '',
    'grupo': '',
    'numLista': '',
    'turno': '',
    'sexo' : '',
    'aPaterno' : '',
    'aMaterno' : '',
    'nombres' : '',
    'edad' : '',
    'lugarNacimiento' : '',
    'facebook' : '',
    'instagram' : '',
    'correo' : '',
    'calle' : '',
    'numCasa' : '',
    'entreCalles': '',
    'colonia' : '',
    'municipio' : '',
    'telefono' : '',
    'celular' : ''
};
   
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
    var radios = form.elements[name];
    
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break; 
        }
    }
    return val;
}

function getCheckBoxVal(form,name){

}

function dumpInfoByForm(form){
    for (i = 0; i < form.length ;i++) {
        var value;
        if(form.elements[i].type == "radio"){
            value = getRadioVal(form, form.elements[i].name);
            if(form.elements[i].className=='required' && value===''){
                alert("Completa todos los campos");
                return false;
            }
            i += form.elements[form.elements[i].name].length-1;
        }

        else if(form.elements[i].type == "checkbox"){
            
        }

        else{
            value = form.elements[i].value;
            if(form.elements[i].className=='required' && value===''){
                alert("Completa todos los campos");
                return false;
            }
        }

        data[form.elements[i].name] += value;
    }
}



function sendAnswers(){
    var frm1 = document.getElementById("frm1");
    
    if(dumpInfoByForm(document.getElementById("frm1")) == false) return;
    if(dumpInfoByForm(document.getElementById("frm2")) == false) return;
    if(dumpInfoByForm(document.getElementById("frm3")) == false) return;
    
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
        csv+=',';
        answers[i][1] = data[keys[i]];
    }
    csv+="\r\n";
    for (var i = 0; i < answers.length; i++) {
        csv+=data[keys[i]];
        csv+=',';
    }
    csv+="\r\n";
    download(csv, 'respuestas.csv', 'data:text/csv;charset=urf-8');
    console.log(csv);
}
      
