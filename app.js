const BASE_URL =
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");

for(let select of dropdowns){
    for(currCode in countryList){
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
    console.log(element);
    let currCode = element.value;
    console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img =element.parentElement.querySelector("img");
    img.src = newSrc;

}