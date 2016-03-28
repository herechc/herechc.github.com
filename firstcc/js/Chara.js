/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-16 10:10:26
 * @version $Id$
 */

function chara(){
	 var self=this;
	 base(self,LSprite,[]);
	 var bitmap=new LBitmap(new LBitmapData(imgList["wheel"]));
	  	 bitmap1.clone();
	  	 bitmap1.x=50;
	 LTweenLite.to(bitmap,0.5,{rotate:360,loop:true})
	 LTweenLite.to(bitmap,0.5,{rotate:360,loop:true})
}