
function resetAllInput() {
    const allInput = document.querySelectorAll('input');
    allInput.forEach( input => {
        input.value = "";
    })
}

function addProductToTable() {
    
    const inputFields = document.querySelectorAll("#formAddProduct input");
    let inputValues = {
        nombre : inputFields[0].value,
        id : inputFields[1].value,
        stock: inputFields[2].value,
        precio : inputFields[3].value
    }
    if (localStorage.getItem('info') == null){
        localStorage.setItem('info', '[]')
    }
    if (inputValues.nombre =="" || inputValues.id =="" || inputValues.stock =="" || inputValues==""){
        emptyValues();
    }else{
            var oldInfo = JSON.parse(localStorage.getItem('info'));
            oldInfo.push(inputValues);
            localStorage.setItem('info', JSON.stringify(oldInfo));
            let table = document.getElementById("productTable");
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = inputFields[0].value;
            cell2.innerHTML = inputFields[1].value;
            cell3.innerHTML = inputFields[2].value;
            cell4.innerHTML= inputFields[3].value;
            resetAllInput();
    }
    

}

function showProductTable(){
    var colCount = ("#productTableBody td").length;
    console.log(colCount);
    //document.getElementsByClassName("container").refresh()
    if(localStorage.getItem('info') != null){
        var oldInfoDisplay = JSON.parse(localStorage.getItem('info'))
        var infoLenght = oldInfoDisplay.length;
        let table = document.getElementById("productTable");
        const tblBody = document.getElementById("productTableBody");
            // creating all cells
            for (let i = 0; i < infoLenght; i++) {
                localStorage.setItem('info', JSON.stringify(oldInfoDisplay));
                let table = document.getElementById("productTable");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = oldInfoDisplay[i].nombre;
                cell2.innerHTML = oldInfoDisplay[i].id;
                cell3.innerHTML = oldInfoDisplay[i].stock;
                cell4.innerHTML= oldInfoDisplay[i].precio;
        }

    
    
    
    }
}



async function emptyValues(){
    const { value: text } = await Swal.fire({
        icon : 'warning',
        text : "No deje Campos Vacios",
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
    })
}


async function deleteProductToTable(){
const { value: text } = await Swal.fire({
    icon : 'warning',
    text : "Ingrese el ID que desea Eliminar",
    input: 'textarea',
    inputLabel: 'Recuerde que este proceso es IRREVERSIBLE',
    inputPlaceholder: 'Type your message here...',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    let respuesta = text; 
    var oldInfoDisplay = JSON.parse(localStorage.getItem('info'));
    var infoLenght = oldInfoDisplay.length;
    console.log("Tabla antes del eliminado")
    console.table(oldInfoDisplay)
    for (let i = 0; i < infoLenght; i++){
        if (oldInfoDisplay[i].id == respuesta){
            console.log("index")
            console.log(i && " - i")
            console.log(index)
            oldInfoDisplay.splice(i, 1);
            console.log("splyceado")
            console.table(oldInfoDisplay)
            localStorage.setItem('info', JSON.stringify(oldInfoDisplay));
        }
    }
  }
}