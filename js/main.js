var cv, ctx;
var worldList = [];
function main(){
	var menu = document.getElementById("menu");
	document.body.removeChild(menu);
	cv = document.createElement('canvas');
	score = document.createElement('div');
	score.id = "score";
	score.className = "score";
	document.body.appendChild(score);
	document.body.appendChild(cv);
	cv.width = 800;
	cv.height = 600;
	ctx = cv.getContext("2d");

	cam = new Camera(); cam.init(3200, -1200, 2900);
	
	var scene = createElement([1, 1], [0, 0], 'img/cenario_01.png', "scene", [0, -515]);
	scene.setCollision(false);
	worldList.push(scene);

	var scene1 = createElement([1, 1], [0, 0], 'img/cenario_01.png', "scene", [1600, -515]);
	scene1.setCollision(false);
	worldList.push(scene1);

	var fFloor = createElement([1, 1], [0, 0], 'img/platform.png', "floor", [150, 360]);
	worldList.push(fFloor);
	var spikes = createElement([1, 1], [0, 0], 'img/spike.png', "spike", [150, 370]);
	worldList.push(spikes);

	var fFloor1 = createElement([1, 1], [0, 0], 'img/platform.png', "floor", [50, 280]);
	worldList.push(fFloor1);

	var fFloor2 = createElement([1, 1], [0, 0], 'img/greatP.png', "floor", [320, 360]);
	worldList.push(fFloor2);
	var spikes2 = createElement([1, 1], [0, 0], 'img/greatSpikes.png', "spike", [320, 370]);
	worldList.push(spikes2);

	var fFloor3 = createElement([1, 1], [0, 0], 'img/greatP.png', "floor", [1040, 360]);
	worldList.push(fFloor3);
	var spikes3 = createElement([1, 1], [0, 0], 'img/greatSpikes.png', "spike", [1040, 370]);
	worldList.push(spikes3);

	var fFloor4 = createElement([1, 1], [0, 0], 'img/greatP.png', "floor", [320, 280]);
	worldList.push(fFloor4);

	var fFloor5 = createElement([1, 1], [0, 0], 'img/greatP.png', "floor", [1040, 280]);
	worldList.push(fFloor5);

	var fFloor6 = createElement([1, 1], [0, 0], 'img/platform.png', "floor", [1144, 180]);
	worldList.push(fFloor6);

	var fFloor7 = createElement([1, 1], [0, 0], 'img/platform.png', "floor", [1060, 80]);
	worldList.push(fFloor7);

	var fFloor8 = createElement([1, 1], [0, 0], 'img/platform.png', "floor", [975, -20]);
	worldList.push(fFloor8);
	var spikes8 = createElement([1, 1], [0, 0], 'img/spike.png', "spike", [975, -10]);
	worldList.push(spikes8);

	var fFloor9 = createElement([1, 1], [0, 0], 'img/platform.png', "floor", [894, -20]);
	worldList.push(fFloor9);
	var spikes9 = createElement([1, 1], [0, 0], 'img/spike.png', "spike", [894, -10]);
	worldList.push(spikes9);

	var floor = createElement([1, 1], [0, 0], 'img/floor.png', "floor", [0, 480]);
	worldList.push(floor);

	var floor1 = createElement([1, 1], [0, 0], 'img/floor.png', "floor", [1601, 480]);
	worldList.push(floor1);

	var poison = createElement([1, 1], [0, 0], 'img/poison.png', "poison", [300, 290]);
	poison.transparent = true;
	worldList.push(poison);

	var gPoison = createElement([1, 1], [0, 0], 'img/gPoison.png', "gPoison", [1700, 50]);
	gPoison.transparent = true;
	worldList.push(gPoison);

	var candy = createElement([1, 1], [0, 0], 'img/bombom.png', "candy", [50, 380]);
	candy.transparent = true;
	worldList.push(candy);

	var candy1 = createElement([1, 1], [0, 0], 'img/pauzin.png', "candy", [175, 320]);
	candy1.transparent = true;
	worldList.push(candy1);

	var candy2 = createElement([1, 1], [0, 0], 'img/pirulito.png', "candy", [175, 450]);
	candy2.transparent = true;
	worldList.push(candy2);

	var candy3 = createElement([1, 1], [0, 0], 'img/bombom.png', "candy", [75, 230]);
	candy3.transparent = true;
	worldList.push(candy3);

	var candy4 = createElement([1, 1], [0, 0], 'img/bombom.png', "candy", [550, 250]);
	candy4.transparent = true;
	worldList.push(candy4);

	var candy5 = createElement([1, 1], [0, 0], 'img/pauzin.png', "candy", [617, 450]);
	candy5.transparent = true;
	worldList.push(candy5);

	var candy6 = createElement([1, 1], [0, 0], 'img/pauzin.png', "candy", [1169, 140]);
	candy6.transparent = true;
	worldList.push(candy6);

	var candy7 = createElement([1, 1], [0, 0], 'img/pirulito.png', "candy", [1000, -60]);
	candy7.transparent = true;
	worldList.push(candy7);

	var candy8 = createElement([1, 1], [0, 0], 'img/bombom.png', "candy", [1304, 320]);
	candy8.transparent = true;
	worldList.push(candy8);

	var candy9 = createElement([1, 1], [0, 0], 'img/pauzin.png', "candy", [1544, 170]);
	candy9.transparent = true;
	worldList.push(candy9);

	var candy10 = createElement([1, 1], [0, 0], 'img/pirulito.png', "candy", [696, 320]);
	candy10.transparent = true;
	worldList.push(candy10);

	var candy11 = createElement([1, 1], [0, 0], 'img/pirulito.png', "candy", [2776, 450]);
	candy11.transparent = true;
	worldList.push(candy11);

	var mask = createElement([1, 1], [0, 0], 'img/mask.png', "mask", [919, -60]);
	mask.transparent = true;
	worldList.push(mask);

	var hell = createElement([1, 1], [0, 0], 'img/hell.jpg', "hell", [0, 2401]);
	hell.setCollision(false);
	worldList.push(hell);

	var ant = createElement([7, 3], [0, 0], 'img/sprite.png', "Ant", [0, 420]);
	ant.setGravity(true);
	worldList.push(ant);

	var friend = createElement([1, 1], [0, 0], 'img/friend.png', "friend", [3000, 420]);
	worldList.push(friend);

	var friend1 = createElement([1, 1], [0, 0], 'img/friend.png', "friend", [3020, 420]);
	worldList.push(friend1);

	credit = createElement([1, 1], [0, 0], 'img/credits.png', "credits", [3380, 0]);
	credit.setCollision(false);
	worldList.push(credit);

	window.onkeydown = function(event) 
	{ 
		switch(event.keyCode)
		{
			case 68: if(ant.canMove){ ant.setMovingX(8); } break;
			case 65: if(ant.canMove){ ant.setMovingX(-8); } break;
			case 87: if( ant.movingY == 0 && ant.canMove ){ ant.setMovingY(140); } break;
			case 32: alert(ant.position); break;
		}
	};
	
	window.onkeyup = function(event)
	{
		switch(event.keyCode)
		{
			case 65: ant.setMovingX(0); break;
			case 68: ant.setMovingX(0); break;
		}
	};
	window.setInterval(function(){ processa() } , 100);
}
function processa(){
    ctx.fillStyle="#000000";
	ctx.fillRect(0,0,cv.width,cv.height); 
	for( var i = 0; i < worldList.length; i++ ){
		worldList[i].update();
		if (worldList[i].name == "Ant"){
			var html = "<b>Score: "+worldList[i].score+"/12";
			if(worldList[i].timer < 10){
				if(worldList[i].timer <= 0){
					worldList[i].die();
					worldList[i].timer = 10;
					worldList[i].seek = false;
				}
				html += " Fast: "+worldList[i].timer.toFixed(2)+"</b>";
			} else{
				html += "</b>";
			}
			if(worldList[i].masked){
				html += "<img src='img/mask.png'/>";
			}
			document.getElementById("score").innerHTML = html;
		}
		if (worldList[i].name == "Ant" && worldList[i].position[1] > 2880 ){
			worldList[i].positioning([0, 380]);
			worldList[i].spriteSrc = "img/sprite.png";
			worldList[i].partitions = [7, 3];
			worldList[i].state = [0, 0];
			worldList[i].cam.positionX = 0;
			worldList[i].cam.positionY = 0;
			worldList[i].dead = false; worldList[i].transparent = false;
			restartGame();
		}
		if (worldList[i].name == "Ant" && (worldList[i].position[1] >= 2400 && worldList[i].position[1] <= 2420) ){
			if(!worldList[i].dead){ die(); }
			var deathSound = new SoundTrack(); deathSound.init('sound/scream.mp3');
			deathSound.playSound(false);
		}
		if (worldList[i].name == "hell"){
			worldList[i].position = [worldList[i].cam.positionX, 2401];
		}
		if (worldList[i].name == "Ant" && !worldList[i].canMove ){
			credits();
		}
	}
}

function credits(){
	ctx.fillStyle="#000000";
	ctx.fillRect(0,0,cv.width,cv.height);
	cam.positionX = 3200; cam.positionY = 0;
}

function restartGame(){
	for( var i = 0; i < worldList.length; i++ ){
		worldList[i].positioning( worldList[i].initialPosition );
		worldList[i].score = 0;
		if(worldList[i].name == "candy"){
			worldList[i].setCollision(true);
		}
	}
}

function createElement( part, initialState, path, name, pos ){
	var element = new SceneObject(); 
	element.init(part, initialState, ctx, cv, path, worldList, cam, name);
	if( element.positioning(pos) ){
		element.initialPosition = pos;
	} else{
		element.initialPosition = [0,0];
	}
	return element;
}