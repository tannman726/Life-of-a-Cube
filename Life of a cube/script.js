//Script for Life of a cube
const buttonSub = document.getElementById("submit");
document.getElementById("Cube").src="question.jpg";
let years = 0;
let days = 0;
let intSet = 0;


start.addEventListener("click", function(){

	myAudio = new Audio('Married_Life.mp3'); 
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
		const deathMsg = document.getElementById("deathMessage");
		let totalYears = years + 2019;
		deathMsg.innerText = (nameN + " " + "2019 - " + totalYears );
		years = 0;
		days = 0;
		const audio = new Audio('audio_file.mp3');
		audio.play();
		setInterval(function(){
			location.reload();
		}, 30000)

	}

	const lifeBegin = document.getElementById("lifeBegin");
	lifeBegin.innerText = ("Life has Begun!");
	const Maxyears = 122;
	let days = 0;
	const ageEl = document.getElementById("age");
	const personality = document.getElementById("personality");
	const deathReason = document.getElementById("deathReason");

	let naturalDeath = {
		underone: 176,
		four: 4385,
		fourteen: 8332,
		twentyfour: 1907,
		thirtyfour: 1214,
		fourtyfour: 662,
		fiftyfour: 278,
		sixtyfour: 111,
		seventyfour: 41,
		eightyfour: 14,
		overeightyfour: 5,
		ninetyfour: 3,
		ninetyseven: 2,
		onehundredfour: 1,
		onehundredfourteen: 1,
		onehundredfifteen: 1,
		onehundredsixteen: 1,
		onehundredseventeen: 1,
		onehundredeighteen: 1,
		onehundredninteen: 1,	
		onehundredtwenty: 1,
		onehundredtwentyone: 1
	};
	const nameAge = document.getElementById("nameAge");
	let nameN = document.getElementById("name").value;

	function yearsPass(){
		if(365 <= days){
			days = 0;
			years++;
			
			
		};
	};

	function setIntfunc(){
		if(days == 182){
			intSet++;
		}
	};

	const ranYear = Math.floor(Math.random() * 122) + 1;
	const ranYear2 = Math.floor(Math.random() * 122) + 1;
	const ranYear3 = Math.floor(Math.random() * 122) + 1;

	function diseaseDeath(){
		if (years <= 1 && days <= 1){
			const stillBorn = Math.floor(Math.random() * 100) + 1;
			if(stillBorn == 1){
				death();
				deathReason.innerText = ("Cause of Death: Stillborn");
			}
		}
		if (years == ranYear && days == 180){
			const heartChance = Math.floor(Math.random() * 2) + 1;
			console.log("Chance: " + heartChance);

				if (heartChance == 1){
					death();
					deathReason.innerText = ("Cause of Death: Heart disease");

				} ;
		} 
		if (years == ranYear2 && days == 180){
			const cancerChance = Math.floor(Math.random() * 7) + 1;
				if (cancerChance == 1){
					death();
					deathReason.innerText = ("Cause of Death: Cancer");
				};
		};
		if (years == ranYear3 && days == 180){
			const clrdChance = Math.floor(Math.random() * 27) + 1;
				if (clrdChance == 1){
					deathReason.innerText = ("Cause of Death: Chronic Lower Respiatory Disease");
					death();
				};
		};
		
	};

	
	function personalityCalc(){
		const ranPerson = Math.floor(Math.random() * 8);	
		const easterEgg = Math.floor(Math.random() * 1000);	
		if (ranPerson == 1){
			document.getElementById("Cube").src="alive.jpg";
			personality.innerText = ("Personality: Normal");


		}else if(ranPerson == 2){
			document.getElementById("Cube").src="jolly.jpg";
			personality.innerText = ("Personality: Jolly");
		}else if (ranPerson == 3){
			document.getElementById("Cube").src="angry.jpg";
			personality.innerText = ("Personality: Angry")
		}else if (ranPerson == 4){
			document.getElementById("Cube").src="dorky.jpg";
			personality.innerText = ("Personality: Dorky");
		}else if (ranPerson == 5){
			document.getElementById("Cube").src="pretty.jpg";
			personality.innerText = ("Personality: Pretty");
		}else if (ranPerson == 6 && easterEgg == 1 ){
			document.getElementById("Cube").src="mario.jpg";
			personality.innerText = ("Personality: Plumber")
		}else if (ranPerson == 7 && easterEgg == 2){
			document.getElementById("Cube").src="pennywise.jpg";
			personality.innerText = ("Personality: Penny Pincher");
		}else if (ranPerson == 6  || ranPerson == 7 && easterEgg !== 1 && easterEgg !== 2){
			document.getElementById("Cube").src="alive.jpg";
			personality.innerText = ("Personality: Normal")
		}else{
			document.getElementById("Cube").src="alive.jpg";
			personality.innerText = ("Personality: Normal");		
		} 

	}
	
	personalityCalc();

	setInterval(function setDays(){
		yearsPass();
		ageCalc();
		setIntfunc();
		diseaseDeath();
	}, 500);
	
	if (years !== Maxyears){
		setInterval(function(){
				days++;

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
		if(65 <= years){
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
		if(97 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredfour);
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
			var chance = Math.floor(Math.random() * naturalDeath.onehundredfourteen);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 
		if(116 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredfifteen);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 
		if(117 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredsixteen);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 
		if(118 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredseventeen);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 
		if(119 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredeighteen);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 
		if(120 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredninteen);
			if (chance == 1){
				death();
				deathReason.innerText = ("Cause of Death: Natural Causes");

			};
		}; 
		if(121 <= years){
			var chance = Math.floor(Math.random() * naturalDeath.onehundredtwenty);
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





