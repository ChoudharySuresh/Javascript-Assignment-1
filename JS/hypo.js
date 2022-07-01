const side = document.querySelectorAll(".input");
const btn = document.querySelector(".btn");
const output = document.querySelector("#output-hypo");

let calhypo = ()=>{
    if(side[0].value >0 && side[1].value >0){
        const sumsquare = side[0].value **2 + side[1].value**2;
        const hypo = Math.sqrt(sumsquare);
        output.innerText = `Hypotenus is : ${hypo}`;
    }
    else{
        output.innerText = `Enter the positive number`;
    }
}

btn.addEventListener("click",calhypo,false);