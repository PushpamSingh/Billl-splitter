const billinput=document.querySelector('.inputContainer input');
const tipsper=document.querySelectorAll('.tip-input .tips');
const customtipinput=document.querySelector('.Customtip');
const people=document.querySelector('.Custominput');
const tipAmount=document.querySelector('.tip-amount h4');
const totalAmount=document.querySelector('.total-amount h4');
const eachAmount=document.querySelector('.Each-amount h4');
const generatebtn=document.querySelector('.billbtn');
const resetbtn=document.querySelector('.resetbtn');


tipsper.forEach(ele=>{
    ele.addEventListener('click',(e)=>{
        // console.log(parseInt(e.target.innerText)+4)
        customtipinput.value=e.target.innerText;
        console.log(customtipinput.value)
        return customtipinput.value;
    })
})
generatebtn.addEventListener('click',(e)=>{
    let tipvalue=customtipinput.value*(parseInt(billinput.value))/100
    tipAmount.innerText=`₹${tipvalue}`;
    let totalvalue=parseInt(billinput.value)+tipvalue
    totalAmount.innerText=`₹${totalvalue}`;
    let eachpersonvalue=totalvalue/parseInt(people.value);
    eachAmount.innerText=`₹${eachpersonvalue}`;
})

resetbtn.addEventListener('click',(e)=>{
    billinput.value=0;
    customtipinput.value=0;
    people.value=0;
    tipAmount.innerText=`₹0`;
    totalAmount.innerText=`₹0`;
    eachAmount.innerText=`₹0`;

})

