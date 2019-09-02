// function saveName(){
//     var document.getElementById('nombre');
// }

var data = {
    'escuela': '', //'Jesus Reyes Heroles'
    'grado': '', //6
    'grupo': '', //B
    'turno': '', //V
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
    'colonia' : '',
    'municipio' : '',
    'telefono' : '',
    'celular' : ''
};
  
  
function saveAs(text, filename){
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:document/json;charset=urf-8,'+encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
};

function sendAnswers(){
    var x = document.getElementById("frm1");
    for (i = 0; i < x.length ;i++) {
        data[x.elements[i].name] += x.elements[i].value;
    }

    var y = document.getElementById("frm2");
    for (i = 0; i < y.length ;i++) {
        data[y.elements[i].name] += y.elements[i].value;
    }

    var z = document.getElementById("frm3");
    for (i = 0; i < z.length ;i++) {
        data[z.elements[i].name] += z.elements[i].value;
    }

    saveAs(JSON.stringify(data), 'data.json');
    console.log(data)
}
      
