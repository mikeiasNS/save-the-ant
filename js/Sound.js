var fonte, ctxAudio, bufferSound;
var loaded = false;

function SoundTrack(){
	this.init = function(file){
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		ctxAudio = new AudioContext();
		fonte = ctxAudio.createBufferSource();
		
		carregaSom(file);
	}
	this.playSound = function(loop){
		fonte.loop = loop;
		fonte.connect(ctxAudio.destination);
		fonte.start();
	}
	this.stopSound = function(){
		fonte.stop();
	}
	this.isLoad = function(){
		return loaded;
	}
}
function carregaSom(arquivo){               
	var req = new XMLHttpRequest();
	req.open('GET', arquivo, true);
	req.responseType = 'arraybuffer';
                
    req.onload = function(){
        ctxAudio.decodeAudioData(req.response, function(buffer){ bufferSound = buffer; fonte.buffer = bufferSound; loaded = true;});
    };
    
    req.send();
}