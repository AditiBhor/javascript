// const btntest=document.querySelectorAll(".btn");
// console.log(btntest);
// btntest[0].addEventListener("click", (e)=>
// {
//     if(btntest[0].getAttribute("class")=="btn")
//     {
//         btntest[0].setAttribute("class" ,"")
//     }
//     else{
//         btntest[0].setAttribute("class" ,"btn")
//     }
// });
const btntest=document.querySelectorAll(".btn-main");
console.log(btntest);
btntest[0].addEventListener("click", (e)=>
{
    if(btntest[0].classList.contains('btn'))
    {
        btntest[0].classList.remove('btn');
        console.log(btntest[0].getAttribute('class'));
    }
    else{
        
        btntest[0].classList.add('btn');
        console.log(btntest[0].getAttribute('class'));
    }
});
