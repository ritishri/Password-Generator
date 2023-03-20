let passwordLen=8;
// console.log(passwordLen);

let isUppercase="false";
let isNumbers="false";
let isSymbols="false";

const passwordRangeIn=document.getElementById('rangeInput');
const passwordRange=document.getElementById('rangeVal');
const genBtn=document.getElementById('genBtn');
const passwordEl=document.getElementById('password');

const getPass=(passlength)=>{
    const lowercaseLett=  "abcdefghijklmnopqrstuvwxyz";
    const upercaseLett= isUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    const numbers= isNumbers ? "0123456789" : "";
    const symbols= isSymbols ? "!@#$%&*-+^" :"";

    const passChar=lowercaseLett + upercaseLett +numbers + symbols;

    let password="";

    for(let i=0;i<passlength;i++){
        const charIndex=Math.floor(Math.random() * passChar.length);
        password+=passChar[charIndex];
    }
    return password;
}

passwordRangeIn.addEventListener("input",(e)=>{
    passwordLen= +e.target.value;
    // console.log(passwordLen);
    passwordRange.innerText=passwordLen;
})



genBtn.addEventListener("click",()=>{

    const uppercaseCheckEl=document.getElementById('uppercase');
    const numberCheckEl=document.getElementById('numbers');
    const symbolCheckEl=document.getElementById('symbols');

    isUppercase=uppercaseCheckEl.checked;
    isNumbers=numberCheckEl.checked;
    isSymbols=symbolCheckEl.checked;
       
    const passwordEl=document.getElementById('password');

  const passwordout=getPass(passwordLen);
  passwordEl.innerHTML=passwordout;
//   console.log("password ",passwordout)
})


passwordEl.addEventListener("click",(e)=>{
    if(e.target.innerText.length>0){
        navigator.clipboard
        .writeText(passwordEl.innerText)
        .then(()=>{
            alert("Copy to Clipboard")
        })
        .catch((err)=>{
          alert("Couldn't copy")
        });
    }
});






