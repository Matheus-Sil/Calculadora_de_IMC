let peso =  document.getElementById('peso')
let altura = document.getElementById('altura')
let resultado = document.getElementById('texto-resultado')
let btnCalculo = document.getElementById('calculo')


function calculoIMC(){
   
   let IMC = peso.value / (altura.value * altura.value)

   if(IMC < 18.5){
      alert("Você está magro")
   }else if(IMC <= 24.9){
      alert("Você está normal")
   }else if(IMC <= 29.9){
      alert("Você está com sobrepeso")

   }else if(IMC <=40){
      alert("Você está obeso")

   }else if(IMC > 40){
      alert("Você está com obesidade grave")
   }else{
      alert("Não encontramos dados, por favor verifique se preencheu corretamente os campos")
   } 

}


btnCalculo.addEventListener('click', calculoIMC)