//Script for Life of a cube
var buttonSub = document.getElementById("submit");
document.getElementById("Cube").src="Life of a cube/question.jpg";
var years = 0;
var days = 0;


start.addEventListener("click", function(){
myAudio = new Audio('Life of a cube/frustra.mp3'); 
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

mute.addEventListener("click", function(){
	myAudio.muted = true;
})

 document.getElementById("start").disabled = true;
	refresh.addEventListener("click", function(){
		location.reload();
	})

	function reset (){
		years = 0;
		days = 0;
		nameN = "";

	}
	function death(){
		var deathMsg = document.getElementById("deathMessage");
		var totalYears = years + 2019;
		deathMsg.innerText = (nameN + " " + "2019 -" + totalYears );
		years = 0;
		days = 0;
		var audio = new Audio('audio_file.mp3');
		audio.play();

	}

	var lifeBegin = document.getElementById("lifeBegin");
	lifeBegin.innerText = ("Life has Begun!");
	var Maxyears = 122;
	var days = 0;
	var ageEl = document.getElementById("age");
	var personality = document.getElementById("personality");
	var deathReason = document.getElementById("deathReason");

	var naturalDeath = {
		underone: 177,
		four: 4386,
		fourteen: 8333,
		twentyfour: 1908,
		thirtyfour: 1215,
		fourtyfour: 663,
		fiftyfour: 279,
		sixtyfour: 112,
		seventyfour: 42,
		eightyfour: 15,
		overeightyfour: 6,
		ninetyfour:4,
		onehundredfour:2,
		onehundredfourteen:2
	};
	var nameAge = document.getElementById("nameAge");
	var nameN = document.getElementById("name").value;

	function yearsPass(){
		if(days / 365 == 1){
			days = 0;
			years++;
			console.log(years);
			console.log(days);
		};
	};

	
	function diseaseDeath(){
		var ranDay = Math.floor(Math.random() * 40880);
		var ranDay2 = Math.floor(Math.random() * 40880);
		var ranDay3 = Math.floor(Math.random() * 40880);
		if (days == ranDay){
			var heartChance = Math.floor(Math.random() * 2);
				if (heartChance == 1){
					death();
					deathReason.innerText = ("Cause of Death: Heart disease");

				} ;
		};
		if (days == ranDay2){
			var cancerChance = Math.floor(Math.random() * 7);
				if (cancerChance == 1){
					death();
					deathReason.innerText = ("Cause of Death: Cancer");
				};
		};
		if (days == ranDay3){
			var clrdChance = Math.floor(Math.random() * 27);
				if (clrdChance == 1){
					deathReason.innerText = ("Cause of Death: Chronic Lower Respiatory Disease");
					death();
				};
		};
	};

	function personalityCalc(){
		var ranPerson = Math.floor(Math.random() * 8);	
		var easterEgg = Math.floor(Math.random() * 1000);	
		if (ranPerson == 1){
			document.getElementById("Cube").src="Life of a cube/alive.jpg";
			personality.innerText = ("Personality: Normal");


		}else if(ranPerson == 2){
			document.getElementById("Cube").src="Life of a cube/jolly.jpg";
			personality.innerText = ("Personality: Jolly");
		}else if (ranPerson == 3){
			document.getElementById("Cube").src="Life of a cube/angry.jpg";
			personality.innerText = ("Personality: Angry")
		}else if (ranPerson == 4){
			document.getElementById("Cube").src="Life of a cube/dorky.jpg";
			personality.innerText = ("Personality: Dorky");
		}else if (ranPerson == 5){
			document.getElementById("Cube").src="Life of a cube/pretty.jpg";
			personality.innerText = ("Personality: Pretty");
		}
		if (ranPerson == 6 && easterEgg == 1 ){
			document.getElementById("Cube").src="Life of a cube/mario.jpg";
			personality.innerText = ("Personality: Plumber")
		}else if (ranPerson == 7 && easterEgg == 2){
			document.getElementById("Cube").src="Life of a cube/pennywise.jpg";
			personality.innerText = ("Personality: Penny Pincher");
		}else if (ranPerson == 6  || ranPerson == 7 && easterEgg !== 1 && easterEgg !== 2){
			document.getElementById("Cube").src="Life of a cube/alive.jpg";
			personality.innerText = ("Personality: Normal")
	}

	}
	
personalityCalc();

	
	if (years !== Maxyears){
		setInterval(function(){
				days++;
				yearsPass();
				diseaseDeath();
				ageCalc();
			}, 100)
				
		}else if (years == Maxyears){
				alert("Your cube has reached max age!");
		};
		
	

	function naturalDeathChance(){
		if(years <= 1){
			var chance = Math.floor(Math.random() * naturalDeath.underone);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Stillborn");
			};

		};
		if(5 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.four);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			} ;

		};
		if(15 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.fourteen);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			} ;
		};
		if(25 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.twentyfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");
			} ;

		};
		if(35 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.thirtyfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");
			}; 

		};
		if(45 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.fourtyfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");
			} ;

		};
		if(55 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.fiftyfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");
			}; 

		};
		if(years <= 65){
			var chance = Math.floor(Math.random() * naturalDeath.sixtyfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");
			}; 

		};
		if(75 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.seventyfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		};
		if(85 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.overeightyfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};

		};
		if(95 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.ninetyfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 
		if(105 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredfour);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 
		if(115 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredfourteene);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 


	};
	naturalDeathChance();

	function ageCalc(){
		if (years <= 0){
			ageEl.innerText = (nameN + " Is under a year old")
		}else{
			ageEl.innerText = ("Age: " + years);
		}
	}
	reset();

	});

	buttonSub.addEventListener("click", function(){
		var nameN = document.getElementById("name").value;
		if (years < 1){
			nameAge.innerText = ("Name: " + nameN);
		}else{
			nameAge.innerText = ("Name: " + nameN);
	}

	})

