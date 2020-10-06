(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"HomeFlowers_atlas_1", frames: [[1757,1225,215,273],[1523,389,223,289],[1722,1531,215,273],[955,1371,302,256],[1223,389,298,377],[1748,379,223,283],[1223,0,340,387],[1754,963,227,260],[902,1683,228,259],[1565,0,298,377],[1811,664,223,280],[647,1385,303,296],[320,1653,297,377],[1586,680,223,281],[1503,1531,217,275],[1259,1531,242,286],[647,1006,306,377],[1527,983,225,272],[1223,768,361,213],[0,1653,318,377],[955,1006,297,363],[1532,1257,223,272],[1254,983,271,272],[619,1683,281,280],[1259,1257,271,272],[0,1006,645,645],[0,0,1221,1004]]},
		{name:"HomeFlowers_atlas_2", frames: [[1746,480,220,98],[1706,580,205,74],[1492,511,212,74],[1115,375,190,74],[828,584,198,74],[875,484,220,98],[243,598,168,58],[0,594,241,51],[489,274,135,58],[1097,545,336,58],[506,549,320,58],[506,473,367,74],[1115,469,375,74],[1308,0,261,213],[651,267,241,204],[217,0,215,272],[1571,0,219,252],[1792,0,219,252],[1308,215,219,252],[434,0,215,272],[1746,254,223,224],[894,267,219,215],[0,0,215,273],[874,0,215,265],[217,274,270,162],[0,438,262,154],[651,0,221,261],[1529,254,215,255],[1091,0,215,264],[264,438,240,158],[1435,587,247,50],[1115,266,132,107],[0,275,196,150],[2013,0,1,1],[489,334,59,41],[1971,254,57,114]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.CachedBmp_108 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(img.CachedBmp_63);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_61 = function() {
	this.initialize(img.CachedBmp_61);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_59 = function() {
	this.initialize(img.CachedBmp_59);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_57 = function() {
	this.initialize(img.CachedBmp_57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_55 = function() {
	this.initialize(img.CachedBmp_55);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_53 = function() {
	this.initialize(img.CachedBmp_53);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_51 = function() {
	this.initialize(img.CachedBmp_51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_49 = function() {
	this.initialize(img.CachedBmp_49);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_47 = function() {
	this.initialize(img.CachedBmp_47);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_45 = function() {
	this.initialize(img.CachedBmp_45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_62 = function() {
	this.initialize(img.CachedBmp_62);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2258,963);


(lib.CachedBmp_43 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(img.CachedBmp_30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_29 = function() {
	this.initialize(img.CachedBmp_29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_27 = function() {
	this.initialize(img.CachedBmp_27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_25 = function() {
	this.initialize(img.CachedBmp_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_23 = function() {
	this.initialize(img.CachedBmp_23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_21 = function() {
	this.initialize(img.CachedBmp_21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_19 = function() {
	this.initialize(img.CachedBmp_19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_17 = function() {
	this.initialize(img.CachedBmp_17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_15 = function() {
	this.initialize(img.CachedBmp_15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2561,1436);


(lib.CachedBmp_28 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["HomeFlowers_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["HomeFlowers_atlas_2"]);
	this.gotoAndStop(35);
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


(lib.winterMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_108();
	this.instance.setTransform(-9.65,-10,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-10,110,49);


(lib.winterHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_107();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_106();
	this.instance_1.setTransform(-3.5,-5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-5.5,110,49);


(lib.winterChecked = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_105();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_106();
	this.instance_1.setTransform(-1.5,-5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-5.5,110,49);


(lib.fallHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_103();
	this.instance.setTransform(0,-2.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_106();
	this.instance_1.setTransform(-6.5,-8.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-8.5,110,49);


(lib.FallChecked = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_101();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_106();
	this.instance_1.setTransform(-4.5,-5.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,-5.5,110,49);


(lib.Qmarks = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מחודש ספטמבר עד חודש דצמבר.", "18px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 273;
	this.text.parent = this;
	this.text.setTransform(360.15,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1PCNIAAkYMAqfAAAIAAEYg");
	this.shape.setTransform(226.175,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A0KCNIAAkZMAoVAAAIAAEZg");
	this.shape_1.setTransform(233.15,53.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AwGCMIAAkYMAgNAAAIAAEYg");
	this.shape_2.setTransform(259.55,89.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AyUCMIAAkYMAkpAAAIAAEYg");
	this.shape_3.setTransform(245.1125,122.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AwyCNIAAkZMAhlAAAIAAEZg");
	this.shape_4.setTransform(192.225,236.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A05CMIAAkXMApzAAAIAAEXg");
	this.shape_5.setTransform(163.425,279.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AsaCNIAAkZIY1AAIAAEZg");
	this.shape_6.setTransform(221.925,315.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AxXCLIAAkYMAiwAADIAAEYg");
	this.shape_7.setTransform(181.05,412.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AtviKIbfgDIAAEYI7fADg");
	this.shape_8.setTransform(204.975,449.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{x:360.15,y:2,text:"מחודש ספטמבר עד חודש דצמבר.",scaleX:1,lineWidth:273}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{x:362.25,y:40.75,text:"מחודש דצמבר עד חודש פברואר.",scaleX:1,lineWidth:273}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{x:362.25,y:77.75,text:"מחודש מרץ עד חודש מאי.",scaleX:1,lineWidth:273}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{x:362.25,y:110.5,text:"מחודש יוני עד חודש ספטמבר.",scaleX:1,lineWidth:273}}]},1).to({state:[{t:this.shape_4},{t:this.text,p:{x:299.4,y:224.65,text:"שמש ישירה בכל שעות היום",scaleX:1,lineWidth:273}}]},1).to({state:[{t:this.shape_5},{t:this.text,p:{x:298.5387,y:267.3,text:"שילוב של אור שמש וצל במהלך היום.",scaleX:0.9319,lineWidth:289}}]},1).to({state:[{t:this.shape_6},{t:this.text,p:{x:299.4,y:303.65,text:" ללא חשיפה לשמש.",scaleX:1,lineWidth:156}}]},1).to({state:[{t:this.shape_7},{t:this.text,p:{x:290.95,y:399.95,text:"פורח יותר מפעם אחת בשנה. ",scaleX:1,lineWidth:224}}]},1).to({state:[{t:this.shape_8},{t:this.text,p:{x:293.05,y:438.05,text:"פורח פעם אחת בשנה. ",scaleX:1,lineWidth:174}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.3,0,340,464);


(lib.QM = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVB6QgHgIAAgHQAAgIAHgHQAGgHAJAAQAIAAAGAHQAGAGAAAJQAAAIgGAHQgGAGgIAAQgJAAgGgGgAgRA4QgEgEAAgGQAAgRAFgMQAGgLAIgIQAFgHAOgMQAOgKAHgJQAGgHAAgLQAAgngyABQgMAAgNACQgMADgJAGQgFADgEAAQgGAAgFgEQgEgFAAgFQAAgJAJgFQAQgKAOgDQAOgEAUAAQAkAAAVASQAXATAAAfQAAAOgGALQgEAKgIAIQgJAIgKAIQgOAKgJALQgIALAAAOQAAAGgEAEQgFADgGAAQgHAAgEgDg");
	this.shape.setTransform(9.313,14.2428,0.5229,0.5229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#005500").ss(2,1,1).p("ABmAAQAAAqgeAfQgeAegqAAQgpAAgfgeQgdgfAAgqQAAgpAdgfQAfgeApAAQAqAAAeAeQAeAfAAApg");
	this.shape_1.setTransform(9.325,14.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBCQgbgcAAgmQAAglAbgcQAbgbAmAAQAmAAAbAbQAcAcAAAlQAAAmgcAcQgbAbgmAAQgmAAgbgbg");
	this.shape_2.setTransform(9.3,14.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.QM, new cjs.Rectangle(-1.9,3,22.5,22.5), null);


(lib.polycyclicMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_98();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.5,25.5);


(lib.noSunMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_97();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.5,29);


(lib.moreInfo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MergedLayer_1
	this.text = new cjs.Text("...למידע נוסף", "24px 'Varela Round'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 137;
	this.text.parent = this;
	this.text.setTransform(70.3,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("Aq+AAIV9AA");
	this.shape.setTransform(70.25,30.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FA185").s().p("AsUDPIAAmdIYpAAIAAGdg");
	this.shape_1.setTransform(70.9,28.9,1,1,0,0,0,-0.2,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{x:70.3,y:2,color:"#333333"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{x:70.9,y:-4.25,color:"#FFFFFF"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-9.1,157.8,44.6);


(lib.midSunMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_96();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,29);


(lib.fullSunmain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_95();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,29);


(lib.fullSunHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_94();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fullSunHL, new cjs.Rectangle(0,0,183.5,37), null);


(lib.fullSunChecked = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_93();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.5,37);


(lib.roseMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_92();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roseMain, new cjs.Rectangle(0,0,107.5,136.5), null);


(lib.roseHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_91();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roseHL, new cjs.Rectangle(0,0,111.5,144.5), null);


(lib.roseGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_90();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roseGray, new cjs.Rectangle(0,0,107.5,136.5), null);


(lib.pansyMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_89();
	this.instance.setTransform(0,0,0.3623,0.3623);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pansyMain, new cjs.Rectangle(0,0,109.4,92.8), null);


(lib.pansyHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_88();
	this.instance.setTransform(0,0,0.4539,0.4539);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pansyHL, new cjs.Rectangle(0,0,118.5,96.7), null);


(lib.pansyGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_87();
	this.instance.setTransform(0,0,0.4545,0.4545);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pansyGray, new cjs.Rectangle(0,0,109.6,92.8), null);


(lib.mallisaMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_86();
	this.instance.setTransform(0,0,0.3611,0.3611);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mallisaMain, new cjs.Rectangle(0,0,107.6,136.2), null);


(lib.mallisaHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_85();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mallisaHL, new cjs.Rectangle(0,0,111.5,141.5), null);


(lib.mallisaGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_84();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mallisaGray, new cjs.Rectangle(0,0,107.5,136), null);


(lib.lilachMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// lilach
	this.instance = new lib.CachedBmp_83();
	this.instance.setTransform(0.2,0.85,0.335,0.335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AovKWIAA0zIRfAHIAAU0g");
	this.shape.setTransform(56.6,63.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lilachMain, new cjs.Rectangle(0.2,-3.1,113.89999999999999,134), null);


(lib.lilachHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_82();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lilachHL, new cjs.Rectangle(0,0,113.5,130), null);


(lib.lilachGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_81();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lilachGray, new cjs.Rectangle(0,0,109.5,126), null);


(lib.lavenderMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_77();
	this.instance.setTransform(0,0,0.3614,0.3614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lavenderMain, new cjs.Rectangle(0,0,107.7,136.3), null);


(lib.lavenderHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_76();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lavenderHL, new cjs.Rectangle(0,0,111.5,140), null);


(lib.lavenderGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_75();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lavenderGray, new cjs.Rectangle(0,0,107.5,136), null);


(lib.jasmineMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_74();
	this.instance.setTransform(0,-0.3,0.3623,0.3623);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jasmineMain, new cjs.Rectangle(0,-0.3,109.8,107.3), null);


(lib.jasmineHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_73();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jasmineHL, new cjs.Rectangle(0,0,111.5,112), null);


(lib.jasmineGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_72();
	this.instance.setTransform(0,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jasmineGray, new cjs.Rectangle(0,-0.5,109.5,107.5), null);


(lib.irisMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// iris
	this.instance = new lib.CachedBmp_71();
	this.instance.setTransform(-51.2,-68.15,0.362,0.362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.irisMain, new cjs.Rectangle(-51.2,-68.1,107.5,136.39999999999998), null);


(lib.irisHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(1.7,-0.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.irisHL, new cjs.Rectangle(1.7,-0.2,111.5,140.5), null);


(lib.irisGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(2.7,-0.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.irisGray, new cjs.Rectangle(2.7,-0.2,107.5,136.5), null);


(lib.hyacinthMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_66();
	this.instance.setTransform(0,0,0.3518,0.3518);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hyacinthMain, new cjs.Rectangle(0,0,107.7,132.7), null);


(lib.hyacinthHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_65();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hyacinthHL, new cjs.Rectangle(0,0,112.5,136), null);


(lib.hyacinthGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_64();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hyacinthGray, new cjs.Rectangle(0,0,107.5,132.5), null);


(lib.geraniumMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_43();
	this.instance.setTransform(0,0,0.3623,0.3623);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.geraniumMain, new cjs.Rectangle(0,0,130.8,77.2), null);


(lib.geraniumHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_42();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.geraniumHL, new cjs.Rectangle(0,0,135,81), null);


(lib.geraniumGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_41();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.geraniumGray, new cjs.Rectangle(0,0,131,77), null);


(lib.dahliaMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_40();
	this.instance.setTransform(0,0,0.3379,0.3379);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dahliaMain, new cjs.Rectangle(0,0,107.5,127.4), null);


(lib.dahliaHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_39();
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dahliaHL, new cjs.Rectangle(-1.5,-1.5,110.5,130.5), null);


(lib.dahliaGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_38();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dahliaGray, new cjs.Rectangle(0,0,107.5,127.5), null);


(lib.carnationMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_37();
	this.instance.setTransform(1.75,0,0.3623,0.3623);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carnationMain, new cjs.Rectangle(1.8,0,107.60000000000001,131.5), null);


(lib.carnationHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_36();
	this.instance.setTransform(0.75,0.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carnationHL, new cjs.Rectangle(0.8,0.1,111.5,136), null);


(lib.carnationGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_35();
	this.instance.setTransform(1.75,-0.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carnationGray, new cjs.Rectangle(1.8,-0.1,107.5,132), null);


(lib.aureumMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aureumMain, new cjs.Rectangle(0,0,135.5,136), null);


(lib.aureumHL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(-2.7,-2.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aureumHL, new cjs.Rectangle(-2.7,-2.2,140.5,140), null);


(lib.aureumGray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aureumGray, new cjs.Rectangle(0,0,135.5,136), null);


(lib.closeBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("X", "bold 28px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 33;
	this.text.lineWidth = 19;
	this.text.parent = this;
	this.text.setTransform(24.65,3.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4C+QgogBAAgvIAAkaQAAgyApAAIDvAAQApAAAAAyIAAEaQAAAqgeAFIgKABg");
	this.shape.setTransform(16.125,19.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.3,38.1);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-0.05,-0.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,610.5,502), null);


(lib.annualMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.5,25);


(lib.Aboutbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("אודות", "bold 18px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 22;
	this.text.lineWidth = 44;
	this.text.parent = this;
	this.text.setTransform(54.65,16.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7A122").s().p("AiGEJQgWgHgKgdQgfALgdgNQgOgHgQgPQgRgOgHgNQgFgIACgNQADgOgEgLQgDgJgUgiQgRgegCgMQgDgeAggJQgXgaABgZQABgUAagcQAMgOALAJQAcgbAWgHIAKgCQAJgnAOgNQARgPAeAGQAHggAZgSQANgJAWgGQAVgHAOAAQAJAAAKAJQALAKALACQAJACAnAAQAjAAALAFQAcANgJAgQAjgGAVANQAQAMALAkIABACIAGgBQAKAAAGAEIANAMIAYAPQAPAKAGAJQAOAUgBAcQAOgBAJASQAOAmgFASQgGAWgcALQALAfgMAdQgGAOgOARQgOARgMAIQgIAFgNgBQgPgCgKAEQgJADghAVQgeATgLACQgfAEgKggQgYAYgbAAQgMAAgRgLIgGAFQgTAMgdgBQAAAOgSAHQgNAFgPACQgKACgIAAQgGAAgFgBg");
	this.shape.setTransform(32.7277,26.6192);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005500").s().p("AiGEJQgWgHgKgdQgfALgdgNQgOgHgQgPQgRgOgHgNQgFgIACgNQADgOgEgLQgDgJgUgiQgRgegCgMQgDgeAggJQgXgaABgZQABgUAagcQAMgOALAJQAcgbAWgHIAKgCQAJgnAOgNQARgPAeAGQAHggAZgSQANgJAWgGQAVgHAOAAQAJAAAKAJQALAKALACQAJACAnAAQAjAAALAFQAcANgJAgQAjgGAVANQAQAMALAkIABACIAGgBQAKAAAGAEIANAMIAYAPQAPAKAGAJQAOAUgBAcQAOgBAJASQAOAmgFASQgGAWgcALQALAfgMAdQgGAOgOARQgOARgMAIQgIAFgNgBQgPgCgKAEQgJADghAVQgeATgLACQgfAEgKggQgYAYgbAAQgMAAgRgLIgGAFQgTAMgdgBQAAAOgSAHQgNAFgPACQgKACgIAAQgGAAgFgBg");
	this.shape_1.setTransform(33.5277,27.0192);

	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-14.5,-11.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{x:54.65,color:"#000000"}}]}).to({state:[{t:this.shape},{t:this.shape_1},{t:this.text,p:{x:55.45,color:"#FFFFFF"}}]},1).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text,p:{x:55.45,color:"#FFFFFF"}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-11.4,98,75);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// sun
	this.Sadow = new lib.noSunMain();
	this.Sadow.name = "Sadow";
	this.Sadow.setTransform(122,85.35,0.8573,0.8573,0,0,0,42.1,16.1);

	this.midSun = new lib.midSunMain();
	this.midSun.name = "midSun";
	this.midSun.setTransform(36.1,49.6,0.8573,0.8573,0,0,0,42.1,16.1);

	this.fullSun = new lib.fullSunmain();
	this.fullSun.name = "fullSun";
	this.fullSun.setTransform(42.7,13.8,0.8573,0.8573,0,0,0,42.1,16.1);

	this.fullSunHL1 = new lib.fullSunHL();
	this.fullSunHL1.name = "fullSunHL1";
	this.fullSunHL1.setTransform(143.8,0.05,0.8573,0.8573,0,0,0,179.7,3.3);
	this.fullSunHL1.shadow = new cjs.Shadow("rgba(255,153,0,1)",0,0,8);

	this.fullSunchk = new lib.fullSunChecked();
	this.fullSunchk.name = "fullSunchk";
	this.fullSunchk.setTransform(143.8,-1.55,0.8573,0.8573,0,0,0,179.7,3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fullSun},{t:this.midSun},{t:this.Sadow}]}).to({state:[{t:this.fullSunHL1},{t:this.midSun},{t:this.Sadow}]},1).to({state:[{t:this.fullSunchk},{t:this.midSun},{t:this.Sadow}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-11.8,179,108.2);


(lib.winter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// winter
	this.instance = new lib.winterMain("synched",0);
	this.instance.setTransform(39.05,14.55,1,1,0,0,0,45.4,14.5);

	this.instance_1 = new lib.winterHL();
	this.instance_1.setTransform(41.65,14.05,1,1,0,0,0,48.5,16);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,153,0,1)",0,0,4);

	this.instance_2 = new lib.winterChecked("synched",0);
	this.instance_2.setTransform(41.65,10.05,1,1,0,0,0,48.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoHD1IAAnpIQPAAIAAHpg");
	this.shape.setTransform(40,15.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-12.4,123.7,62);


(lib.fall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// fall
	this.instance = new lib.CachedBmp_99();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.fallHL();
	this.instance_1.setTransform(41.65,14.05,1,1,0,0,0,48.5,16);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,153,0,1)",0,0,4);

	this.instance_2 = new lib.FallChecked("synched",0);
	this.instance_2.setTransform(41.65,10.05,1,1,0,0,0,48.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AoHD1IAAnpIQPAAIAAHpg");
	this.shape.setTransform(40,15.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-15.4,123,62);


(lib.polycyclic = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Polycyclic
	this.instance = new lib.polycyclicMain("synched",0);
	this.instance.setTransform(60.4,12.7,1,1,0,0,0,60.4,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.polycyclic, new cjs.Rectangle(0,0,120.5,25.5), null);


(lib.rose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// rose
	this.instance = new lib.roseMain();
	this.instance.setTransform(59.2,75.1,1,1,0,0,0,53.8,68.3);

	this.instance_1 = new lib.roseGray();
	this.instance_1.setTransform(59.6,75,1,1,0,0,0,53.9,68.2);

	this.instance_2 = new lib.roseHL();
	this.instance_2.setTransform(57.35,70.75,1,1,0,0,0,53.8,68.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AoRKvIAA1lIQjAIIAAVlg");
	this.shape.setTransform(57.425,73.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,2.6,111.5,144.5);


(lib.pansyAT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// pansyAT
	this.instance = new lib.pansyMain();
	this.instance.setTransform(60.3,51.15,1.1,1.1,0,0,0,54.8,46.5);

	this.instance_1 = new lib.pansyGray();
	this.instance_1.setTransform(60.3,51.15,1.1,1.1,0,0,0,54.8,46.5);

	this.instance_2 = new lib.pansyHL();
	this.instance_2.setTransform(57.35,51.4,1.1014,1.1014,0,0,0,59.1,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("ApcIWIAAwxIS5AGIAAQxg");
	this.shape.setTransform(62.075,51);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-3,130.5,108);


(lib.mallisa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// mallisa
	this.instance = new lib.mallisaMain();

	this.instance_1 = new lib.mallisaGray();

	this.instance_2 = new lib.mallisaHL();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AoRKwIAA1mIQjAHIAAVmg");
	this.shape.setTransform(54.575,66.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,111.5,144.5);


(lib.lilach = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// lilach
	this.instance = new lib.CachedBmp_78();
	this.instance.setTransform(0.25,0.85,0.5,0.5);

	this.instance_1 = new lib.lilachGray();
	this.instance_1.setTransform(54.6,63.15,1,1,0,0,0,54.6,63.1);

	this.instance_2 = new lib.CachedBmp_79();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.lilachHL();
	this.instance_3.setTransform(52.6,65.15,1,1,0,0,0,56.6,65.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,10);

	this.instance_4 = new lib.CachedBmp_80();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.instance_1},{t:this.instance_3}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AovKWIAA0zIRfAHIAAU0g");
	this.shape.setTransform(56.6,63.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-10.9,139,155);


(lib.lavender = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// lavender
	this.instance = new lib.lavenderMain();
	this.instance.setTransform(53.35,67.1,1,1,0,0,0,53.8,68.1);

	this.instance_1 = new lib.lavenderGray();
	this.instance_1.setTransform(0.35,0.25,1,1,0,0,0,0,0.2);

	this.instance_2 = new lib.lavenderHL();
	this.instance_2.setTransform(-2.65,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AoRKwIAA1mIQjAHIAAVmg");
	this.shape.setTransform(54.575,66.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-3,111.5,141.1);


(lib.jasmine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// jasmine
	this.instance = new lib.jasmineMain();
	this.instance.setTransform(60.3,58.75,1,1,0,0,0,54.8,53.4);

	this.instance_1 = new lib.jasmineGray();
	this.instance_1.setTransform(60.6,58.85,1,1,0,0,0,54.9,53.4);

	this.instance_2 = new lib.jasmineHL();
	this.instance_2.setTransform(60.6,54.9,1,1,0,0,0,54.9,53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("ApaJTIAAysIS1AHIAASsg");
	this.shape.setTransform(60.25,52.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.9,120.6,121.4);


(lib.iris = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// iris
	this.instance = new lib.irisHL();
	this.instance.setTransform(52.5,65.05,1,1,0,0,0,56.5,68);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("ApNLQIAA2eIScAAIAAWeg");
	this.shape.setTransform(53.25,67.35);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.irisMain();
	this.instance_1.setTransform(53.75,68.2,1,1,0,0,0,2.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#585858").ss(1,0,0,17,true).p("AAAAAIABAA");
	this.shape_1.setTransform(107.45,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(207,243,163,0.008)").s().p("AodKzIAA1lIQ5AAIAAASIACAAIAAVTg");
	this.shape_2.setTransform(53.35,67.325);

	this.instance_2 = new lib.CachedBmp_68();
	this.instance_2.setTransform(-0.5,-0.5,0.5,0.5);

	this.instance_3 = new lib.irisGray();
	this.instance_3.setTransform(54.05,68.2,1,1,0,0,0,56.5,68);

	this.instance_4 = new lib.CachedBmp_67();
	this.instance_4.setTransform(1.5,-0.05,0.5,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(207,243,163,0.008)").s().p("AocKzIAA1lIQ5AAIAAVlg");
	this.shape_3.setTransform(53.25,67.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_1}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.8,-4.6,128.3,147.6);


(lib.hyacinth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// hyacinth
	this.instance = new lib.hyacinthMain();
	this.instance.setTransform(53.8,66.3,1,1,0,0,0,53.8,66.3);

	this.instance_1 = new lib.hyacinthGray();
	this.instance_1.setTransform(53.8,66.3,1,1,0,0,0,53.8,66.3);

	this.instance_2 = new lib.hyacinthHL();
	this.instance_2.setTransform(51.8,64.3,1,1,0,0,0,53.8,66.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AodqsIATAAIAAgMINKABIAAALIDegBIAAVmIw7AAg");
	this.shape.setTransform(53.35,66.7125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-3,112.5,139.5);


(lib.harhava = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// card
	this.instance = new lib.irisMain();
	this.instance.setTransform(236.9,512.2,1.3812,1.3811,0,0,0,53.8,68.2);
	this.instance.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.text = new cjs.Text("  מומלץ להשתמש בפקעות של אירוסים ולא בזרעים. את הפקעות יש להשרות במים למשך זמן של בין יומיים לשבועיים טרם השתילה, ולאחר מכן לשתול באדנית מלאה בתערובת זבל אורגני עשיר או באדמה. יש לדשן בדשן אורגני המשחרר בהדרגה חומרים לאדמה,לערבב את הדשן היטב עם האדמה. מומלץ לשתול את הפקעות במרחק של 25 ס\"מ זו מזו .ולוודא כי שורשי הפרח מכוסים באדמה לגמרי", "18px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 897;
	this.text.parent = this;
	this.text.setTransform(1168.7,365.35);

	this.text_1 = new cjs.Text(".מתחיל לאחר 3-4 חודשים מהזריעה", "18px 'Varela Round'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 776;
	this.text_1.parent = this;
	this.text_1.setTransform(1024.6,273.35);

	this.text_2 = new cjs.Text(".קיימים מעל ל-300 מינים של אירוסים", "18px 'Varela Round'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 854;
	this.text_2.parent = this;
	this.text_2.setTransform(1102.6,217.35);

	this.text_3 = new cjs.Text(":כיצד לשתול ולדשן", "24px 'Varela Round'", "#57274A");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 33;
	this.text_3.lineWidth = 199;
	this.text_3.parent = this;
	this.text_3.setTransform(1168.7,323.7);

	this.text_4 = new cjs.Text(":תהליך נביטה", "24px 'Varela Round'", "#57274A");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 33;
	this.text_4.lineWidth = 140;
	this.text_4.parent = this;
	this.text_4.setTransform(1168.7,269.35);

	this.text_5 = new cjs.Text(":סוגים", "24px 'Varela Round'", "#57274A");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 33;
	this.text_5.lineWidth = 61;
	this.text_5.parent = this;
	this.text_5.setTransform(1168.7,212.9);

	this.text_6 = new cjs.Text("אירוס- הרחבה", "28px 'Varela Round'", "#FFFFFF");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 39;
	this.text_6.lineWidth = 207;
	this.text_6.parent = this;
	this.text_6.setTransform(1178.95,80.8);

	this.clsIris2 = new lib.closeBtn();
	this.clsIris2.name = "clsIris2";
	this.clsIris2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsIris2, 0, 1, 1);

	this.instance_1 = new lib.CachedBmp_45();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_62();
	this.instance_2.setTransform(72.2,147.85,0.5,0.5);

	this.instance_3 = new lib.hyacinthMain();
	this.instance_3.setTransform(166.1,418,1.3812,1.4212,0,0,0,53.8,66.3);
	this.instance_3.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clshyacinth2 = new lib.closeBtn();
	this.clshyacinth2.name = "clshyacinth2";
	this.clshyacinth2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clshyacinth2, 0, 1, 1);

	this.instance_4 = new lib.CachedBmp_47();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.instance_5 = new lib.carnationMain();
	this.instance_5.setTransform(166.1,418,1.38,1.3799,0,0,0,53.8,65.7);
	this.instance_5.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);
	this.instance_5.cache(0,-2,112,136);

	this.clsCarnation2 = new lib.closeBtn();
	this.clsCarnation2.name = "clsCarnation2";
	this.clsCarnation2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsCarnation2, 0, 1, 1);

	this.instance_6 = new lib.CachedBmp_49();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.instance_7 = new lib.pansyMain();
	this.instance_7.setTransform(166.1,418,1.38,1.3799,0,0,0,53.8,65.7);
	this.instance_7.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);
	this.instance_7.cache(-2,-2,113,97);

	this.clsPansyAT2 = new lib.closeBtn();
	this.clsPansyAT2.name = "clsPansyAT2";
	this.clsPansyAT2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsPansyAT2, 0, 1, 1);

	this.instance_8 = new lib.CachedBmp_51();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.instance_9 = new lib.dahliaMain();
	this.instance_9.setTransform(166.05,417.9,1.3812,1.3799,0,0,0,53.8,63.6);
	this.instance_9.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsDahlia2 = new lib.closeBtn();
	this.clsDahlia2.name = "clsDahlia2";
	this.clsDahlia2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsDahlia2, 0, 1, 1);

	this.instance_10 = new lib.CachedBmp_53();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.instance_11 = new lib.jasmineMain();
	this.instance_11.setTransform(166.05,417.7,1.38,1.3799,0,0,0,54.8,53.4);
	this.instance_11.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsJasmin2 = new lib.closeBtn();
	this.clsJasmin2.name = "clsJasmin2";
	this.clsJasmin2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsJasmin2, 0, 1, 1);

	this.instance_12 = new lib.CachedBmp_55();
	this.instance_12.setTransform(0,0,0.5,0.5);

	this.instance_13 = new lib.lilachMain();
	this.instance_13.setTransform(163.5,415.05,1.38,1.3799,0,0,0,54.7,63.1);
	this.instance_13.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clslilach2 = new lib.closeBtn();
	this.clslilach2.name = "clslilach2";
	this.clslilach2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clslilach2, 0, 1, 1);

	this.instance_14 = new lib.CachedBmp_57();
	this.instance_14.setTransform(0,0,0.5,0.5);

	this.instance_15 = new lib.mallisaMain();
	this.instance_15.setTransform(166.1,418,1.38,1.3799,0,0,0,53.8,68.1);
	this.instance_15.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsMallisa2 = new lib.closeBtn();
	this.clsMallisa2.name = "clsMallisa2";
	this.clsMallisa2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsMallisa2, 0, 1, 1);

	this.instance_16 = new lib.CachedBmp_59();
	this.instance_16.setTransform(0,0,0.5,0.5);

	this.instance_17 = new lib.geraniumMain();
	this.instance_17.setTransform(166.1,418,1.38,1.3799,0,0,0,53.8,68.1);
	this.instance_17.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsGeranium2 = new lib.closeBtn();
	this.clsGeranium2.name = "clsGeranium2";
	this.clsGeranium2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsGeranium2, 0, 1, 1);

	this.instance_18 = new lib.CachedBmp_61();
	this.instance_18.setTransform(0,0,0.5,0.5);

	this.instance_19 = new lib.lavenderMain();
	this.instance_19.setTransform(166.1,417.95,1.38,1.3799,0,0,0,53.8,68.1);
	this.instance_19.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsLavender2 = new lib.closeBtn();
	this.clsLavender2.name = "clsLavender2";
	this.clsLavender2.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsLavender2, 0, 1, 1);

	this.instance_20 = new lib.CachedBmp_63();
	this.instance_20.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.clsIris2},{t:this.text_6,p:{text:"אירוס- הרחבה",color:"#FFFFFF",lineWidth:207}},{t:this.text_5,p:{color:"#57274A"}},{t:this.text_4,p:{color:"#57274A"}},{t:this.text_3,p:{color:"#57274A"}},{t:this.text_2,p:{text:".קיימים מעל ל-300 מינים של אירוסים"}},{t:this.text_1,p:{text:".מתחיל לאחר 3-4 חודשים מהזריעה"}},{t:this.text,p:{text:"  מומלץ להשתמש בפקעות של אירוסים ולא בזרעים. את הפקעות יש להשרות במים למשך זמן של בין יומיים לשבועיים טרם השתילה, ולאחר מכן לשתול באדנית מלאה בתערובת זבל אורגני עשיר או באדמה. יש לדשן בדשן אורגני המשחרר בהדרגה חומרים לאדמה,לערבב את הדשן היטב עם האדמה. מומלץ לשתול את הפקעות במרחק של 25 ס\"מ זו מזו .ולוודא כי שורשי הפרח מכוסים באדמה לגמרי",lineWidth:897}},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_4},{t:this.clshyacinth2},{t:this.text_6,p:{text:"יקינתון- הרחבה",color:"#FFFFFF",lineWidth:207}},{t:this.text_5,p:{color:"#005500"}},{t:this.text_4,p:{color:"#005500"}},{t:this.text_3,p:{color:"#005500"}},{t:this.text_2,p:{text:".משפחת השושניים. במשפחה 70 סוגים ולמעלה מ-1000 מינים"}},{t:this.text_1,p:{text:".מתחיל כ3 שבועות לאחר הזריעה"}},{t:this.text,p:{text:"מומלץ לשתול במרווח של 10 ס\"מ בין הפקעות. יש לאחסן אותן במקרר למשך 4-6 שבועות טרם שתילתם. ניתן לשתול בצנצנת בה שורשיו של היקינתון טבולים במים והפקעת מונחת מעל פניהן. יש לאכסנו בתוך שקית נייר ולשים במגירת .הירקות של המקרר למשך 4-6 שבועות לפני השתילה  ",lineWidth:897}},{t:this.instance_3}]},1).to({state:[{t:this.instance_2},{t:this.instance_6},{t:this.clsCarnation2},{t:this.text_6,p:{text:"ציפורן- הרחבה",color:"#FFFFFF",lineWidth:207}},{t:this.text_5,p:{color:"#B72936"}},{t:this.text_4,p:{color:"#B72936"}},{t:this.text_3,p:{color:"#B72936"}},{t:this.text_2,p:{text:".משפחת הציפורניים. מעל 80 סוגים וכ2000 מינים נפוצים"}},{t:this.text_1,p:{text:".בין 5-7 ימים מרגע הזריעה"}},{t:this.text,p:{text:"את זרעי הציפורן יש לשתול באדמה מעורבבת היטב עם זבל אורגני. הציפורן זקוק לאדמה לחה אך לא ספוגה במים, לכן יש לוודא שישנם חורי ניקוז באדניות שיאפשרו למים להתנקז בקלות. את הזרעים יש להניח מעט מתחת לפני האדמה ולהקפיד על מרווח של 30 ס\"מ בין פרח לפרח. הציפורן עמיד למרבית המחלות ואין צורך לטפל בו ולדשן אותו לעיתים .קרובות, על כן הוא נוח לגידול ביתי",lineWidth:897}},{t:this.instance_5}]},1).to({state:[{t:this.instance_2},{t:this.instance_8},{t:this.clsPansyAT2},{t:this.text_6,p:{text:"אמנון ותמר- הרחבה",color:"#C9CDE9",lineWidth:250}},{t:this.text_5,p:{color:"#363570"}},{t:this.text_4,p:{color:"#363570"}},{t:this.text_3,p:{color:"#363570"}},{t:this.text_2,p:{text:".משפחת הסיגליים, כולל כ-300 מינים"}},{t:this.text_1,p:{text:".שתילה בסתיו תניב 2 מחזורי פריחה: לפני החורף ובתחילת האביב"}},{t:this.text,p:{text:"במידה ושותלים את הצמח באדמה, יש לשתול את הצמחים במרווחים של כ 20 ס\"מ, בקרקע מאווררת ומנוקזת היטב. .גיזום עלים נכון -להוריד את העלה מבסיס העלה מבלי לפגוע בענפים עם ניצנים",lineWidth:897}},{t:this.instance_7}]},1).to({state:[{t:this.instance_2},{t:this.instance_10},{t:this.clsDahlia2},{t:this.text_6,p:{text:"דליה- הרחבה",color:"#FFFFFF",lineWidth:207}},{t:this.text_5,p:{color:"#BC4788"}},{t:this.text_4,p:{color:"#BC4788"}},{t:this.text_3,p:{color:"#BC4788"}},{t:this.text_2,p:{text:".משפחת המורכבים הכוללת 30 מינים וכ20,000 זנים שונים"}},{t:this.text_1,p:{text:".מתחיל כ5-10 ימים בלבד לאחר הזריעה"}},{t:this.text,p:{text:"יש לבחור אזור מואר ומוגן מפני רוח. יש להניח את זרעי הדליה באדמה לחה- חשוב שהמים יוכלו להתנקז בה היטב מומלץ להוסיף דשן מסביב לזרעים ולשמור על מרווח של 20-30 ס\"מ בין פרח לפרח. לאחר שהפרחים מתחילים לפרוח, יש לדשן את האדמה בדשן נוזלי עם כמות נמוכה של חנקן כל 3-4 שבועות. ",lineWidth:897}},{t:this.instance_9}]},1).to({state:[{t:this.instance_2},{t:this.instance_12},{t:this.clsJasmin2},{t:this.text_6,p:{text:"יסמין- הרחבה",color:"#F8FAFA",lineWidth:207}},{t:this.text_5,p:{color:"#667E78"}},{t:this.text_4,p:{color:"#667E78"}},{t:this.text_3,p:{color:"#667E78"}},{t:this.text_2,p:{text:".משפחת הזיתיים המונה כ200 מינים"}},{t:this.text_1,p:{text:".מתחיל לאחר 30-60 ימים מהזריעה"}},{t:this.text,p:{text:"האפשרות הראשונה היא גידול זרעים- יש לכסות באדמה עם הרבה דשן ולהניח על אדן החלון או באזור מואר חלקית בגינה. האפשרות השנייה והמומלצת יותר היא להשתמש בענף של יסמין בוגר באורך של כ-15 ס\"מ- יש לשתול אותן .באדנית בתוך הבית ובתחילת הקיץ, כאשר הפרחים יחלו לפרוח, יש להעביר אותם למרפסת או לגינה",lineWidth:897}},{t:this.instance_11}]},1).to({state:[{t:this.instance_2},{t:this.instance_14},{t:this.clslilach2},{t:this.text_6,p:{text:"לילך- הרחבה",color:"#FFFFFF",lineWidth:207}},{t:this.text_5,p:{color:"#A82E88"}},{t:this.text_4,p:{color:"#A82E88"}},{t:this.text_3,p:{color:"#A82E88"}},{t:this.text_2,p:{text:".משפחת הזיתיים הכוללת 20 מינים"}},{t:this.text_1,p:{text:".מתחיל לאחר 60-90 ימים מהזריעה"}},{t:this.text,p:{text:"את הלילך לא מומלץ לגדל מזרעים, יקח להם בין 3 ל4 שנים להתחיל לפרוח. מומלץ לקנות שיח קטן ולשתול אותו בעציץ או בגינה. חשוב לדשן בזבל אורגני את אזור שורשי הצמח כאשר שותלים אותו. מומלץ לשמור על מרחק של מטר בין .שיח לילך אחד לאחר, ולדשן את אדמתם רק בתחילת האביב. אין צורך לדשן בשאר השנה",lineWidth:897}},{t:this.instance_13}]},1).to({state:[{t:this.instance_2},{t:this.instance_16},{t:this.clsMallisa2},{t:this.text_6,p:{text:" מליסה- הרחבה",color:"#FFFFFF",lineWidth:207}},{t:this.text_5,p:{color:"#57AD2D"}},{t:this.text_4,p:{color:"#57AD2D"}},{t:this.text_3,p:{color:"#57AD2D"}},{t:this.text_2,p:{text:".משפחת השפתניים הכוללת 5 מינים"}},{t:this.text_1,p:{text:".מתחיל לאחר 2-5 שבועות מהזריעה"}},{t:this.text,p:{text:"לצמח זרעים קטנים הקלים לגידול. המרחק המומלץ בין הזרעים בעת שתילה-40 ס\"מ, בעומק 0.3 ס\"מ במקום מוצל .ולח",lineWidth:897}},{t:this.instance_15}]},1).to({state:[{t:this.instance_2},{t:this.instance_18},{t:this.clsGeranium2},{t:this.text_6,p:{text:"גרניום- הרחבה",color:"#FFFFFF",lineWidth:207}},{t:this.text_5,p:{color:"#F25ECA"}},{t:this.text_4,p:{color:"#F25ECA"}},{t:this.text_3,p:{color:"#F25ECA"}},{t:this.text_2,p:{text:".משפחת הגרניים הכוללת כ850 מינים שונים"}},{t:this.text_1,p:{text:".מתחיל בין שבוע לשבועיים אחרי הזריעה"}},{t:this.text,p:{text:"ניתן לשתול באדנית קטנות או אדניות עמוקות יותר. אפשר גם בין ערוגות הגינה ומסלעות. מומלץ לשתול במרווחים של 30 ס\"מ זה מזה. ניקיון גבעולים ועלים יבשים יעודד התחדשות ומשך פריחה ארוך. דישון אחת לשבועיים ישפר ויעצים את .יופיו וחשיפה מרובה לשמש תעודד את צמיחת הפרחים. הפרח דורש גיזום מגובהו מפעם לפעם ",lineWidth:888}},{t:this.instance_17}]},1).to({state:[{t:this.instance_2},{t:this.instance_20},{t:this.clsLavender2},{t:this.text_6,p:{text:"לבנדר- הרחבה",color:"#FFFFFF",lineWidth:207}},{t:this.text_5,p:{color:"#69539C"}},{t:this.text_4,p:{color:"#69539C"}},{t:this.text_3,p:{color:"#69539C"}},{t:this.text_2,p:{text:".משפחת הגרניים הכוללת כ850 מינים שונים"}},{t:this.text_1,p:{text:".מתחיל בין שבוע לשבועיים אחרי הזריעה"}},{t:this.text,p:{text:": יש לשתול במצע אדמה אוורירי ומנוקז. חשוב לשמור על מצע האדמה לח עד יבש ולא רטוב. דישון אחת לשבועיים .יגביר את קצב הצמיחה ויעצים את יופיו של הצמח",lineWidth:897}},{t:this.instance_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.5,718);


(lib.geranium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// geranium
	this.instance = new lib.geraniumMain();
	this.instance.setTransform(65.4,38.6,1,1,0,0,0,65.4,38.6);

	this.instance_1 = new lib.geraniumGray();
	this.instance_1.setTransform(65.4,38.6,1,1,0,0,0,65.4,38.6);

	this.instance_2 = new lib.geraniumHL();
	this.instance_2.setTransform(63.5,36.7,1,1,0,0,0,65.4,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AqpH4IAAv1IVTAFIAAP2g");
	this.shape.setTransform(68.225,26.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.9,-24.8,138.4,103.89999999999999);


(lib.dahlia = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// dahlia
	this.instance = new lib.dahliaMain();
	this.instance.setTransform(53.8,63.6,1,1,0,0,0,53.8,63.6);

	this.instance_1 = new lib.dahliaGray();
	this.instance_1.setTransform(53.8,63.6,1,1,0,0,0,53.8,63.6);

	this.instance_2 = new lib.dahliaHL();
	this.instance_2.setTransform(53.8,63.6,1,1,0,0,0,53.8,63.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AonKvIAA1lIRPAHIAAVmg");
	this.shape.setTransform(54.375,67.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.8,111.1,139);


(lib.carnation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// carnation
	this.instance = new lib.carnationMain();
	this.instance.setTransform(53.8,65.7,1,1,0,0,0,53.8,65.7);

	this.instance_1 = new lib.carnationGray();
	this.instance_1.setTransform(53.8,65.7,1,1,0,0,0,53.8,65.7);

	this.instance_2 = new lib.carnationHL();
	this.instance_2.setTransform(51.8,63.2,1,1,0,0,0,53.8,65.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AocKzIAA1lIQ5AAIAAVlg");
	this.shape.setTransform(53.25,67.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-2.4,111.5,138.9);


(lib.aureum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		var self=this;
		self.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// aureum
	this.instance = new lib.aureumMain();
	this.instance.setTransform(67.8,68,1,1,0,0,0,67.8,68);

	this.instance_1 = new lib.aureumGray();
	this.instance_1.setTransform(67.8,68,1,1,0,0,0,67.8,68);

	this.instance_2 = new lib.aureumHL();
	this.instance_2.setTransform(67.8,68,1,1,0,0,0,67.8,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(207,243,163,0.008)").s().p("AqpKvIAA1lIVTAHIAAVmg");
	this.shape.setTransform(67.375,67.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.7,-2.2,140.5,140);


(lib.bgFlower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group();
	this.instance.setTransform(305.35,251.05,1,1,0,0,0,305.3,251);
	this.instance.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,610.5,502);


(lib.annual = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// annual
	this.instance = new lib.annualMain("synched",0);
	this.instance.setTransform(61.8,12.5,1,1,0,0,0,61.8,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.annual, new cjs.Rectangle(0,0,123.5,25), null);


(lib.cards = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.moreIris = new lib.moreInfo();
	this.moreIris.name = "moreIris";
	this.moreIris.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreIris, 0, 1, 1);

	this.text = new cjs.Text(".נבולים השקו מעט יותר ", "18px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 965;
	this.text.parent = this;
	this.text.setTransform(1206.95,588.8);

	this.text_1 = new cjs.Text("מומלץ להשקות אחת לשבוע בשעות הבוקר, ב-2-3 ס\"מ של מים. אם העלים נראים", "18px 'Varela Round'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 989;
	this.text_1.parent = this;
	this.text_1.setTransform(1053.8,551.05);

	this.text_2 = new cjs.Text(".האירוס הוא פרח רב שנתי, עמיד לקור, יפה במיוחד ונוח לגידול ביתי", "18px 'Varela Round'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 687;
	this.text_2.parent = this;
	this.text_2.setTransform(1206.95,165);

	this.text_3 = new cjs.Text(".מתרומם לגובה של 20-40 ס\"מ, בראשו פרח בודד וקוטרו כ8 ס\"מ", "18px 'Varela Round'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 862;
	this.text_3.parent = this;
	this.text_3.setTransform(1148.85,438);

	this.text_4 = new cjs.Text(".חשיפה חלקית לשמש, רצוי שישהה בה כחצי יום", "18px 'Varela Round'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 26;
	this.text_4.lineWidth = 803;
	this.text_4.parent = this;
	this.text_4.setTransform(1088.85,495.05);

	this.text_5 = new cjs.Text(".פורח בחורף בפברואר", "18px 'Varela Round'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 26;
	this.text_5.lineWidth = 789;
	this.text_5.parent = this;
	this.text_5.setTransform(1075.85,382);

	this.text_6 = new cjs.Text(".בין הסתיו לתחילת האביב", "18px 'Varela Round'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 26;
	this.text_6.lineWidth = 794;
	this.text_6.parent = this;
	this.text_6.setTransform(1080.85,324.05);

	this.text_7 = new cjs.Text(".מתאים לגינה. ניתן לגדלו גם באדנית ", "18px 'Varela Round'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 26;
	this.text_7.lineWidth = 766;
	this.text_7.parent = this;
	this.text_7.setTransform(1052.8,270);

	this.text_8 = new cjs.Text(".מגוון רחב של צבעים מלבן ועד ארגמן מעורב בשחור", "18px 'Varela Round'");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 26;
	this.text_8.lineWidth = 866;
	this.text_8.parent = this;
	this.text_8.setTransform(1152.85,214);

	this.text_9 = new cjs.Text(":כיצד להשקות", "24px 'Varela Round'", "#642955");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 33;
	this.text_9.lineWidth = 149;
	this.text_9.parent = this;
	this.text_9.setTransform(1206.95,548.1);

	this.text_10 = new cjs.Text(":כמה שמש", "24px 'Varela Round'", "#642955");
	this.text_10.textAlign = "right";
	this.text_10.lineHeight = 33;
	this.text_10.lineWidth = 114;
	this.text_10.parent = this;
	this.text_10.setTransform(1206.95,491.65);

	this.text_11 = new cjs.Text(":גובה", "24px 'Varela Round'", "#642955");
	this.text_11.textAlign = "right";
	this.text_11.lineHeight = 33;
	this.text_11.lineWidth = 54;
	this.text_11.parent = this;
	this.text_11.setTransform(1206.95,435.2);

	this.text_12 = new cjs.Text(":עונת פריחה", "24px 'Varela Round'", "#642955");
	this.text_12.textAlign = "right";
	this.text_12.lineHeight = 33;
	this.text_12.lineWidth = 127;
	this.text_12.parent = this;
	this.text_12.setTransform(1206.95,378.75);

	this.text_13 = new cjs.Text(":מתי לשתול", "24px 'Varela Round'", "#642955");
	this.text_13.textAlign = "right";
	this.text_13.lineHeight = 33;
	this.text_13.lineWidth = 122;
	this.text_13.parent = this;
	this.text_13.setTransform(1206.95,320.35);

	this.text_14 = new cjs.Text(":היכן ניתן לגדל", "24px 'Varela Round'", "#642955");
	this.text_14.textAlign = "right";
	this.text_14.lineHeight = 33;
	this.text_14.lineWidth = 149;
	this.text_14.parent = this;
	this.text_14.setTransform(1206.95,266);

	this.text_15 = new cjs.Text(":צבע", "24px 'Varela Round'", "#642955");
	this.text_15.textAlign = "right";
	this.text_15.lineHeight = 33;
	this.text_15.lineWidth = 51;
	this.text_15.parent = this;
	this.text_15.setTransform(1206.95,209.55);

	this.moreHyacinth = new lib.moreInfo();
	this.moreHyacinth.name = "moreHyacinth";
	this.moreHyacinth.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreHyacinth, 0, 1, 1);

	this.moreCarnation = new lib.moreInfo();
	this.moreCarnation.name = "moreCarnation";
	this.moreCarnation.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreCarnation, 0, 1, 1);

	this.morePansyAT = new lib.moreInfo();
	this.morePansyAT.name = "morePansyAT";
	this.morePansyAT.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.morePansyAT, 0, 1, 1);

	this.moreDahlia = new lib.moreInfo();
	this.moreDahlia.name = "moreDahlia";
	this.moreDahlia.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreDahlia, 0, 1, 1);

	this.moreJasmine = new lib.moreInfo();
	this.moreJasmine.name = "moreJasmine";
	this.moreJasmine.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreJasmine, 0, 1, 1);

	this.moreLilach = new lib.moreInfo();
	this.moreLilach.name = "moreLilach";
	this.moreLilach.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreLilach, 0, 1, 1);

	this.moreMallisa = new lib.moreInfo();
	this.moreMallisa.name = "moreMallisa";
	this.moreMallisa.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreMallisa, 0, 1, 1);

	this.moreGeranium = new lib.moreInfo();
	this.moreGeranium.name = "moreGeranium";
	this.moreGeranium.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreGeranium, 0, 1, 1);

	this.moreLavender = new lib.moreInfo();
	this.moreLavender.name = "moreLavender";
	this.moreLavender.setTransform(162.9,623.6,1,1,0,0,0,71.1,17.7);
	new cjs.ButtonHelper(this.moreLavender, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_15,p:{color:"#642955"}},{t:this.text_14,p:{color:"#642955"}},{t:this.text_13,p:{color:"#642955"}},{t:this.text_12,p:{color:"#642955"}},{t:this.text_11,p:{color:"#642955"}},{t:this.text_10,p:{color:"#642955"}},{t:this.text_9,p:{color:"#642955"}},{t:this.text_8,p:{text:".מגוון רחב של צבעים מלבן ועד ארגמן מעורב בשחור"}},{t:this.text_7,p:{text:".מתאים לגינה. ניתן לגדלו גם באדנית "}},{t:this.text_6,p:{text:".בין הסתיו לתחילת האביב"}},{t:this.text_5,p:{text:".פורח בחורף בפברואר"}},{t:this.text_4,p:{text:".חשיפה חלקית לשמש, רצוי שישהה בה כחצי יום"}},{t:this.text_3,p:{text:".מתרומם לגובה של 20-40 ס\"מ, בראשו פרח בודד וקוטרו כ8 ס\"מ"}},{t:this.text_2,p:{text:".האירוס הוא פרח רב שנתי, עמיד לקור, יפה במיוחד ונוח לגידול ביתי",lineWidth:687,x:1206.95,y:165}},{t:this.text_1,p:{text:"מומלץ להשקות אחת לשבוע בשעות הבוקר, ב-2-3 ס\"מ של מים. אם העלים נראים",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:".נבולים השקו מעט יותר ",font:"18px 'Varela Round'",lineHeight:25.6,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreIris}]}).to({state:[{t:this.text_15,p:{color:"#005500"}},{t:this.text_14,p:{color:"#005500"}},{t:this.text_13,p:{color:"#005500"}},{t:this.text_12,p:{color:"#005500"}},{t:this.text_11,p:{color:"#005500"}},{t:this.text_10,p:{color:"#005500"}},{t:this.text_9,p:{color:"#005500"}},{t:this.text_8,p:{text:".ורוד, כחול, לבן, צהוב ואדום"}},{t:this.text_7,p:{text:".באדנית או בגינה"}},{t:this.text_6,p:{text:".אוקטובר עד דצמבר"}},{t:this.text_5,p:{text:".חודשי החורף והאביב, מרס-אפריל"}},{t:this.text_4,p:{text:".ללא חשיפה ישירה לשמש, יש להניח בצל"}},{t:this.text_3,p:{text:"כ-20 ס״מ"}},{t:this.text_2,p:{text:"פרח מרהיב בעל ניחוח עז ונפלא. הפרחים צפופים בצורת כוכבים הממוקמים בראש הגבעול",lineWidth:687,x:1206.95,y:165}},{t:this.text_1,p:{text:".יש להשקות את הבצלים מיד לאחר השתילה ובקביעות, כך שהקרקע תישמר לחה עד תחילת הגשמים",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:".חיפוי הקרקע יאריך את משך הפריחה ויקל על הטיפול בצמח",font:"18px 'Varela Round'",lineHeight:25.6,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreHyacinth}]},1).to({state:[{t:this.text_15,p:{color:"#A31E29"}},{t:this.text_14,p:{color:"#A31E29"}},{t:this.text_13,p:{color:"#A31E29"}},{t:this.text_12,p:{color:"#A31E29"}},{t:this.text_11,p:{color:"#A31E29"}},{t:this.text_10,p:{color:"#A31E29"}},{t:this.text_9,p:{color:"#A31E29"}},{t:this.text_8,p:{text:".סגול או ורוד"}},{t:this.text_7,p:{text:".מומלץ באדנית או במיכל גדול"}},{t:this.text_6,p:{text:".בחורף"}},{t:this.text_5,p:{text:".קיץ ואביב"}},{t:this.text_4,p:{text:".שמש ישירה או הצללה חלקית"}},{t:this.text_3,p:{text:".20-60 ס\"מ"}},{t:this.text_2,p:{text:".הציפורן הינו צמח נוי ארומטי בעל פרחים גדולים המפיצים את ריחם הנעים למרחקים",lineWidth:687,x:1206.95,y:165}},{t:this.text_1,p:{text:".זקוק להשקיה מרובה, כ4 פעמים בשבוע",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:"",font:"18px 'VarelaRound-Regular'",lineHeight:25.6,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreCarnation}]},1).to({state:[{t:this.text_15,p:{color:"#614694"}},{t:this.text_14,p:{color:"#614694"}},{t:this.text_13,p:{color:"#614694"}},{t:this.text_12,p:{color:"#614694"}},{t:this.text_11,p:{color:"#614694"}},{t:this.text_10,p:{color:"#614694"}},{t:this.text_9,p:{color:"#614694"}},{t:this.text_8,p:{text:".לבן, צהוב, כתום, אדום, בורדו, ורוד, סגול בהיר לילך, סגול כהה, כחול ועוד"}},{t:this.text_7,p:{text:".בגינה, באדניות ובמכלי עציץ קטנים"}},{t:this.text_6,p:{text:".בסתיו"}},{t:this.text_5,p:{text:".בחורף"}},{t:this.text_4,p:{text:".ישירה או הצללה חלקית"}},{t:this.text_3,p:{text:".15-20 ס\"מ"}},{t:this.text_2,p:{text:".פרחי נוי המופעים בשלל צבעים וגדלים. צמח קל לגידול ולכן ניתן למצוא אותו לצידי שבילים ברחוב, בגינות פרטיות, ובאדניות",lineWidth:949,x:1206.95,y:165}},{t:this.text_1,p:{text:".השקיה בינונית עד נמוכה, ההשקיה היעילה ביותר תתבצע באמצעות טפופות",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:"",font:"24px 'VarelaRound-Regular'",lineHeight:33.45,x:1206.95,y:588.8,lineWidth:965}},{t:this.morePansyAT}]},1).to({state:[{t:this.text_15,p:{color:"#BC4788"}},{t:this.text_14,p:{color:"#BC4788"}},{t:this.text_13,p:{color:"#BC4788"}},{t:this.text_12,p:{color:"#BC4788"}},{t:this.text_11,p:{color:"#BC4788"}},{t:this.text_10,p:{color:"#BC4788"}},{t:this.text_9,p:{color:"#BC4788"}},{t:this.text_8,p:{text:".ורוד, לבן, אדום, סגול ועוד"}},{t:this.text_7,p:{text:".מומלץ בגינה או בעציצם בינוניים בבית"}},{t:this.text_6,p:{text:".באביב ובתחילת הקיץ"}},{t:this.text_5,p:{text:".אביב וסתיו"}},{t:this.text_4,p:{text:".חשיפה מלאה"}},{t:this.text_3,p:{text:".נישא לגובה של כ-40 ס\"מ קיימים זנים שקוטר הפרח שלהם מגיע ל-20 ס\"מ"}},{t:this.text_2,p:{text:".דליה היא סוג של פרח רב-שנתי שמקורו במקסיקו, והיא משמשת גם כפרח הלאומי של המדינה. חלק מזני הדליה הם אכילים",lineWidth:949,x:1206.95,y:165}},{t:this.text_1,p:{text:"הדליה זקוקה לאדמה לחה, אך היא עלולה להירקב באדמה הספוגה במים, לכן מומלץ להשקות אותה באמצעות טפטפות ולא ",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:"ולא בהשקיה ידנית. על ההשקיה להמשך כחצי שעה בכל פעם, 2-3 פעמים בשבוע",font:"18px 'Varela Round'",lineHeight:25.6,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreDahlia}]},1).to({state:[{t:this.text_15,p:{color:"#000000"}},{t:this.text_14,p:{color:"#000000"}},{t:this.text_13,p:{color:"#000000"}},{t:this.text_12,p:{color:"#000000"}},{t:this.text_11,p:{color:"#000000"}},{t:this.text_10,p:{color:"#000000"}},{t:this.text_9,p:{color:"#000000"}},{t:this.text_8,p:{text:".לבן וצהוב"}},{t:this.text_7,p:{text:".מתאים לגידול בבית בעציץ או לשתילה בגינה"}},{t:this.text_6,p:{text:".בין סוף הסתיו לתחילת האביב"}},{t:this.text_5,p:{text:".רוב השנה, בעיקר בקיץ"}},{t:this.text_4,p:{text:".שמש חלקית"}},{t:this.text_3,p:{text:".10 מ', צמח מטפס"}},{t:this.text_2,p:{text:".פרח בעל ניחוח נפלא אשר ידוע ביתרונותיו הבריאותיים הרבים. היסמין מרגיע את העצבים, מגביר את החשק המיני ואף עוזר להילחם בסרטן ",lineWidth:1052,x:1206.95,y:165}},{t:this.text_1,p:{text:"חשוב שהאדמה שלא תהיה ספוגה במים. רצוי להשקות אותו 2-3 פעמים בשבוע במהלך הקיץ. בחורף מומלץ להשקות לפי הצורך, ",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:"לגעת באדמה בסביבת הפרח ולהשקות רק כשהיא יבשה.",font:"18px 'Varela Round'",lineHeight:25.6,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreJasmine}]},1).to({state:[{t:this.text_15,p:{color:"#BE4B6C"}},{t:this.text_14,p:{color:"#BE4B6C"}},{t:this.text_13,p:{color:"#BE4B6C"}},{t:this.text_12,p:{color:"#BE4B6C"}},{t:this.text_11,p:{color:"#BE4B6C"}},{t:this.text_10,p:{color:"#BE4B6C"}},{t:this.text_9,p:{color:"#BE4B6C"}},{t:this.text_8,p:{text:". לבן, סגול בהיר וסגול כהה"}},{t:this.text_7,p:{text:".בעציץ או בגינה"}},{t:this.text_6,p:{text:".קיץ ואביב"}},{t:this.text_5,p:{text:".רוב השנה, בעיקר בקיץ"}},{t:this.text_4,p:{text:".שמש חלקית עד מלאה בהתאם למין הפרח"}},{t:this.text_3,p:{text:".ודלם של צמחים אלו נע בין שיחים גדולים לעצים קטנים (2-10 מטר)"}},{t:this.text_2,p:{text:".הלילך הוא צמח בעל פרחים בצבעי סגול או לבן שמזכירים בצורתם לב. פרח ושיח הלילך יכול לפרוח ולחיות שנים רבות",lineWidth:949,x:1206.95,y:165}},{t:this.text_1,p:{text:"זקוק לאדמה לחה, אך לא ספוגה במים. מומלץ להשקות ביסודיות אחת לשבוע. במקרה שהאדמה נראית יבשה או ספוגה במים, יש ",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:"לשנות את תדירות ההשקיה בהתאם.",font:"18px 'Varela Round'",lineHeight:25.6,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreLilach}]},1).to({state:[{t:this.text_15,p:{color:"#53AC2C"}},{t:this.text_14,p:{color:"#53AC2C"}},{t:this.text_13,p:{color:"#53AC2C"}},{t:this.text_12,p:{color:"#53AC2C"}},{t:this.text_11,p:{color:"#53AC2C"}},{t:this.text_10,p:{color:"#53AC2C"}},{t:this.text_9,p:{color:"#53AC2C"}},{t:this.text_8,p:{text:".לבן ולילך וירוק"}},{t:this.text_7,p:{text:".    מתאים לגידול ביתי בעציץ וגידול בגינה"}},{t:this.text_6,p:{text:".בעונות האביב והסתיו"}},{t:this.text_5,p:{text:".בעונות האביב והקיץ"}},{t:this.text_4,p:{text:" .שמש חלקית"}},{t:this.text_3,p:{text:".צמח זקוף ומסתעף, גובהו 70 ס\"מ ויותר"}},{t:this.text_2,p:{text:".צמח המתאפיין בריחו הלימוני ומשמש כצמח מרפא. המליסה מסייעת בטיפול במגוון מצבים רפואיים כגון איזון פעילות של בלוטת התריס וטיפול בדיכאון",lineWidth:1147,x:1206.95,y:165}},{t:this.text_1,p:{text:".יש להשקות בצורה סדירה באופן יום יומי. רצוי לשמור על מצע אדמה לח ולהימנע מעודפי השקיה",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:"",font:"24px 'VarelaRound-Regular'",lineHeight:33.45,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreMallisa}]},1).to({state:[{t:this.text_15,p:{color:"#ED53B2"}},{t:this.text_14,p:{color:"#ED53B2"}},{t:this.text_13,p:{color:"#ED53B2"}},{t:this.text_12,p:{color:"#ED53B2"}},{t:this.text_11,p:{color:"#ED53B2"}},{t:this.text_10,p:{color:"#ED53B2"}},{t:this.text_9,p:{color:"#ED53B2"}},{t:this.text_8,p:{text:".אדום, לבן, סגול, בורדו וגוונים של ורוד"}},{t:this.text_7,p:{text:".ניתן לשתול בערוגה או במכל בגינה"}},{t:this.text_6,p:{text:".בעונת הסתיו"}},{t:this.text_5,p:{text:".פורח כמעט בכל עונות השנה"}},{t:this.text_4,p:{text:".ניתן בשמש מלאה וגם חלקית"}},{t:this.text_3,p:{text:".חלק מהזנים נישאים לגובה של כ-30 ס\"מ או יותר, תלוי בזן ותנאי הגידול"}},{t:this.text_2,p:{text:".שיח הגרניום הריחני ויפה מושך אליו דבורים ומאביקים נוספים. סגולותיו ידועות מהרפואה העממית והוא משמש לטיפול בדלקות ופצעים",lineWidth:1028,x:1206.95,y:165}},{t:this.text_1,p:{text:".השקיה בינונית וסדירה. חשוב לא להפריז בעודף מים אשר גורם לריקבון. מומלץ אפילו ליבש את הצמח בין השקיה להשקיה",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:"",font:"24px 'VarelaRound-Regular'",lineHeight:33.45,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreGeranium}]},1).to({state:[{t:this.text_15,p:{color:"#69539C"}},{t:this.text_14,p:{color:"#69539C"}},{t:this.text_13,p:{color:"#69539C"}},{t:this.text_12,p:{color:"#69539C"}},{t:this.text_11,p:{color:"#69539C"}},{t:this.text_10,p:{color:"#69539C"}},{t:this.text_9,p:{color:"#69539C"}},{t:this.text_8,p:{text:".גווני ורוד סגול"}},{t:this.text_7,p:{text:".באדניות המונחות במקום מואר בתוך הבית או בגינה"}},{t:this.text_6,p:{text:".אביב או סתיו"}},{t:this.text_5,p:{text:".בקיץ רק פעם בשנה, בין יוני לספטמבר"}},{t:this.text_4,p:{text:".נדרשת שמש ישירה"}},{t:this.text_3,p:{text:".שיח המגיע לגובה של 20-80 ס\"מ, גדל גם לרוחב"}},{t:this.text_2,p:{text:".לבנדר הוא שיח ריחני, בעל עלים משוננים ופרחים סגולים הגדלים בתפרחות ומשמשים להרגעה, חליטות תה ולהרחקת עש ושאר מזיקים",lineWidth:1050,x:1206.95,y:165}},{t:this.text_1,p:{text:".נדרשת השקיה מועטה",x:1053.8,y:551.05,lineWidth:989}},{t:this.text,p:{text:"",font:"24px 'VarelaRound-Regular'",lineHeight:33.45,x:1206.95,y:588.8,lineWidth:965}},{t:this.moreLavender}]},1).to({state:[{t:this.text_2,p:{text:".איבון דקר, חן בלום ולינדה בונים",lineWidth:264,x:1024.8,y:283.45}},{t:this.text_1,p:{text:".ייצוג אנטראקטיבי, המאפשר לחקור וללמוד על 12 פרחים שניתן לגדל בבית, במרפסת או בגינה",x:1178.95,y:176.45,lineWidth:723}},{t:this.text,p:{text:"פרויקט גמר טל\"מ שנה א' - סמסטר קיץ תש\"פ \n.במסגרת קורסי מבוא לתכנות אינטרקציה ואנימציה וארגון וייצוג ידע",font:"18px 'Varela Round'",lineHeight:25.6,x:1178.95,y:538.55,lineWidth:510}}]},1).wait(1));

	// HitHolonLogo_ai
	this.irisCard1 = new lib.irisMain();
	this.irisCard1.name = "irisCard1";
	this.irisCard1.setTransform(236.9,512.35,1.3812,1.3812,0,0,0,53.8,68.3);
	this.irisCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsIris1 = new lib.closeBtn();
	this.clsIris1.name = "clsIris1";
	this.clsIris1.setTransform(101.35,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsIris1, 0, 1, 1);

	this.text_16 = new cjs.Text("אירוס", "normal 400 28px 'Varela Round'", "#FFFFFF");
	this.text_16.textAlign = "right";
	this.text_16.lineHeight = 39;
	this.text_16.lineWidth = 88;
	this.text_16.parent = this;
	this.text_16.setTransform(1178.95,80.8);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text_16);
	}

	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_28();
	this.instance_1.setTransform(72.2,152.85,0.5,0.5);

	this.hyacinthCard1 = new lib.hyacinthMain();
	this.hyacinthCard1.name = "hyacinthCard1";
	this.hyacinthCard1.setTransform(166.5,418.15,1.3812,1.4212,0,0,0,54.1,66.4);
	this.hyacinthCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clshyacinth1 = new lib.closeBtn();
	this.clshyacinth1.name = "clshyacinth1";
	this.clshyacinth1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clshyacinth1, 0, 1, 1);

	this.instance_2 = new lib.CachedBmp_11();
	this.instance_2.setTransform(-0.3,0,0.5,0.5);

	this.carnationCard1 = new lib.carnationMain();
	this.carnationCard1.name = "carnationCard1";
	this.carnationCard1.setTransform(166.05,418.05,1.3799,1.3799,0,0,0,53.8,65.7);
	this.carnationCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsCarnation1 = new lib.closeBtn();
	this.clsCarnation1.name = "clsCarnation1";
	this.clsCarnation1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsCarnation1, 0, 1, 1);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.pansyATCard1 = new lib.pansyMain();
	this.pansyATCard1.name = "pansyATCard1";
	this.pansyATCard1.setTransform(166.1,418.05,1.3799,1.3799,0,0,0,54.8,46.5);
	this.pansyATCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsPansyAT1 = new lib.closeBtn();
	this.clsPansyAT1.name = "clsPansyAT1";
	this.clsPansyAT1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsPansyAT1, 0, 1, 1);

	this.instance_4 = new lib.CachedBmp_15();
	this.instance_4.setTransform(0,0,0.5,0.5);

	this.dahliaCard1 = new lib.dahliaMain();
	this.dahliaCard1.name = "dahliaCard1";
	this.dahliaCard1.setTransform(166.1,417.9,1.3812,1.4798,0,0,0,53.8,63.6);
	this.dahliaCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsDahlia1 = new lib.closeBtn();
	this.clsDahlia1.name = "clsDahlia1";
	this.clsDahlia1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsDahlia1, 0, 1, 1);

	this.instance_5 = new lib.CachedBmp_17();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.jasminCard1 = new lib.jasmineMain();
	this.jasminCard1.name = "jasminCard1";
	this.jasminCard1.setTransform(166.05,417.7,1.38,1.3799,0,0,0,54.8,53.4);
	this.jasminCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsJasmin1 = new lib.closeBtn();
	this.clsJasmin1.name = "clsJasmin1";
	this.clsJasmin1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsJasmin1, 0, 1, 1);

	this.instance_6 = new lib.CachedBmp_19();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.lilachCard1 = new lib.lilachMain();
	this.lilachCard1.name = "lilachCard1";
	this.lilachCard1.setTransform(166,418,1.3591,1.4927,0,0,0,54.6,63.1);
	this.lilachCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsLilach1 = new lib.closeBtn();
	this.clsLilach1.name = "clsLilach1";
	this.clsLilach1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsLilach1, 0, 1, 1);

	this.instance_7 = new lib.CachedBmp_21();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.malicaCard1 = new lib.mallisaMain();
	this.malicaCard1.name = "malicaCard1";
	this.malicaCard1.setTransform(166.1,417.95,1.3812,1.3846,0,0,0,53.8,68);
	this.malicaCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsMallisa1 = new lib.closeBtn();
	this.clsMallisa1.name = "clsMallisa1";
	this.clsMallisa1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsMallisa1, 0, 1, 1);

	this.instance_8 = new lib.CachedBmp_23();
	this.instance_8.setTransform(0,0,0.5,0.5);

	this.geraniumCard1 = new lib.geraniumMain();
	this.geraniumCard1.name = "geraniumCard1";
	this.geraniumCard1.setTransform(166.1,418,1.38,1.3799,0,0,0,53.8,68.1);
	this.geraniumCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsGeranium1 = new lib.closeBtn();
	this.clsGeranium1.name = "clsGeranium1";
	this.clsGeranium1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsGeranium1, 0, 1, 1);

	this.instance_9 = new lib.CachedBmp_25();
	this.instance_9.setTransform(0,0,0.5,0.5);

	this.lavenderCard1 = new lib.lavenderMain();
	this.lavenderCard1.name = "lavenderCard1";
	this.lavenderCard1.setTransform(166.1,418,1.3812,1.3836,0,0,0,53.8,68.1);
	this.lavenderCard1.shadow = new cjs.Shadow("rgba(153,153,153,1)",1,1,10);

	this.clsLavender1 = new lib.closeBtn();
	this.clsLavender1.name = "clsLavender1";
	this.clsLavender1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsLavender1, 0, 1, 1);

	this.instance_10 = new lib.CachedBmp_27();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.instance_11 = new lib.bgFlower("synched",0);
	this.instance_11.setTransform(383.05,404.45,1,1,0,0,0,305.3,251.1);
	this.instance_11.alpha = 0.2383;

	this.instance_12 = new lib.CachedBmp_31();
	this.instance_12.setTransform(85.2,552.55,0.5,0.5);

	this.text_17 = new cjs.Text(":צוות הפרויקט ", "24px 'Varela Round'", "#005500");
	this.text_17.textAlign = "right";
	this.text_17.lineHeight = 33;
	this.text_17.lineWidth = 149;
	this.text_17.parent = this;
	this.text_17.setTransform(1178.95,277.45);

	this.text_18 = new cjs.Text(".נגה רזניק וד\"ר מיטל אמזלג", "18px 'Varela Round'");
	this.text_18.textAlign = "right";
	this.text_18.lineHeight = 26;
	this.text_18.lineWidth = 217;
	this.text_18.parent = this;
	this.text_18.setTransform(1103,396.2);

	this.text_19 = new cjs.Text(":מנחות", "24px 'Varela Round'", "#005500");
	this.text_19.textAlign = "right";
	this.text_19.lineHeight = 33;
	this.text_19.lineWidth = 72;
	this.text_19.parent = this;
	this.text_19.setTransform(1178.95,390.2);

	this.text_20 = new cjs.Text("אודות", "28px 'Varela Round'", "#FFFFFF");
	this.text_20.textAlign = "right";
	this.text_20.lineHeight = 39;
	this.text_20.lineWidth = 80;
	this.text_20.parent = this;
	this.text_20.setTransform(1178.95,80.8);

	this.clsAbout1 = new lib.closeBtn();
	this.clsAbout1.name = "clsAbout1";
	this.clsAbout1.setTransform(101.3,104,1,1,0,0,0,16.1,19.1);
	new cjs.ButtonHelper(this.clsAbout1, 0, 1, 1);

	this.instance_13 = new lib.CachedBmp_30();
	this.instance_13.setTransform(0,0,0.5,0.5);

	this.text_21 = new cjs.Text("לבנדר- אזוביון", "28px 'Varela Round'", "#FFFFFF");
	this.text_21.textAlign = "right";
	this.text_21.lineHeight = 39;
	this.text_21.lineWidth = 229;
	this.text_21.parent = this;
	this.text_21.setTransform(1178.95,80.8);

	this.instance_14 = new lib.CachedBmp_29();
	this.instance_14.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_16,p:{text:"אירוס",lineWidth:88,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.clsIris1},{t:this.irisCard1}]}).to({state:[{t:this.instance_1},{t:this.instance_2},{t:this.clshyacinth1},{t:this.text_16,p:{text:"יקינתון",lineWidth:88,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.hyacinthCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_3},{t:this.clsCarnation1},{t:this.text_16,p:{text:"ציפורן",lineWidth:88,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.carnationCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_4},{t:this.clsPansyAT1},{t:this.text_16,p:{text:"אמנון ותמר",lineWidth:229,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.pansyATCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_5},{t:this.clsDahlia1},{t:this.text_16,p:{text:"דליה",lineWidth:229,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.dahliaCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_6},{t:this.clsJasmin1},{t:this.text_16,p:{text:"יסמין",lineWidth:229,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.jasminCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_7},{t:this.clsLilach1},{t:this.text_16,p:{text:"לילך",lineWidth:229,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.lilachCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_8},{t:this.clsMallisa1},{t:this.text_16,p:{text:"מליסה",lineWidth:229,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.malicaCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_9},{t:this.clsGeranium1},{t:this.text_16,p:{text:"גרניום",lineWidth:229,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.geraniumCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_10},{t:this.clsLavender1},{t:this.text_16,p:{text:"לבנדר- אזוביון",lineWidth:229,x:1178.95,y:80.8,font:"normal 400 28px 'Varela Round'",color:"#FFFFFF",lineHeight:38.7}},{t:this.lavenderCard1}]},1).to({state:[{t:this.instance_1},{t:this.instance_14},{t:this.clsLavender1},{t:this.text_21},{t:this.lavenderCard1},{t:this.instance_13},{t:this.clsAbout1},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16,p:{text:":פותח במסגרת",lineWidth:175,x:1184,y:503.1,font:"normal 400 24px 'Varela Round'",color:"#005500",lineHeight:33.45}},{t:this.instance_12},{t:this.instance_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,1280.8,718);


// stage content:
(lib.HomeFlowers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		self.stop();
		self.mainCards.visible = false; //הסתרת כרטיסיות מידע מהבמה
		self.AddCards.visible = false; // הסתרת כרטיסיות הרחבה מהבמה
		self.QMarksText.visible = false; // הסתרת הסברי מסננים מהבמה 
		var Seasons = "clear";
		var Sun = "clear";
		// הענקת מאזנים למעבר עכבר  ויציאת עכבר לפרחים
		
		self.Iris.addEventListener("mouseover", hoverIris);
		self.PansyAT.addEventListener("mouseover", hoverPansyAT);
		self.Lavender.addEventListener("mouseover", hoverLavender);
		self.Rose.addEventListener("mouseover", hoverRose);
		self.Aureum.addEventListener("mouseover", hoverAureum);
		self.Carnation.addEventListener("mouseover", hoverCarnation);
		self.Dahlia.addEventListener("mouseover", hoverDahlia);
		self.Geranium.addEventListener("mouseover", hoverGeranium);
		self.Jasmine.addEventListener("mouseover", hoverJasmine);
		self.Lilach.addEventListener("mouseover", hoverLilach);
		self.Hyacinth.addEventListener("mouseover", hoverHyacinth);
		self.Mallisa.addEventListener("mouseover", hoverMallisa);
		
		self.Iris.addEventListener("mouseout", outIris);
		self.PansyAT.addEventListener("mouseout", outPansyAT);
		self.Lavender.addEventListener("mouseout", outLavender);
		self.Rose.addEventListener("mouseout", outRose);
		self.Aureum.addEventListener("mouseout", outAureum);
		self.Carnation.addEventListener("mouseout", outCarnation);
		self.Dahlia.addEventListener("mouseout", outDahlia);
		self.Geranium.addEventListener("mouseout", outGeranium);
		self.Jasmine.addEventListener("mouseout", outJasmine);
		self.Lilach.addEventListener("mouseout", outLilach);
		self.Hyacinth.addEventListener("mouseout", outHyacinth);
		self.Mallisa.addEventListener("mouseout", outMallisa);
		
		
		//פונקציית מעבר עכבר
		function hoverIris() {
			self.Iris.cursor = "pointer";
			self.Iris.gotoAndStop(2);
		}
		
		function hoverPansyAT() {
			self.PansyAT.cursor = "pointer";
			self.PansyAT.gotoAndStop(2);
		}
		
		function hoverLavender() {
			self.Lavender.cursor = "pointer";
			self.Lavender.gotoAndStop(2);
		}
		
		function hoverRose() {
			self.Rose.cursor = "not-allowed";
			self.Rose.gotoAndStop(2);
			
		}
		
		function hoverAureum() {
			self.Aureum.cursor = "not-allowed";
			self.Aureum.gotoAndStop(2);
		}
		
		function hoverCarnation() {
			self.Carnation.cursor = "pointer";
			self.Carnation.gotoAndStop(2);
		}
		
		function hoverDahlia() {
			self.Dahlia.cursor = "pointer";
			self.Dahlia.gotoAndStop(2);
		}
		
		function hoverGeranium() {
			self.Geranium.cursor = "pointer";
			self.Geranium.gotoAndStop(2);
		}
		
		function hoverJasmine() {
			self.Jasmine.cursor = "pointer";
			self.Jasmine.gotoAndStop(2);
		}
		
		function hoverLilach() {
			self.Lilach.cursor = "pointer";
			self.Lilach.gotoAndStop(2);
		}
		
		function hoverHyacinth() {
			self.Hyacinth.cursor = "pointer";
			self.Hyacinth.gotoAndStop(2);
		}
		
		function hoverMallisa() {
			self.Mallisa.cursor = "pointer";
			self.Mallisa.gotoAndStop(2);
		}
		
		
		// פונקציית יציאת עכבר
		function outIris() {
			self.Iris.gotoAndStop(0);
		}
		
		function outPansyAT() {
			self.PansyAT.gotoAndStop(0);
		}
		
		function outLavender() {
			self.Lavender.gotoAndStop(0);
		}
		
		function outRose() {
			self.Rose.gotoAndStop(0);
		}
		
		function outAureum() {
		
			self.Aureum.gotoAndStop(0);
		}
		
		function outCarnation() {
			self.Carnation.gotoAndStop(0);
		}
		
		function outDahlia() {
			self.Dahlia.gotoAndStop(0);
		}
		
		function outGeranium() {
			self.Geranium.gotoAndStop(0);
		}
		
		function outJasmine() {
			self.Jasmine.gotoAndStop(0);
		}
		
		function outLilach() {
			self.Lilach.gotoAndStop(0);
		}
		
		function outHyacinth() {
			self.Hyacinth.gotoAndStop(0);
		}
		
		function outMallisa() {
			self.Mallisa.gotoAndStop(0);
		}
		
		//הענקת מאזיני קליק לפרחים
		self.Iris.addEventListener("click", clickIris);
		self.PansyAT.addEventListener("click", clickPansyAT);
		self.Lavender.addEventListener("click", clickLavender);
		self.Carnation.addEventListener("click", clickCarnation);
		self.Dahlia.addEventListener("click", clickDahlia);
		self.Geranium.addEventListener("click", clickGeranium);
		self.Jasmine.addEventListener("click", clickJasmine);
		self.Lilach.addEventListener("click", clickLilach);
		self.Hyacinth.addEventListener("click", clickHyacinth);
		self.Mallisa.addEventListener("click", clickMallisa);
		
		//הענקת מאזין לכפתור אודות
		self.aboutBtn.addEventListener("click", clickaboutBtn);
		
		//מאזין לסגירת כרטיסיית אודות
		self.mainCards.clsAbout1.addEventListener("click", closebtn);
		
		//פתיחה של כרטיסיית אודות
		function clickaboutBtn() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(10);
		}
		
		
		// פונקציות קליק לפרחים- פותח כרטיסיה
		function clickIris() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(0);
		}
		
		function clickPansyAT() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(3);
		}
		
		function clickLavender() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(9);
		}
		
		function clickCarnation() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(2);
		}
		
		function clickDahlia() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(4);
		}
		
		function clickGeranium() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(8);
		}
		
		function clickJasmine() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(5);
		}
		
		function clickLilach() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(6);
		}
		
		function clickHyacinth() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(1);
		}
		
		function clickMallisa() {
			self.mainCards.visible = true;
			self.mainCards.gotoAndStop(7);
		}
		
		//מאזין לכפתורי מידע נוסף
		self.mainCards.moreIris.addEventListener("click", moreIris);
		self.mainCards.moreHyacinth.addEventListener("click", moreHyacinth);
		self.mainCards.morePansyAT.addEventListener("click", morePansyAT);
		self.mainCards.moreLavender.addEventListener("click", moreLavender);
		self.mainCards.moreCarnation.addEventListener("click", moreCarnation);
		self.mainCards.moreDahlia.addEventListener("click", moreDahlia);
		self.mainCards.moreGeranium.addEventListener("click", moreGeranium);
		self.mainCards.moreJasmine.addEventListener("click", moreJasmin);
		self.mainCards.moreLilach.addEventListener("click", moreLilach);
		self.mainCards.moreMallisa.addEventListener("click", moreMallisa);
		
		function moreIris() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(0);
		}
		function moreHyacinth() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(1);
		}
		function morePansyAT() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(3);
		}
		function moreLavender() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(9);
		}
		function moreCarnation() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(2);
		}
		function moreDahlia() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(4);
		}
		function moreGeranium() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(8);
		}
		function moreJasmin() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(5);
		}
		function moreLilach() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(6);
		}
		function moreMallisa() {
			self.AddCards.visible = true;
			self.AddCards.gotoAndStop(7);
		}
		
		
		//הענקת מאזין לכפתורי סגירת כרטיסיות
		self.mainCards.clsIris1.addEventListener("click", closebtn)
		self.mainCards.clsPansyAT1.addEventListener("click", closebtn)
		self.mainCards.clsLavender1.addEventListener("click", closebtn)
		self.mainCards.clsCarnation1.addEventListener("click", closebtn)
		self.mainCards.clsDahlia1.addEventListener("click", closebtn)
		self.mainCards.clsGeranium1.addEventListener("click", closebtn)
		self.mainCards.clsJasmin1.addEventListener("click", closebtn)
		self.mainCards.clsLilach1.addEventListener("click", closebtn)
		self.mainCards.clshyacinth1.addEventListener("click", closebtn)
		self.mainCards.clsMallisa1.addEventListener("click", closebtn)
		
		
		//פונקציית הסתרת כרטיסיות
		function closebtn() {
			self.mainCards.visible = false;
		}
		
		
		//הענקת מאזין לכפתורי סגירת כרטיסיה משנה
		self.AddCards.clsIris2.addEventListener("click", closebtn2)
		self.AddCards.clsPansyAT2.addEventListener("click", closebtn2)
		self.AddCards.clsLavender2.addEventListener("click", closebtn2)
		self.AddCards.clsCarnation2.addEventListener("click", closebtn2)
		self.AddCards.clsDahlia2.addEventListener("click", closebtn2)
		self.AddCards.clsGeranium2.addEventListener("click", closebtn2)
		self.AddCards.clsJasmin2.addEventListener("click", closebtn2)
		self.AddCards.clslilach2.addEventListener("click", closebtn2)
		self.AddCards.clshyacinth2.addEventListener("click", closebtn2)
		self.AddCards.clsMallisa2.addEventListener("click", closebtn2)
		
		
		// פונקציית הסתרת כרטיסיות משנה
		function closebtn2() {
			self.AddCards.visible = false;
		}
		
		//הגדרת מאזינים למעבר ויציאת עכבר מהמסננים
		self.Fall.addEventListener("mouseover", hoverFall);
		self.Fall.addEventListener("mouseout", outFall);
		
		self.Winter.addEventListener("mouseover", hoverWinter);
		self.Winter.addEventListener("mouseout", outWinter);
		
		//הגדרת מאזין לקליק  במסננים
		self.Fall.addEventListener("click", clickFall);
		self.Winter.addEventListener("click", clickWinter);
		
		// פונקציית מעבר עכבר למסננים
		function hoverFall() {
			self.Fall.gotoAndStop(1);
		}
		function hoverWinter() {
			self.Winter.gotoAndStop(1);
		}
		// פונקציית יציאת עכבר למסננים
		function outFall() {
			self.Fall.gotoAndStop(0);
		}
		
		function outWinter() {
			self.Winter.gotoAndStop(0);
		}
		
		//פונקציות קליק למסננים
		function clickFall() {
			if (Seasons == "clear") {
				self.Fall.gotoAndStop(2);
				self.Fall.removeEventListener("mouseover", hoverFall);
				self.Fall.removeEventListener("mouseout", outFall);
				self.Winter.mouseEnabled = false;
		
		
				Seasons = "Fall";
			}
			else {
				Seasons ="clear";
				self.Fall.gotoAndStop(0);
				self.Fall.addEventListener("mouseover", hoverFall);
				self.Fall.addEventListener("mouseout", outFall);
		
				self.Winter.addEventListener("mouseover", hoverWinter);
				self.Winter.addEventListener("mouseout", outWinter);
		
			}
		}
		
		
		function clickWinter() {
			self.Winter.gotoAndStop(2);
			self.Fall.mouseEnabled = false;
			self.Winter.removeEventListener("mouseover", hoverWinter);
			self.Winter.removeEventListener("mouseout", outWinter);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// sec_cards
	this.AddCards = new lib.harhava();
	this.AddCards.name = "AddCards";
	this.AddCards.setTransform(640.15,360.55,1,1,0,0,0,640.1,359.1);

	this.timeline.addTween(cjs.Tween.get(this.AddCards).wait(1));

	// main_card
	this.mainCards = new lib.cards();
	this.mainCards.name = "mainCards";
	this.mainCards.setTransform(640.1,360.75,1,1,0,0,0,640.1,359.1);

	this.timeline.addTween(cjs.Tween.get(this.mainCards).wait(1));

	// QmarksText
	this.QMarksText = new lib.Qmarks();
	this.QMarksText.name = "QMarksText";
	this.QMarksText.setTransform(936.2,451.65,1,1,0,0,0,182.1,233);

	this.timeline.addTween(cjs.Tween.get(this.QMarksText).wait(1));

	// mainScreen
	this.Winter = new lib.winter();
	this.Winter.name = "Winter";
	this.Winter.setTransform(1174.45,255.45,0.857,0.857);

	this.Fall = new lib.fall();
	this.Fall.name = "Fall";
	this.Fall.setTransform(1174.45,220.9,0.857,0.857);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-53687091.2,-53687091.2,0.5,0.5);

	this.Polycycle = new lib.polycyclic();
	this.Polycycle.name = "Polycycle";
	this.Polycycle.setTransform(1180.4,669.15,1,1,0,0,0,60.4,12.7);

	this.instance_1 = new lib.annual();
	this.instance_1.setTransform(1179,637.8,1,1,0,0,0,61.8,12.5);

	this.QPolycycle = new lib.QM();
	this.QPolycycle.name = "QPolycycle";
	this.QPolycycle.setTransform(1065.7,674.7,1,1,0,0,0,9.3,17.4);

	this.QAnnual = new lib.QM();
	this.QAnnual.name = "QAnnual";
	this.QAnnual.setTransform(1065.7,638.7,1,1,0,0,0,9.3,17.4);

	this.QShadow = new lib.QM();
	this.QShadow.name = "QShadow";
	this.QShadow.setTransform(1076.65,528.85,1,1,0,0,0,9.3,17.4);

	this.QMidSun = new lib.QM();
	this.QMidSun.name = "QMidSun";
	this.QMidSun.setTransform(1076.65,492.85,1,1,0,0,0,9.3,17.4);

	this.QFullSun = new lib.QM();
	this.QFullSun.name = "QFullSun";
	this.QFullSun.setTransform(1076.65,456.9,1,1,0,0,0,9.3,17.4);

	this.QSummer = new lib.QM();
	this.QSummer.name = "QSummer";
	this.QSummer.setTransform(1144.3,342.85,1,1,0,0,0,9.3,17.4);

	this.QSpring = new lib.QM();
	this.QSpring.name = "QSpring";
	this.QSpring.setTransform(1144.3,307.4,1,1,0,0,0,9.3,17.4);

	this.QWinter = new lib.QM();
	this.QWinter.name = "QWinter";
	this.QWinter.setTransform(1144.3,271.95,1,1,0,0,0,9.3,17.4);

	this.QFall = new lib.QM();
	this.QFall.name = "QFall";
	this.QFall.setTransform(1144.3,236.5,1,1,0,0,0,9.3,17.4);

	this.SunOrShade = new lib.sun();
	this.SunOrShade.name = "SunOrShade";
	this.SunOrShade.setTransform(1168.85,487.7,1,1,0,0,0,71.9,48.2);

	this.Dahlia = new lib.dahlia();
	this.Dahlia.name = "Dahlia";
	this.Dahlia.setTransform(85.45,617.1,1,1,0,0,0,53.8,63.6);

	this.Aureum = new lib.aureum();
	this.Aureum.name = "Aureum";
	this.Aureum.setTransform(282.45,612.7,1,1,0,0,0,67.8,68);

	this.Carnation = new lib.carnation();
	this.Carnation.name = "Carnation";
	this.Carnation.setTransform(473.1,615.25,1,1,0,0,0,53.8,65.7);

	this.Mallisa = new lib.mallisa();
	this.Mallisa.name = "Mallisa";
	this.Mallisa.setTransform(667.5,619.65,1,1,0,0,0,59.1,74.9);

	this.Geranium = new lib.geranium();
	this.Geranium.name = "Geranium";
	this.Geranium.setTransform(85.4,442,1,1,0,0,0,65.4,38.6);

	this.Hyacinth = new lib.hyacinth();
	this.Hyacinth.name = "Hyacinth";
	this.Hyacinth.setTransform(282.5,414.3,1,1,0,0,0,53.8,66.3);

	this.Jasmine = new lib.jasmine();
	this.Jasmine.name = "Jasmine";
	this.Jasmine.setTransform(668.75,426.35,1,1,0,0,0,60.3,58.7);

	this.Rose = new lib.rose();
	this.Rose.name = "Rose";
	this.Rose.setTransform(85.35,238.3,1,1,0,0,0,59.1,75);

	this.Lavender = new lib.lavender();
	this.Lavender.name = "Lavender";
	this.Lavender.setTransform(282.4,245.5,1,1,0,0,0,59.1,74.9);

	this.PansyAT = new lib.pansyAT();
	this.PansyAT.name = "PansyAT";
	this.PansyAT.setTransform(412.9,218.1,0.857,0.857);

	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(2470.45,821.65,0.5,0.5);

	this.instance_3 = new lib.QM();
	this.instance_3.setTransform(1032.05,131.7,1,1,0,0,0,9.3,17.4);

	this.text = new cjs.Text("מחזורי פריחה", "normal 400 24px 'Varela Round'");
	this.text.textAlign = "right";
	this.text.lineHeight = 33;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(1258.95,586.55);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text);
	}

	this.text_1 = new cjs.Text("חשיפה לשמש", "normal 400 24px 'Varela Round'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 33;
	this.text_1.lineWidth = 176;
	this.text_1.parent = this;
	this.text_1.setTransform(1258.95,401);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("עונת הפריחה", "normal 400 24px 'Varela Round'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 161;
	this.text_2.parent = this;
	this.text_2.setTransform(1258.95,181);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("שלשמאלו", "normal 400 18px 'Varela Round'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 77;
	this.text_3.parent = this;
	this.text_3.setTransform(1016.3,116.6);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text_3);
	}

	this.Lilach = new lib.lilach();
	this.Lilach.name = "Lilach";
	this.Lilach.setTransform(471.2,414.55,0.9997,0.9692,0,0,0,54.8,63.3);

	this.Iris = new lib.iris();
	this.Iris.name = "Iris";
	this.Iris.setTransform(662.25,238.45,1,1,0,0,0,53.8,68.3);

	this.text_4 = new cjs.Text("עברו על הפרחים וגלו איך הכי נכון לגדל אותם", "normal 400 18px 'Varela Round'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 26;
	this.text_4.lineWidth = 351;
	this.text_4.parent = this;
	this.text_4.setTransform(487.75,116.3);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("עברו על המאפיינים ובחרו את הסינון המתאים בקליק\nלהסבר על כל מסנן עברו על", "normal 400 18px 'Varela Round'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 26;
	this.text_5.lineWidth = 404;
	this.text_5.parent = this;
	this.text_5.setTransform(1258.95,91.05);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("פרחים לגידול בבית ובגינה", "normal 400 36px 'Varela Round'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 49;
	this.text_6.lineWidth = 400;
	this.text_6.parent = this;
	this.text_6.setTransform(1258.95,23.75);
	if(!lib.properties.webfonts['Varela Round']) {
		lib.webFontTxtInst['Varela Round'] = lib.webFontTxtInst['Varela Round'] || [];
		lib.webFontTxtInst['Varela Round'].push(this.text_6);
	}

	this.instance_4 = new lib.CachedBmp_1();
	this.instance_4.setTransform(1212.2,535.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.Iris},{t:this.Lilach},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_3},{t:this.instance_2},{t:this.PansyAT},{t:this.Lavender},{t:this.Rose},{t:this.Jasmine},{t:this.Hyacinth},{t:this.Geranium},{t:this.Mallisa},{t:this.Carnation},{t:this.Aureum},{t:this.Dahlia},{t:this.SunOrShade},{t:this.QFall},{t:this.QWinter},{t:this.QSpring},{t:this.QSummer},{t:this.QFullSun},{t:this.QMidSun},{t:this.QShadow},{t:this.QAnnual},{t:this.QPolycycle},{t:this.instance_1},{t:this.Polycycle},{t:this.instance},{t:this.Fall},{t:this.Winter}]}).wait(1));

	// About
	this.aboutBtn = new lib.Aboutbtn();
	this.aboutBtn.name = "aboutBtn";
	this.aboutBtn.setTransform(20,35.8);
	new cjs.ButtonHelper(this.aboutBtn, 0, 1, 2, false, new lib.Aboutbtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.aboutBtn).wait(1));

	// stillBG
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66FF66").ss(1,1,1).p("EhkJA4kMAAAhxHMDITAAAMAAABxH");
	this.shape.setTransform(640.95,358.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFF00").ss(1,1,1).p("EBkKAAAMjITAAA");
	this.shape_1.setTransform(640.95,720.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFF3A3").s().p("EhkJA4kMAAAhxHMDISAAAMAAABxHg");
	this.shape_2.setTransform(640.95,358.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2146843.6,-2147123.6,2149343.6,2147965.8000000003);
// library properties:
lib.properties = {
	id: '4B5AC0F4116EE04EB3D675C22F7B93FF',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_63.png?1601974051713", id:"CachedBmp_63"},
		{src:"images/CachedBmp_61.png?1601974051713", id:"CachedBmp_61"},
		{src:"images/CachedBmp_59.png?1601974051713", id:"CachedBmp_59"},
		{src:"images/CachedBmp_57.png?1601974051713", id:"CachedBmp_57"},
		{src:"images/CachedBmp_55.png?1601974051713", id:"CachedBmp_55"},
		{src:"images/CachedBmp_53.png?1601974051713", id:"CachedBmp_53"},
		{src:"images/CachedBmp_51.png?1601974051713", id:"CachedBmp_51"},
		{src:"images/CachedBmp_49.png?1601974051713", id:"CachedBmp_49"},
		{src:"images/CachedBmp_47.png?1601974051713", id:"CachedBmp_47"},
		{src:"images/CachedBmp_45.png?1601974051713", id:"CachedBmp_45"},
		{src:"images/CachedBmp_62.png?1601974051713", id:"CachedBmp_62"},
		{src:"images/CachedBmp_30.png?1601974051713", id:"CachedBmp_30"},
		{src:"images/CachedBmp_29.png?1601974051713", id:"CachedBmp_29"},
		{src:"images/CachedBmp_27.png?1601974051713", id:"CachedBmp_27"},
		{src:"images/CachedBmp_25.png?1601974051713", id:"CachedBmp_25"},
		{src:"images/CachedBmp_23.png?1601974051713", id:"CachedBmp_23"},
		{src:"images/CachedBmp_21.png?1601974051713", id:"CachedBmp_21"},
		{src:"images/CachedBmp_19.png?1601974051713", id:"CachedBmp_19"},
		{src:"images/CachedBmp_17.png?1601974051713", id:"CachedBmp_17"},
		{src:"images/CachedBmp_15.png?1601974051713", id:"CachedBmp_15"},
		{src:"images/CachedBmp_13.png?1601974051713", id:"CachedBmp_13"},
		{src:"images/CachedBmp_11.png?1601974051713", id:"CachedBmp_11"},
		{src:"images/CachedBmp_9.png?1601974051713", id:"CachedBmp_9"},
		{src:"images/HomeFlowers_atlas_1.png?1601974051594", id:"HomeFlowers_atlas_1"},
		{src:"images/HomeFlowers_atlas_2.png?1601974051595", id:"HomeFlowers_atlas_2"}
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
an.compositions['4B5AC0F4116EE04EB3D675C22F7B93FF'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;