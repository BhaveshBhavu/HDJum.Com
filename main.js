console.log('Hello World!');
  
 for (var o = 0; o < 20; o++) {
  
  var img = new Array('https://ytimg.googleusercontent.com/vi/kffacxfA7G4/mqdefault.jpg','https://ytimg.googleusercontent.com/vi/kffacxfA7G4/mqdefault.jpg','https://ytimg.googleusercontent.com/vi/kffacxfA7G4/mqdefault.jpg');
  
  var p = new Array('i hdove ishi', 'g ll uc ghulhn ICCy');
  
  for (var i = 0; i < 1; i++) {
  
 document.querySelector(".video_box").innerHTML += `
       <div>
         <bo style="background-image: url(https://ytimg.googleusercontent.com/vi/kffacxfA7G4/mqdefault.jpg); background-size: 100% 140px  ;
  background-repeat: no-repeat;" >
  <bt> <i class="fa-solid fa-play"></i> </bt> </bo>
         <p>bend dough been</p>
       </div>`;

  
  /*
  document.querySelector(".video_box").innerHTML += `
       <div>
         <bo style="background-image: url(${img[o]}); background-size: 100% 140px  ;
  background-repeat: no-repeat;" >
  <bt> <i class="fa-solid fa-play"></i> </bt> </bo>
         <p>${p[o]}</p>
       </div>`;
       */
  
  
  }

}
