(function(){

	var nblignes=8;
	var nbcolonnes=8;
	var jeu=document.getElementById("jeu");

	console.log(jeu);
	var liste_cases=[];


	for(var i=0;i<64;i++){
		var tile=document.createElement("div");
		tile.className="tile";
		jeu.appendChild(tile);
		liste_cases.push(tile);
	}

	console.log(liste_cases);

	function getRandomInt(min,max){
		min=Math.ceil(min);
		max=Math.floor(max);
		return Math.floor(Math.random()*(max-min)+min)
	}


	var random=getRandomInt(0,64);
	console.log(random);
	var case_hasard=liste_cases[random];
	var princesse=document.createElement("div");
	princesse.className="princesse";
	case_hasard.appendChild(princesse);


})();