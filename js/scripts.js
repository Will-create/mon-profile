function minimum (champ,nbr){
	if (champ.length<nbr) {
		alert("Le mot de passe doit contenir au minimum "+nbr+" carracteres!");
		return false;
	}
	return true;
}

function multiplier (){
	var text;
	var number=prompt("entrer un nombre");
   for (var i = 1; i < 11; i++) {
               var calc=number*i;
               // var text=number" * "+i+"="+calc+"<br/>";
               document.write(number, " * ", i, "=", calc, "<br/>");
          }
  }

  function somme (){
  	var sum=0;
  	var sustra=0;
    var nombre=prompt("entrez un nombre");
  	for (var i = 0; i <=nombre; i++) {
  		sum+=i;
  		// sustra-=i;
  	    document.write("la somme des ", i, " premiers nombres donne:====>", sum, "<br/>");
  	    // document.write("pour somme est egale a", nombre, "i est:=====>", sustra, "<br/>");
  	}
  	return sum, sustra;
  }

function boucle () {
	var nicks='', nick, proceed=true;
	while (proceed){
		nick=prompt("entrer un prenom:");
		if (nick) {
			nicks+=nick +' ';
		}
		else{
			proceed=false;
		}

	}
	alert(nicks);
}