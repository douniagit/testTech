//exercice palindrome
//l'idée est de retourner le mot que celui soit soit identique dans les deux sens

function palindrome(){
 //on a une variable avec une string
  var string="ete";
  
  //pour que la string puisse etre retournée il faut d'abord la separer par un split
  //puis lui demander se retourner les lettres
  //enfin les joindre les lettres pour en faire un nouveau string

  return string.split("").reverse("").join("");
}

palindrome();

//resultat= "ete" car ete est un palindrome