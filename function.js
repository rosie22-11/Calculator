var reSult = document.getElementById('result');
function dis(obj){
    var pushed = obj.innerHTML;
    if(pushed == '=')
    {
        reSult.innerHTML = eval(reSult.innerHTML);
    }else if(pushed == 'C'){
        reSult.innerHTML = '0';
    }else {
        if(reSult.innerHTML == '0'){
            reSult.innerHTML = pushed;
        }else{
            reSult.innerHTML += pushed;
        }
    }
}
























/*

function dis(value)
{
    console.log(value);
    //document.getElementsByClassName("item1").innerHTML=value;
    document.getElementById('result').innerHTML=value;

}


function solve()
{
    let x=10;
    let y=20;
    let z=x+y;
    console.log(z);
}

function clr(){
    document.getElementById('result').innerHTML.value=" ";
    console.log("clck");
}
*/

