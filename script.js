const fun = () => {
    const n=document.getElementById('name').value;
    const f=document.getElementById('fla').value;
   const use=document.getElementById('result');
   use.innerHTML=`${n} wants ${f} flavour of icecream`;
   use.style.fontSize='large';
   const image=document.getElementById('i');
    if(f==="strawberry"){
        console.log("working");
       image.style.backgroundImage="url('pic1.jpg')";
    }
    else if(f==="chocolate"){
        console.log("working");
        image.style.backgroundImage="url('pic2.jpg')";
    }
    else if(f==="vanilla"){
         image.style.backgroundImage="url('pic3.jpg')";
    }
    else{
         image.style.backgroundImage="url('pic4.jpg')";
    }
}