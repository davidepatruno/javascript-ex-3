var lista_cognomi = ["Del piero", "Buffon", "Ronaldo", "Chiellini", "Pijanic", "Nedved"];
var array_temporaneo = [];
array_temporaneo.push(prompt ("inserisci il tuo cognome (Con iniziale maiuscola):"));

lista_cognomi.push(array_temporaneo);

// ciclo di controllo inserimento
for (var i = 0; i < lista_cognomi.length; i++) {
  console.log(lista_cognomi[i]);
}
// stampa in ordine alfabetico
lista_cognomi.sort();
document.getElementById('lista').innerHTML = lista_cognomi;
// ciclo controllo posizione dovremmo controllare a quale posizione occupa (dopo il sort) il cognome inserito nella lista_cognomi (dopo che è stata pushata da array temporaneo)
var trovato = false;
var posizione = 1;
var contatore = 0;
while (!trovato) {
  if (array_temporaneo[0] == lista_cognomi[contatore]){
    trovato = true;
    document.getElementById('posizione').innerHTML = posizione;
  }
  else {
    posizione++;
    contatore++;
  }
}
