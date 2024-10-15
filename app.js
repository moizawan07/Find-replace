function Finding(){
   
   var input = document.getElementById("input").value;
   var paragraphy = document.getElementById('para');
   var replace = document.getElementById("replace").value;
   var hightinput = document.getElementById("highlightINput").value;

 var reg =  new RegExp(hightinput, 'gi')

   if(hightinput != ""){
      paragraphy.innerHTML = paragraphy.textContent.replace(reg , "<mark> $& </mark>")
   }

   paragraphy = document.getElementById('para').innerText;
   
   for(var i = 0; i< paragraphy.length; i++){
      
      var result = paragraphy.slice(i , i + input.length);
      
      if(hightinput == "" && replace ==  "" && input == result){
         alert("found")
         break
      }
   }
   
   if(replace != ""){
      var final = paragraphy.replace(input , replace);
      document.getElementById("para").innerHTML = final
   } 
   
   
}
