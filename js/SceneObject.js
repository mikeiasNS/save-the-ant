var jumperCount = 0; 
function SceneObject(){
	this.score = 0;
	this.seek = false;
	this.timer = 10;
	this.poisonVerify = 0;
	this.dead=false;
	this.name = "";
	this.initialPosition;
	// positon = posição do objeto no mundo
	this.position = [0, 0];
	// partitions = quantidade de partes em que a imagem(sprite) é dividido 
	var partitions = [];
	//contexto do canvas e canvas
	var ctx, cv;
	//posicao do objeto no sprite
	var state = [];

	this.transparent = false;
	
	this.width = 0; this.height = 0;
	
	this.worldObj = [];
	
	this.cam = null;

	this.movingX = 0; this.movingY = 0;
	
	this.gravity = false;
	
	this.collision = true;
	
	this.spriteSrc;

	this.falling = true;
	this.masked = false;
	this.canMove = true;

	this.init = function (partitions, state, ctx, cv, srcSprite, worldList, cam, name){
		this.partitions = partitions;
		this.state = state;
		this.ctx = ctx;
		this.cv = cv;
		this.spriteSrc = srcSprite;
		this.worldObj = worldList;
		this.cam = cam;
		var img = new Image();
		img.src = srcSprite;
		this.width = img.naturalWidth/partitions[0];
		this.height = img.naturalHeight/partitions[1];
		this.name = name;
	}
	
	this.fall = function(){
		if(this.gravity && this.falling){
			var oldP = this.position;

			if( this.positioning([oldP[0], oldP[1] + 20]) ){
				this.cam.increaseY(20);
			}
		}
	}
	
	this.positioning = function(newP){
		var oldP = this.position;
		this.position = newP;
		if (this.collide() && !this.transparent){
			this.position = oldP;
			return false;
		}
		return true;
	}
	
	this.collide = function(){
		var result = false;
		if(this.collision){
			for (var i = 0; i < this.worldObj.length; i++){
				if(this.worldObj[i].collision && this.worldObj[i] != this){
					x2 = this.worldObj[i].getPosition()[0]; width2 = this.worldObj[i].getWidth();
					y2 = this.worldObj[i].getPosition()[1]; height2 = this.worldObj[i].getHeight();
					x = this.position[0]; width = this.width;
					y = this.position[1]; height = this.height;

					if( ((x >= x2 && x <= x2 + width2) || (x + width >= x2 && x + width <= x2 + width2) || (x <= x2 && x+width >= x2+width2)) && 
						((y >= y2 && y <= y2 + height2) || (y + height > y2 && y + height < y2 + height2) || (y <= y2 && y+height >= y2+height2)) ){
						
						if( !this.worldObj[i].transparent && this.worldObj[i].name != "poison" && this.name != "poison" && this.worldObj[i].name != "gPoison" && this.name != "gPoison"){
							result = true;
						}
						if(this.worldObj[i].name == "floor" && this.name == "Ant" && this.worldObj[i].position[1] < 480){
							//alert( "obj2Y:" + y2 + " obj2H:" + height2 + ", objY:" + y + " objH:"+height );
						}
						if( this.name == "Ant" && 
							(this.worldObj[i].name == "candy" || this.worldObj[i].name == "floor" || 
							 this.worldObj[i].name == "spike" || this.worldObj[i].name == "hell" ||
							 this.worldObj[i].name == "poison" || this.worldObj[i].name == "mask" || 
							 this.worldObj[i].name == "gPoison" || this.worldObj[i].name == "friend") ){ 
							if(this.worldObj[i].name == "candy"){
								this.score++;
								this.removeFromCanvas(this.worldObj[i]);
								var scoreSound = new SoundTrack(); scoreSound.init('sound/score.mp3');
								scoreSound.playSound(false);
							} else if(this.worldObj[i].name == "mask"){
								this.masked = true;
								this.removeFromCanvas(this.worldObj[i]);
								var maskSound = new SoundTrack(); maskSound.init('sound/mask.mp3');
								maskSound.playSound(false);
							} else {
								this.onCollideWith(this.worldObj[i].name); 
							}
						}
						break;				
					} else if(this.worldObj[i].name == "poison" && this.name == "Ant"){
						this.poisonVerify = 0;
					}
				}
			}
		}
		return result;
	}

	this.onCollideWith = function(str){
		if(this.name == "Ant" && str == "floor"){
			this.movingY = 0; jumperCount = 0;
			this.falling = true;
		} 
		if(this.name == "Ant" && str == "spike"){
			this.die();
		}
		if(this.name == "Ant" && str == "poison"){
			if(this.poisonVerify == 0 && !this.masked){
				this.seek = true;
			}
			this.poisonVerify++;
		}
		if(this.name == "Ant" && str == "gPoison"){
			if(!this.masked){
				this.seek = true;
			}
		}
		if(this.name == "Ant" && str == "friend"){
			this.canMove = false;
		}
	}

	this.removeFromCanvas = function(obj){
		obj.positioning([0,-5000]);
		obj.collision = false;
	}

	this.die = function(){
		this.falling = true;
		this.dead = true;
		this.spriteSrc = "img/death.png";
		this.partitions = [2, 1];
		this.transparent = true;
		this.state = [1, 0];
	}
	
	this.draw = function(){
		var pX = this.position[0];
		var pY = this.position[1];
		camX = this.cam.getPX(); camY = this.cam.getPY();
		// não desenha se não estiver aparecendo
		if( pX - camX >= this.cv.width || pY - camY >= this.cv.height ){
			return;
		}
		pX -= camX; pY -= camY;

		var img = new Image();
		img.src = this.spriteSrc;
		
		var partitionsX = this.partitions[0]; var partitionsY = this.partitions[1];
		var stateX = this.state[0]; var stateY = this.state[1];
		var positionX = pX; var positionY = pY;
		//ctx.drawImage(img, x inicial da img, y inicial da imagem, largura da imagem p desenhar, altura da imagem p desenhar, x da posicao no canvas,y da posição no canvas, largura da imagem, altura da imagem);
		this.ctx.drawImage(img, stateX*img.naturalWidth/partitionsX, stateY*img.naturalHeight/partitionsY, img.naturalWidth/partitionsX, img.naturalHeight/partitionsY, positionX, positionY, img.naturalWidth/partitionsX, img.naturalHeight/partitionsY);
	}	

	this.walk = function(){
		if(this.dead){
			return;
		}
		if(this.movingX > 0){
			this.state[1] = 0;
			this.stoped = 0;
			var p = this.position[0];
			p+=this.movingX;
			if( this.movingY == 0 ){
				if( this.state[0] < this.partitions[0] - 1 ){
					this.state[0] += 1;
				} else {
					this.state[0] = 0;
				}
			}
			if( this.positioning([p, this.position[1]]) && ( Math.abs(this.cam.getPX() - this.position[0]) == this.cv.width/2) ){
				this.cam.increaseX( this.movingX );
			}
		} else if(this.movingX < 0){
			this.state[1] = 1;
			this.stoped = this.partitions[0]-1;
			var p = this.position[0];
			if(this.position[0] >= 5){ p+=this.movingX; }
			if( this.movingY == 0 ){
				if( this.state[0] > 0 ){
					this.state[0] -= 1;
				} else {
					this.state[0] = this.partitions[0]-1;
				}
			}			
			if( this.positioning([p, this.position[1]]) && this.position[0] >= 8 && (Math.abs(this.cam.getPX() - this.position[0]) == (this.cv.width/2-(this.movingX*2)*-1 )) ){
				this.cam.increaseX( this.movingX );
			}
		} else {
			if( this.stoped != null){
				this.state[0] = this.stoped;
			} else{
				this.state[0] = 0;
			}
		}
	}

	this.jump = function(){
		if(this.dead){
			return;
		}
		if(this.movingY > 0){
			if(jumperCount == 0){
				var jumpSound = new SoundTrack(); jumpSound.init('sound/jump.wav');
				jumpSound.playSound(false);
			}
			if( jumperCount < this.movingY ){
				this.falling = false;
				if( this.positioning([this.position[0], this.position[1]-20]) ){
					this.cam.increaseY(-20);
				}
				jumperCount += 20;
			} else{
				this.falling = true;
			}
			if(this.movingX > 0){
				this.state[0] = 2;
			} else if (this.movingX < 0){
				this.state[0] = 4;
			}
		}
	}



	this.update = function(){
		this.walk();
		this.jump();
		this.fall();
		this.draw();
		if(this.seek){
			if(this.score >= 3){
				this.score -= 3;
				this.timer = 10;
				this.seek = false;
			} else{
				this.timer-=0.1;
			}
		}
	}
	
	this.getPosition = function(){
		return this.position;
	}
	
	this.getWidth = function(){
		return this.width;
	}
	
	this.getHeight = function(){
		return this.height;
	}
	
	this.setGravity = function(bool){
		this.gravity = bool;
	}
	
	this.setCollision = function(bool){
		this.collision = bool;
	}

	this.setMovingX = function(v){
		this.movingX = v;
	}

	this.setMovingY = function(v){
		this.movingY = v;
	}


}