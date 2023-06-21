const moviesPreview = document.querySelectorAll("li");
const previewBox = document.querySelectorAll(".preview");
console.log(moviesPreview,previewBox);


for (let i = 0; i < moviesPreview.length; i++) {
    
    // function myFunction(x) {
    //     if (x.matches) { 
    //       previewBox[i].style.display = "none";
    //     } 
        
    //   }
    // var x = window.matchMedia("(max-width: 400px)")
    // myFunction(x) 
    // x.addEventListener(myFunction); 

    // moviesPreview[i].addEventListener("mouseover",()=>{
    //     if(window.matchMedia("max-width:400px").matches){
    //         previewBox[i].style.display = "grid"; 
    //     }
        
    // });
    moviesPreview[i].addEventListener("mouseover",()=>{
        function myFunction(x) {
            if (x.matches) { // If media query matches
                previewBox[i].style.display = "grid"; ;
            } else {
                previewBox[i].style.display = "none";
            }
          }
          
        var x = window.matchMedia("(min-width: 450px)")
        myFunction(x); 
    })
    // x.addListener(myFunction);

    moviesPreview[i].addEventListener("mouseout",()=>{
        previewBox[i].style.display = "none";
    });
}

  
  
