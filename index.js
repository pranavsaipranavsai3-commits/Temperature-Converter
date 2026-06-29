
const input = document.getElementById("input");
const cToF = document.getElementById("c2f");
const fToC = document.getElementById("f2c");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

console.log("Starting");
submit.onclick= function(){
    let num = Number(input.value.trim());
    console.log(`Number is ${num}`)
    if(isNaN(num)){
        window.alert("Enter valid Number to convert");
    } else {
        let res ;
        if(cToF.checked){
            res=num*9/5+32;
        } 
        else if (fToC.checked) {
            res=num*5/9-32;
        } else {
            res=0;
            window.alert("Please SELECT Type of Conversion");
        }
        output.textContent=res.toFixed(2)
    }
}

