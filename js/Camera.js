
function Camera(){
	
	this.positionX = 0;
	this.positionY = 0;
	this.maxX;
	this.maxY;
	this.minY;
	
	this.init = function(maxX, minY, maxY){
		this.positionX = 0;
		this.positionY = 0;
		this.maxX = maxX;
		this.minY = minY;
		this.maxY = maxY;
	}
	
	this.increaseX = function(qtd){
		if( this.positionX < this.maxX - 800 && this.positionX >= 0 || qtd < 0 ){
			if(this.positionX == 0 && qtd > 0){
				this.positionX += qtd;
			} else if( this.positionX > 0 ){
				this.positionX += qtd;
			}
		}
	}
	
	this.increaseY = function(qtd){
		if(this.positionY < this.maxY - 600 && this.positionY >= this.minY){
			this.positionY += qtd;
		}
	}
	
	this.getPX = function(){
		return this.positionX;
	}
	
	this.getPY = function(){
		return this.positionY;
	}
}