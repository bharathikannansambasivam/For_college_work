
function calculate(){
    document.getElementById('calculate').style.color = "black" ;
const A=parseFloat(document.getElementById("valueA").value);
const B = parseFloat(document.getElementById('valueB').value);
if((!isNaN(A) && !isNaN(B)) ){
    var result = A*A + B*B;

    document.getElementById('calculate').innerText = "The A value is  :"+A  + "\nThe B value is  :"+B +"\nResult: " + result +
    "\nUsing this formula Z=A²+ B²";
    document.getElementById('valueA').value = '';
    document.getElementById('valueB').value = '';
   
   
}
else{
    
    document.getElementById('calculate').style.color = "red" 
    document.getElementById('calculate').innerText=   'Please Enter valid number ';
   
    calculate.style.color = 'red';
}


}




  
       