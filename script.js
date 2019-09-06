var data = {
    'escuela': '',
    'grado': '',
    'grupo': '',
    'turno': '',
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
    console.log(csv)
}
      
