   //   FUNCION PARA OBTENER LAS IMAGENES SEGUN EL DIA DE LA TIERRA

function getpic() {

 
  var rov=document.getElementById("provincia").value;
  var camara=document.getElementById("pueblo").value;
  var fecha=fecha_tierra.value;
  
  const Nasa_key = 'tAQB3KRFhTsUhvfNiwYl7X20SP0LwsH17EeNpgvp';
  var url=`https://api.nasa.gov/mars-photos/api/v1/rovers/${rov}/photos?earth_date=${fecha}&page=2&camera=${camara}&api_key=${Nasa_key}`;
  document.getElementById("contenedor").innerHTML="";

  
  
  fetch(url)
  .then(resp =>resp.json())
  .then(data =>{
          var array=data[Object.keys(data)[0]]
        
         
          for(i=0;i<array.length;i++){
            
              var divm=document.getElementById("contenedor");
              var divi=document.createElement("div");
               var hr=document.createElement("a");
              divi.style.cssText='width:280px;height:300px;margin:0%;';
              var divi1=document.createElement("div");
              divi1.style.cssText='width:260px;height:250px;margin:5px;';
              var im=document.createElement("img");
              var para1=document.createElement("p");
              var para2=document.createElement("p");
              var para3=document.createElement("p");
              para1.style.cssText='font-size:15px;color:white;';
              para2.style.cssText='font-size:15px;color:white;';
              para3.style.cssText='font-size:15px;color:white;';
              data1=array[i];
             
              var x=data1.img_src
              
              var eardate=data1.earth_date
              im.setAttribute("src",x);
              hr.setAttribute("href",x);

              im.style.cssText='background-size: cover;width:100%;height:100%;';
             
               hr.appendChild(im);
              divi1.appendChild(hr);
              
              divi.appendChild(divi1);
              divm.appendChild(divi);
          }
          
        
          
        
       } );

       

      }

    //   FUNCION PARA OBTENER LAS IMAGENES SEGUN EL DIA DEL SOL

      function getpicsol() {

 
        var rov=document.getElementById("provincia").value;
        var camara=document.getElementById("pueblo").value;
        var fecha=sol.value;
        
        const Nasa_key = 'tAQB3KRFhTsUhvfNiwYl7X20SP0LwsH17EeNpgvp';
        var url=`https://api.nasa.gov/mars-photos/api/v1/rovers/${rov}/photos?sol=${fecha}&page=1&camera=${camara}&api_key=${Nasa_key}`;
        document.getElementById("contenedor").innerHTML="";
      
        
        
        fetch(url)
        .then(resp =>resp.json())
        .then(data =>{
                var array=data[Object.keys(data)[0]]
              
               
                for(i=0;i<array.length;i++){
                  
                    var divm=document.getElementById("contenedor");
                    var divi=document.createElement("div");
                     var hr=document.createElement("a");
                    divi.style.cssText='width:280px;height:300px;margin:0%;';
                    var divi1=document.createElement("div");
                    divi1.style.cssText='width:260px;height:250px;margin:5px;';
                    var im=document.createElement("img");
                    var para1=document.createElement("p");
                    var para2=document.createElement("p");
                    var para3=document.createElement("p");
                    para1.style.cssText='font-size:15px;color:white;';
                    para2.style.cssText='font-size:15px;color:white;';
                    para3.style.cssText='font-size:15px;color:white;';
                    data1=array[i];
                   
                    var x=data1.img_src
                    
                    var eardate=data1.earth_date
                    im.setAttribute("src",x);
                    hr.setAttribute("href",x);
      
                    im.style.cssText='background-size: cover;width:100%;height:100%;';
                   
                     hr.appendChild(im);
                    divi1.appendChild(hr);
                    
                    divi.appendChild(divi1);
                    divm.appendChild(divi);
                }
                
              
                
              
             } );
      
             
      
            }

        