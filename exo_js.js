function CalculerMontantTTC() 

{if (isNaN(Form1.ht.value)==true) 
	{alert("calcul impossible");
	Form1.ht.value='0';
}
else{
	Form1.tva.value=(Form1.ht.value/100)*Form2.tauxtva.value;
	Form1.ttc.value=Number(Form1.ht.value)*Number(Form1.tva.value);
}
}	


var tous_les_boutons=document.querySelectorAll('input[class ="button"]');
console.log(tous_les_boutons)
addEventListener('click',clique);

function clique() {
	for(var index=0; index<tous_les_boutons.length; index++)
	{
		tous_les_boutons[index].addEventListener('click', function(){
			console.log(Form2.tauxtva)
		Form2.tauxtva.value=this.value
		})

	}
} 
	
