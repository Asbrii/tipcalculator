function add()
         {
           let num1 = parseInt(document.
            getElementById("firstNumber").value);
           let sum = num1 ;
           document.getElementById("output").value = sum;
         }

         function five()
         {
           let num1 = parseInt(document.
            getElementById("firstNumber").value);
           let sum = num1/100*5 ;
           document.getElementById("output")
           .value = sum;
         }
         
         function ten()
         {
           let num1 = parseInt(document.
            getElementById("firstNumber").value);
           let sum = num1/100*10 ;
           document.getElementById("output")
           .value = sum;
         }
         
         function tenfive()
         {
           let num1 = parseInt(document.
            getElementById("firstNumber").value);
           let sum = num1/100*15 ;
           document.getElementById("output") .value = sum;
         }
         
         function twoten()
         {
           let num1 = parseInt(document.
            getElementById("firstNumber").value);
           let sum = num1/100*20 ;
           document.getElementById("output")
           .value = sum;
         }
         
         function twotenfive()
         {
           let num1 = parseInt(document.
            getElementById("firstNumber").value);
           let sum = num1/100*25 ;
           document.getElementById("output")
           .value = sum;
         }
         
         function costum()
         {
           let num1 = parseInt(document.
            getElementById("firstNumber").value);
            let costum = parseFloat(prompt("enter"));
           let sum = num1/100*costum ;
           document.getElementById("output").value = sum;
         }

         function finder()
         {
          let num1 = parseInt(document. getElementById("firstNumber").value);
          let mem = parseInt(document.getElementById("member").value);
          let fff= num1/mem;
          document.getElementById("output2").value=fff;
         }