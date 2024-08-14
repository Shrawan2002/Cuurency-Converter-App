const BASE_URL =
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
let fromCurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");
// console.log(fromCurr);

for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if(select.name==="from"&& currCode==="USD"){
            newOption.selected="selected";
        }else if(select.name==="To" && currCode==="INR"){
            newOption.selected="selected";
        }
    }
    select.addEventListener("change",(evt)=>{
        UpdateFlag(evt.target);
    })
}


let UpdateFlag = (element)=>{
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img =element.parentElement.querySelector("img");
    img.src = newSrc;

}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    // console.log(amtVal);
    if(amtVal==""|| amtVal<1){
        amtVal=1;
        amount.value = "1"; // Any change to amount.value immediately reflects in the user
        // interface (UI), meaning the value in the input field on the webpage will update instantly.
    }
    console.log(fromCurr.value);
    console.log(tocurr.value);
    

})