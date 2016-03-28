/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-16 10:11:05
 * @version $Id$
 */

function floor(positionY){
	var self=this;
	var floorType=Math.floor(Math.random()*4);
	switch(floorType){
		case 0:
			self.bitmap=new LBitmap(new LBitmapData(imgList["floor0"]));
		case 1:
			self.bitmap=
	}

}