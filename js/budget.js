//JQUERY
$('document').ready(()=> {

    //DOM primer entrega
    let date = new Date();
    let currentHour = date.getHours();
    let titleContainer = document.getElementById('titlePresupuesto');
    let hours = [
        [6, 12, 'Buen día!</br><h3> Presupuestá tus envíos ahora mismo</h3>'],
        [12, 19, 'Buenas tardes!</br><h3> Presupuestá tus envíos ahora mismo</h3>'],
        [19, 24, 'Buenas noches!</br><h3> Presupuestá tus envíos ahora mismo</h3>'],
        
    ];
    let msg = 'Hola!';
    hours.forEach(hour => {
        if(currentHour >= hour[0] && currentHour < hour[1]) {
            msg = hour[2];
        }            
    })
    titleContainer.innerHTML = msg; 


    //FORMULARIO

    $('#step2').hide();
    $('#step3').hide()
    $('#step4').hide()
    $('#step5').hide()    
    
    $('#step1Label').css('font-weight', 'bold').css('background-color','#00cc33a4');
    $("form[name='step1']").validate({ 
        rules: {
            email: {
                required: true,
                email: true
            },
        }, 
        messages: {
            email: {
                required: 'El campo es obligatorio',
                email: 'Ingrese una cuenta de Gmail'
            },
        },


        submitHandler: (form) => { 
            $('#step1').slideUp("slow", ()=>{ 
                $("#step2").slideDown("slow", () => {
                    $('#step1Label').css('font-weight', 'normal'); 
                    $('#step2Label').css('font-weight', 'bold').css('background-color','#00cc33a4');
                    
                });
            });
        }
    });
    $("form[name='step2']").validate({
        rules: {
            origen: {
                required: true,
                },
        messages: {
            origen: {
                required: 'Debe seleccionar el origen de su encomienda' //no me anda
                }
                }         
            },
        submitHandler: (form) => { 
            $('#step2').slideUp("slow", ()=>{ 
                $("#step3").slideDown("slow", () => {
                    $('#step2Label').css('font-weight', 'normal'); 
                    $('#step3Label').css('font-weight', 'bold').css('background-color','#00cc33a4'); 
                });
            });
        }
    });
        
    $("form[name='step3']").validate({
        rules: {
                select: {
                    required: true,
                },          
            },
            submitHandler: (form) => {  
            $('#step3').slideUp("slow", ()=>{ 
                $("#step4").slideDown("slow", () => {
                    $('#step3Label').css('font-weight', 'normal'); 
                    $('#step4Label').css('font-weight', 'bold').css('background-color','#00cc33a4'); 
                });
            });
        }
    });
    $("form[name='step4']").validate({
        rules: {
                select: {
                    required: true,
                },         
            },
            submitHandler: (form) => {
            $('#step4').slideUp("slow", ()=>{
                $("#step5").slideDown("slow", () => {
                    $('#step4Label').css('font-weight', 'normal'); 
                    $('#step5Label').css('font-weight', 'bold').css('background-color','#00cc33a4'); 
                });
            });
        }
    });   
        
    //Presupuesto
    $('#submitBudget').click(function(e){      
    let origen = $('#origen')[0];
    let origenSelected = origen.options[origen.selectedIndex].value;
    let origenLocalidad = origen.options[origen.selectedIndex].label;

    let destino = $('#destino')[0];
    let destinoSelected = destino.options[destino.selectedIndex].value;
    let destinoLocalidad = destino.options[destino.selectedIndex].label;

    let weight = $('#weight')[0].value;

    var sucursalSelected;
    sucursalArray.forEach(function(locales){
        if (locales.id == origenSelected) {
            sucursalSelected = locales;
        }
    });

    let distancia = sucursalSelected.distancias[destinoSelected];
    let budget = distancia * weight;
    var today = moment();
    today.locale('es')
    today = today.format('Do MM YYYY, h:mm a');

    $('#date').text(today);
    $('#fullNameBudget').text("Presupuesto " + document.getElementById("fullName").value);
    $('#origenBudget').text("Desde: " + origenLocalidad);
    $('#destinoBudget').text("Hasta: " + destinoLocalidad);
    $('#bulto').text("Una encomienda que pesa: " + weight + "Kg.");
    $('#budgetModal').text("$"+budget);
    });
    

    
    //funcion de orden alfabetico
    function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }
   
    
    //funcion para agregar las sucursales
    let sucursal;
    sucursal = document.getElementsByName('sucursal'); 
    
     //AJAX
    $.ajax({
        dataType: "json",
        url: "/proyectoJs/js/sucursalArray.json",
        success: function (data,status,xhr) {  
            data.sort(function(a, b) {
                return compareStrings(a.localidad, b.localidad);
            });

             // success callback function
            data.forEach(function(localidad) { 
                
                sucursal.forEach(function(inputSucural){
                    let item = document.createElement('option');
                    item.textContent = localidad.localidad;
                    item.value = localidad.id;
                    inputSucural.appendChild(item);
                });

                //Funcion para que comience vacia
                sucursal.forEach(function (iSucursal){
                    iSucursal.value = -1;
                });  
            })
        },
        error: function(textStatus, errorMessage){
            console.log(textStatus, errorMessage)
        }

      });

 
    
  
    
})//READY

function refreshPage(){
    window.location.reload();
} 


//STORAGE
const KEYNAME = "keyName";
const KEYEMAIL = "keyEmail";
var nameInput = document.getElementById("fullName");
nameInput.addEventListener('blur', saveName);

function saveName(){
    localStorage.setItem(KEYNAME, nameInput.value);
}

function loadSavedName(){
    nameInput.value =  localStorage.getItem(KEYNAME);
}
loadSavedName();

var emailInput = document.getElementById("email");
emailInput.addEventListener('blur', saveEmail);

function saveEmail(){
    localStorage.setItem(KEYEMAIL, emailInput.value);
}

function loadSavedEmail(){
    emailInput.value =  localStorage.getItem(KEYEMAIL);
}
loadSavedEmail();   
  






