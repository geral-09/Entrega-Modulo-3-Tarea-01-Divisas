

function convertir(){
    let Cantidad= document.getElementById("Cantidad").value;
    console.log(Cantidad);

    var MonedaOrigen = document.getElementById("MonedaOrigen").value;
    var MonedaDestino = document.getElementById("MonedaDestino").value;
    resultado = 0;
    resultadoF = 0;
    
    var MonedasEnPC =  [194.48, 0.00025, 4553.10, 5457.45];
    var MonedasEnPM =  [0.0051, 20.39 , 23.16 , 27.72 ];
    var MonedasEnD =   [4028.67 , 0.049 , 1.14 , 1,36 ];
    var MonedasEnE =   [0.00018, 0.036 , 0,74 , 0,84  ];
    var MonedasEnL =   [5506.71, 27,72, 1.36  ,1.20  ];

    function operacion (item) {
        consol
    }

    /**Peso Colombiano */
    if(MonedaOrigen == 0 && MonedaDestino == 0){
        resultado=Cantidad;
        alert(resultado);
        
    }

    if(MonedaOrigen == 0 && MonedaDestino == 1){
        resultado=Cantidad * MonedasEnPC[0];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 0 && MonedaDestino == 2){
        resultado=Cantidad * MonedasEnPC[1];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 0 && MonedaDestino == 3){
        resultado=Cantidad * MonedasEnPC[2];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }



    /**Peso Mexicano */


    if(MonedaOrigen == 1 && MonedaDestino == 0){
        resultado=Cantidad * MonedasEnPM[0];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 1 && MonedaDestino == 1){
        resultado=Cantidad;
        alert(resultado);
        
    }

    if(MonedaOrigen == 1 && MonedaDestino == 2){
        resultado=Cantidad * MonedasEnPM[1];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 1 && MonedaDestino == 3){
        resultado=Cantidad * MonedasEnPM[2];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    /**Dolar */


    if(MonedaOrigen == 2 && MonedaDestino == 0){
        resultado=Cantidad * MonedasEnD[0];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 2 && MonedaDestino == 1){
        resultado=Cantidad * MonedasEnD[1];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 2 && MonedaDestino == 2){
        resultado=Cantidad;
       
        alert(resultado);
        
    }

    if(MonedaOrigen == 2 && MonedaDestino == 3){
        resultado=Cantidad * MonedasEnD[2];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 2 && MonedaDestino == 4){
        resultado=Cantidad * MonedasEnD[3];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }



    /**Euro */

    
    if(MonedaOrigen == 3 && MonedaDestino == 0){
        resultado=Cantidad * MonedasEnE[0];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 3 && MonedaDestino == 1){
        resultado=Cantidad * MonedasEnE[1];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 3 && MonedaDestino == 2){
        resultado=Cantidad * MonedasEnE[2];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 3 && MonedaDestino == 3){
        resultado=Cantidad;
        
        alert(resultado);
        
    }


    if(MonedaOrigen == 3 && MonedaDestino == 3){
        resultado=Cantidad * MonedasEnE[3];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    

    /**Libra E */


    if(MonedaOrigen == 4 && MonedaDestino == 0){
        resultado=Cantidad/MonedasEnL[0];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 4 && MonedaDestino == 1){
        resultado=Cantidad/MonedasEnL[1];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 4 && MonedaDestino == 2){
        resultado=Cantidad * MonedasEnL[1];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 4 && MonedaDestino == 3){
        resultado=Cantidad * MonedasEnL[2];
        resultadoF = resultado.toFixed(2);
        alert(resultadoF);
        
    }

    if(MonedaOrigen == 4 && MonedaDestino == 4){
        resultado=Cantidad;
       
        alert(resultado);
        
    }
 
        

    if (Cantidad = isNaN  ){
        var numero = false
    }

    if (numero = false){
        const Mensaje = [
            "Solo se acepntan numeros"
             ]
            $ul3 = document.createElement("ul");
            $fragment = document.createDocumentFragment();
            
            Mensaje.forEach(el=> {const $li =document.createElement("li");
            $li.textContent = el;
            $fragment.appendChild($li);
            });
    
            
            document.write("<h3>Recomendacion</h3>");
            $ul3.appendChild($fragment);
             document.body.appendChild($ul3);
        
    }


    if (MonedaDestino = isNaN && MonedaOrigen == isNaN ) {

        const Mensaje = [
            "Debes completar el campo de moneda de destino",
            "Debes completar el campo de moneda de origen"
            
             ]
            $ul3 = document.createElement("ul");
            $fragment = document.createDocumentFragment();
            
            Mensaje.forEach(el=> {const $li =document.createElement("li");
            $li.textContent = el;
            $fragment.appendChild($li);
            });
    
            
            document.write("<h3>SOLO NUMEROS</h3>");
            $ul3.appendChild($fragment);
             document.body.appendChild($ul3);
             
        
           

    }
    
  



}






