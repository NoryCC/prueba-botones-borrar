(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Escalada_prueba_botones_atlas_1", frames: [[0,0,1886,1486]]},
		{name:"Escalada_prueba_botones_atlas_2", frames: [[0,0,1923,1450]]},
		{name:"Escalada_prueba_botones_atlas_3", frames: [[0,0,1511,1366]]},
		{name:"Escalada_prueba_botones_atlas_4", frames: [[0,0,1554,1235]]},
		{name:"Escalada_prueba_botones_atlas_5", frames: [[0,0,1319,1303]]},
		{name:"Escalada_prueba_botones_atlas_6", frames: [[1016,788,137,305],[1155,788,71,71],[1016,0,211,786],[0,0,1014,1280],[1016,1095,103,95],[1121,1095,103,95]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3388,2362);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2793,1980);


(lib.CachedBmp_10 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2060,1130);


(lib.CachedBmp_8 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2182,469);


(lib.CachedBmp_6 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Escalada_prueba_botones_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.magnesio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(-274.95,-216.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(-31.5,-112.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-216.3,755.5,683);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj/BQAMAAAif/MDH/AAAMAAACf/g");
	mask.setTransform(874.7,634.3);

	// Capa_3
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(234.7,122.3,1280,1024), null);


(lib.explicarnes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3A8").s().p("AjsDtQhihigBiLQABiKBihiQBihiCKgBQCLABBiBiQBiBiABCKQgBCLhiBiQhiBiiLABQiKgBhihig");
	this.shape.setTransform(33.55,33.55);

	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-734.75,-347.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(-38.3,-293.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-734.7,-347.2,1030,565);


(lib.explipiedegato = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3A8").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAmQgmAmg3AAQg1AAgngmg");
	this.shape.setTransform(13.175,13.15);

	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-480.8,-316.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480.8,-316.4,507.2,640);


(lib.colchoneta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3A8").s().p("Ai7BZQhOglAAg0QAAgzBOgmQBOgkBtgBQBvABBNAkQBOAmAAAzQAAA0hOAlQhNAlhvAAQhtAAhOglg");
	this.shape.setTransform(-29.625,147.55);

	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-954.05,21.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:-29.625,y:147.55}}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape,p:{x:-28.675,y:147.6}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-954,21.2,1091,234.5);


(lib.bt_presas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(-403.85,-528.75,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_6();
	this.instance_2.setTransform(1.85,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-403.8,-528.7,943,743);


(lib.bt_boulder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3A8").s().p("AiKDZQhRgzgQhkQgQhjA7haQA5haBigcQBhgbBQAzQBQA0APBkQARBjg6BaQg7BahgAcQgiAJgfAAQg8AAg0gig");
	this.shape.setTransform(23.9,25.1107);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-81.65,-431.3,0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF3A8").s().p("AiKDZQhRgzgQhkQgQhjA7haQA5haBigcQBhgbBQAzQBQA0APBkQARBjg6BaQg7BahgAcQgiAJgfAAQg8AAg0gig");
	this.shape_1.setTransform(23.9,25.1107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.6,-431.3,777,617.5);


(lib.ayudantecuerda = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF3A8").s().p("AlSChQiMhDAAheQAAhdCMhDQCMhDDGAAQDGAACMBDQCNBDAABdQAABeiNBDQiMBDjGAAQjGAAiMhDg");
	this.shape.setTransform(58.125,12.475);

	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-47.3,-570.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:12.475}}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape,p:{y:12.525}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-570.2,659.5,651.5);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ehj/BQAMAAAif/MDH/AAAMAAACf/g");
	mask.setTransform(874.7,634.3);

	// Capa_3
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(161.55,234.3,0.5,0.5);

	this.instance_1 = new lib.ClipGroup_0();
	this.instance_1.setTransform(847,590.4,1,1,0,0,0,847,590.4);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(234.7,122.3,1280,1024), null);


// stage content:
(lib.INFOGRAFIA2202 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Todos_
	this.instance = new lib.colchoneta();
	this.instance.setTransform(1149.5,691.95,1,1,0,0,0,26.6,12.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.colchoneta(), 3);

	this.instance_1 = new lib.ayudantecuerda();
	this.instance_1.setTransform(563.2,718.2,1,1,0,0,0,47.9,22.8);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.ayudantecuerda(), 3);

	this.instance_2 = new lib.explipiedegato();
	this.instance_2.setTransform(775.1,441.55,1,1,0,0,0,13.2,13.2);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.explipiedegato(), 3);

	this.instance_3 = new lib.explicarnes();
	this.instance_3.setTransform(921.7,457.15,1,1,0,0,0,33.5,33.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.explicarnes(), 3);

	this.instance_4 = new lib.magnesio();
	this.instance_4.setTransform(573.6,331.45,1,1,0,0,0,17.7,17.7);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.magnesio(), 3);

	this.instance_5 = new lib.bt_presas();
	this.instance_5.setTransform(720,590.7,1,1,0,0,0,25.9,23.8);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.bt_presas(), 3);

	this.instance_6 = new lib.bt_boulder();
	this.instance_6.setTransform(259.35,576.45,1,1,0,0,0,23.9,25.1);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.bt_boulder(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// flash0_ai
	this.instance_7 = new lib.CachedBmp_1();
	this.instance_7.setTransform(121.1,122.65,0.5,0.5);

	this.instance_8 = new lib.ClipGroup();
	this.instance_8.setTransform(612.3,489.8,1,1,0,0,0,847,612.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(405.3,389.7,1054,712.3);
// library properties:
lib.properties = {
	id: 'D06CB9B4AA29464998148E5A0A12FC7C',
	width: 1280,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_12.png?1678191284491", id:"CachedBmp_12"},
		{src:"images/CachedBmp_11.png?1678191284491", id:"CachedBmp_11"},
		{src:"images/CachedBmp_9.png?1678191284491", id:"CachedBmp_9"},
		{src:"images/CachedBmp_7.png?1678191284491", id:"CachedBmp_7"},
		{src:"images/Escalada_prueba_botones_atlas_1.png?1678191284383", id:"Escalada_prueba_botones_atlas_1"},
		{src:"images/Escalada_prueba_botones_atlas_2.png?1678191284384", id:"Escalada_prueba_botones_atlas_2"},
		{src:"images/Escalada_prueba_botones_atlas_3.png?1678191284384", id:"Escalada_prueba_botones_atlas_3"},
		{src:"images/Escalada_prueba_botones_atlas_4.png?1678191284384", id:"Escalada_prueba_botones_atlas_4"},
		{src:"images/Escalada_prueba_botones_atlas_5.png?1678191284384", id:"Escalada_prueba_botones_atlas_5"},
		{src:"images/Escalada_prueba_botones_atlas_6.png?1678191284385", id:"Escalada_prueba_botones_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D06CB9B4AA29464998148E5A0A12FC7C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;