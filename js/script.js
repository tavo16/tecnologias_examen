
var total = 0;
var i = 0;
var valor = 0;

for(i=1; i<=99; i++)
{
	var prod = localStorage.getItem("producto" + i + ""); 
	if(prod != null) 
{	
		document.getElementById("itens").innerHTML += localStorage.getItem( "Cantidad" + i) + " Unid | ";
		document.getElementById("itens").innerHTML += localStorage.getItem("producto" + i);
		document.getElementById("itens").innerHTML += " ";
		document.getElementById("itens").innerHTML += "USD$: " + localStorage.getItem("valor" + i) + "<hr>";
		valor = parseFloat(localStorage.getItem("valor" + i));
		total = (total + valor);
	}
} 
document.getElementById("total").innerHTML = total.toFixed(2); 
