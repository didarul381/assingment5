const cart = [];

function display(cardProduct){
    
    
    //ul==cards product
    const ul=document.getElementById("ul");
    ul.innerHTML='';
    
     for(let i=0;i<cardProduct.length; i++){
       
        //console.log(cart[i].pdName);
       
        
        const name=cart[i].pdName;
       
       
       

        const li=document.createElement("li");
        li.innerHTML= `
        
        <li> ${ i+1} ${ name}</li> 
        `;

        ul.appendChild(li);

        


        
    }
}

 

 function addToCart(element){

    element.disabled=true;
   // const pdName = element.parentNode.children[0].innerText;
     const pdName = element.parentNode.parentNode.children[1].children[0].innerText;
     const pd = {
         pdName: pdName,
       

     }
     cart.push(pd);
    
    
   document.getElementById("li").innerText=cart.length;
   
       
        
            display(cart);

        

       }
   
    
    
   
     

     
    
         
    
 
