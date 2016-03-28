/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-16 10:10:45
 * @version $Id$
 */

function background(){
	var self=this;
	base(self,LSprite,[]);
	var bitmap=new LBitmap(new LBitmapData(imgList["back"]));
	var bitmap1=bitmap.clone()
		bitmap1.y=bitmap.getHeight();
	var bitmap2=bitmap.clone()
		bitmap2.y=-bitmap.getHeight();
	var bitmap3=bitmap.clone();
		bitmap3.y=-2*bitmap.getHeight();
	self.addChild(bitmap);
	self.addChild(bitmap1);
	self.addChild(bitmap2)
	self.addChild(bitmap3)
}
background.prototype.run=function(delay,leng){
	 var self=this;
	 self.delay=delay ? delay : 2;
	 self.leng=leng ? leng : 600;
	 self.move=LTweenLite.to(self,self.delay,{y:self.leng,loop:true,onComplete:function(){

	 })
}
background.prototype.stop=function(){
	var self=this;
	 LTweenLite.remove(self.move)
}