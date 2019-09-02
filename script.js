// function saveName(){
//     var document.getElementById('nombre');
// }

var data = {
    'escuela': 'Jesus Reyes Heroles',
    'grado': '6',
    'grupo': 'B',
    'turno': 'V'
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
    saveAs(JSON.stringify(data), 'data.json');
    console.log(data)
}
      
