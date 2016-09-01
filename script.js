function Vehicle(){
    var id=0;
    return function newVehicle(type){
     id++;
     return "Created a new "+type+" with id "+id;
    }
}

var vehicleFactory=Vehicle();
function createVehicle(){
    var vehicle=document.getElementById("vehicleType").value;
    alert(vehicleFactory(vehicle));
}