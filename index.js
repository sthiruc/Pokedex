function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    var num = document.getElementById('searchByNumber').value;
    if (charCode >31 &&(charCode < 48 || charCode > 57)){
        return false;
    }else{
        return true;
    }   
}
function allLetter(event){
    var key = event.keyCode;
    return (((key >= 65 && key <= 90) || (key >= 97 && key <= 122)) || key == 8 || key == 13);
}
    
    

