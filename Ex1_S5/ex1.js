$(document).ready(function(){
	if(typeof(Storage) !=="undefined"){
		//if('fisrtname' in sessionStorage){
			var x = sessionStorage.getItem('first_name');
			alert("Message récupéré "+ x);
	
		//localStorage.setItem('nombre',)
	//}
	}
	else{
		alert("Désolé,maisleWebStoragen'estpassuppoté");
	}
});