var docs = document.getElementById('luh');
 var modal1 =  document.getElementById('secModal');

 var icon = document.getElementsByClassName('myIcons');
 var clos = document.getElementById('secClose');
 var capt = document.getElementById('capt');

//  for(i = 0; i < icon.length; i++){
//      icon[i].onclick = function (){
//          capt.alt = this.alt;
//         //  alert(this.alt);
//          capt.innerHTML = this.alt;

//          if(this.alt == "+639100705763"){
//             //  docs.className = 'blur';
//              modal1.style.display = "block";
//              modal1.style.width = "15%";
//              modal1.style.left = "43%";
//              modal1.style.top = "35%";

//         }else{
//             modal1.style.display = "block";
//             modal1.style.width = "28%";
//             modal1.style.left = "35.6%";
//         }
        
//      }
//  }

var contact = document.getElementById('conta');
var locatio = document.getElementById('loc');
var gma = document.getElementById('gmail');
var conCount = 0;
var locCount = 0;
var gmCount = 0;
// var pos = "-10";

var winSize;


// var id = setInterval(frame, 1);
// var backToTop = setInterval(btt, 1000);

// var locID = setInterval(locationDelay, 1000);

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//         // alert("match");
//         winSize = 1;
//     } else {
//         // alert("no match");
//         winSize = 0;
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 414px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes
 

// function res(){
//   if(window.innerWidth < 414){
//     alert("true");
//     alert(window.innerWidth);
//     // winSize = 1;
//   }else{
//     alert("false");
//     alert(window.innerWidth);
//     // winSize = 0;
//   }
// }
// if(winSize == 1){
//   function cont(){
//     alert("match");
//   }
// }else if(winSize == 0){
//   function cont(){
//     alert("no match");
//   }
// }


                // alert("Less Than 1024");

                if((window.innerWidth >= 320) & (window.innerWidth <= 812)){

                  function cont(){
            

                    if(locCount == 1 || gmCount == 1){

            
                    closeCont();
                    function locationDelay(){
                        capt.alt = contact.alt;
                        capt.innerHTML = contact.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "55%";
                        modal1.style.left = "30%";
                        modal1.style.top = "50%";
                        locCount = 0;
                        gmCount = 0;
                        conCount = 1;
                    }
                    setTimeout(locationDelay, 400);
            
                    }else{
                    capt.alt = contact.alt;
                    capt.innerHTML = contact.alt;
                    modal1.style.display = "block";
                    modal1.style.width = "55%";
                    modal1.style.left = "30%";
                    modal1.style.top = "50%";
                    conCount = 1;
                }
            }
                       
            
            function loca(){
                    
            
                    if(conCount == 1 || gmCount == 1){
            
                    closeCont();
                    function locationDelay(){
                        capt.alt = locatio.alt;
                        capt.innerHTML = locatio.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "60%";
                        modal1.style.fontSize = ".7em";
                        modal1.style.left = "25%";
                        modal1.style.top = "70%";
                        conCount = 0;
                        gmCount = 0;
                        locCount = 1;
                    }
                    setTimeout(locationDelay, 400);
            
                    }else{
                    capt.alt = locatio.alt;
                    capt.innerHTML = locatio.alt;
                    modal1.style.display = "block";
                    modal1.style.width = "60%";
                    modal1.style.fontSize = ".7em";
                    modal1.style.left = "25%";
                    modal1.style.top = "70%";
                    locCount = 1;
                }
            }
            
            
            function mailg(){
                    
            
                    if(conCount == 1 || locCount == 1){
            
                    closeCont();
                    function locationDelay(){
                        capt.alt = gma.alt;
                        capt.innerHTML = gma.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "60%";
                        modal1.style.fontSize = ".7em";
                        modal1.style.left = "25%";
                        modal1.style.top = "70%";
                        conCount = 0;
                        locCount = 0;
                        gmCount = 1;
                    }
                    setTimeout(locationDelay, 400);
            
                    }else{
                    capt.alt = gma.alt;
                    capt.innerHTML = gma.alt;
                    modal1.style.display = "block";
                    modal1.style.width = "60%";
                    modal1.style.fontSize = ".7em";
                    modal1.style.left = "25%";
                    modal1.style.top = "70%";
                    gmCount = 1;
                }
            }
            
            
            
            
            function closeCont() {
            
                var closeid = setInterval(frame1, 1);
                var pose = "35";
                        function frame1(){ 
                                pose--;
                                modal1.style.top = pose + "%";
            
                                if(pose == -10){
                                    
                                clearInterval(closeid);
                                capt.alt = contact.alt;
                                capt.innerHTML = contact.alt;
                                modal1.style.width = "15%";
                                modal1.style.left = "43%";
                                modal1.style.display = "none";
                                // clos.style.paddingLeft = "2%";
                            }
                    }
                }

                }

                if(window.innerWidth <= 414){
                    // alert("414");

                    function cont(){
            

                        if(locCount == 1 || gmCount == 1){
    
                
                        closeCont();
                        function locationDelay(){
                            capt.alt = contact.alt;
                            capt.innerHTML = contact.alt;
                            modal1.style.display = "block";
                            modal1.style.width = "55%";
                            modal1.style.left = "30%";
                            modal1.style.top = "50%";
                            locCount = 0;
                            gmCount = 0;
                            conCount = 1;
                        }
                        setTimeout(locationDelay, 400);
                
                        }else{
                        capt.alt = contact.alt;
                        capt.innerHTML = contact.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "55%";
                        modal1.style.left = "30%";
                        modal1.style.top = "50%";
                        conCount = 1;
                    }
                }
                           
                
                function loca(){
                        
                
                        if(conCount == 1 || gmCount == 1){
                
                        closeCont();
                        function locationDelay(){
                            capt.alt = locatio.alt;
                            capt.innerHTML = locatio.alt;
                            modal1.style.display = "block";
                            modal1.style.width = "60%";
                            modal1.style.fontSize = ".7em";
                            modal1.style.left = "25%";
                            modal1.style.top = "50%";
                            conCount = 0;
                            gmCount = 0;
                            locCount = 1;
                        }
                        setTimeout(locationDelay, 400);
                
                        }else{
                        capt.alt = locatio.alt;
                        capt.innerHTML = locatio.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "60%";
                        modal1.style.fontSize = ".7em";
                        modal1.style.left = "25%";
                        modal1.style.top = "50%";
                        locCount = 1;
                    }
                }
                
                
                function mailg(){
                        
                
                        if(conCount == 1 || locCount == 1){
                
                        closeCont();
                        function locationDelay(){
                            capt.alt = gma.alt;
                            capt.innerHTML = gma.alt;
                            modal1.style.display = "block";
                            modal1.style.width = "63%";
                            modal1.style.fontSize = ".7em";
                            modal1.style.left = "25%";
                            modal1.style.top = "50%";
                            conCount = 0;
                            locCount = 0;
                            gmCount = 1;
                        }
                        setTimeout(locationDelay, 400);
                
                        }else{
                        capt.alt = gma.alt;
                        capt.innerHTML = gma.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "63%";
                        modal1.style.fontSize = ".7em";
                        modal1.style.left = "25%";
                        modal1.style.top = "50%";
                        gmCount = 1;
                    }
                }
                
                
                
                
                function closeCont() {
                
                    var closeid = setInterval(frame1, 1);
                    var pose = "35";
                            function frame1(){ 
                                    pose--;
                                    modal1.style.top = pose + "%";
                
                                    if(pose == -10){
                                        
                                    clearInterval(closeid);
                                    capt.alt = contact.alt;
                                    capt.innerHTML = contact.alt;
                                    modal1.style.width = "15%";
                                    modal1.style.left = "43%";
                                    modal1.style.display = "none";
                                    // clos.style.paddingLeft = "2%";
                                }
                        }
                    }

                }else{

                function cont(){
            

                    if(locCount == 1 || gmCount == 1){

            
                    closeCont();
                    function locationDelay(){
                        capt.alt = contact.alt;
                        capt.innerHTML = contact.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "50%";
                        modal1.style.left = "25%";
                        modal1.style.top = "50%";
                        locCount = 0;
                        gmCount = 0;
                        conCount = 1;
                    }
                    setTimeout(locationDelay, 400);
            
                    }else{
                    capt.alt = contact.alt;
                    capt.innerHTML = contact.alt;
                    modal1.style.display = "block";
                    modal1.style.width = "50%";
                    modal1.style.left = "25%";
                    modal1.style.top = "50%";
                    conCount = 1;
                }
            }
                       
            
            function loca(){
                    
            
                    if(conCount == 1 || gmCount == 1){
            
                    closeCont();
                    function locationDelay(){
                        capt.alt = locatio.alt;
                        capt.innerHTML = locatio.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "60%";
                        modal1.style.left = "20%";
                        modal1.style.top = "50%";
                        conCount = 0;
                        gmCount = 0;
                        locCount = 1;
                    }
                    setTimeout(locationDelay, 400);
            
                    }else{
                    capt.alt = locatio.alt;
                    capt.innerHTML = locatio.alt;
                    modal1.style.display = "block";
                    modal1.style.width = "60%";
                    modal1.style.left = "20%";
                    modal1.style.top = "50%";
                    locCount = 1;
                }
            }
            
            
            function mailg(){
                    
            
                    if(conCount == 1 || locCount == 1){
            
                    closeCont();
                    function locationDelay(){
                        capt.alt = gma.alt;
                        capt.innerHTML = gma.alt;
                        modal1.style.display = "block";
                        modal1.style.width = "65%";
                        modal1.style.left = "17.5%";
                        modal1.style.top = "50%";
                        conCount = 0;
                        locCount = 0;
                        gmCount = 1;
                    }
                    setTimeout(locationDelay, 400);
            
                    }else{
                    capt.alt = gma.alt;
                    capt.innerHTML = gma.alt;
                    modal1.style.display = "block";
                    modal1.style.width = "65%";
                    modal1.style.left = "17.5%";
                    modal1.style.top = "50%";
                    gmCount = 1;
                }
            }
            
            
            
            
            function closeCont() {
            
                var closeid = setInterval(frame1, 1);
                var pose = "35";
                        function frame1(){ 
                                pose--;
                                modal1.style.top = pose + "%";
            
                                if(pose == -10){
                                    
                                clearInterval(closeid);
                                capt.alt = contact.alt;
                                capt.innerHTML = contact.alt;
                                modal1.style.width = "15%";
                                modal1.style.left = "43%";
                                modal1.style.display = "none";
                            }
                    }
                }

            }

            // function res(){
            //     if(window.innerWidth > 1024){

            //         // alert("Resize and greater than 1024");
            //         if(locCount == 1 | gmCount == 1){
            //             modal1.style.width = "15%";
            //         }else{
            //             modal1.style.width = "15%";
            //         }
            //         if(conCount == 1 | gmCount == 1){
            //             modal1.style.width = "28%";
            //         }else{
            //             modal1.style.width = "28%";
            //         }
            //         if(conCount == 1 | locCount == 1){
            //             modal1.style.width = "28%";
            //         }else{
            //             modal1.style.width = "28%";
            //         }
            //     }else{

            //         // alert("Resize and less than 1024");
            //         if(locCount == 1 | gmCount == 1){
            //             modal1.style.width = "25%";
            //         }else{
            //             modal1.style.width = "25%";
            //         }
            //         if(conCount == 1 | gmCount == 1){
            //             modal1.style.width = "50%";
            //         }else{
            //             modal1.style.width = "50%";
            //         }
            //         if(conCount == 1 | locCount == 1){
            //             modal1.style.width = "40%";
            //         }else{
            //             modal1.style.width = "40%";
            //         }
            //     }
            // }

