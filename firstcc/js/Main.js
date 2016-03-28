/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-16 10:10:02
 * @version $Id$
 */
var backLayer;
var imgList={};
var imgData=[
	{name:"back",path:"./images/back.png"},
	{name:"f0",path:"./images/floor0.png"},
	{name:"f1",path:"./images/floor1.png"},
	{name:"f3",path:"./images/floor2.png"},
	{name:"f4",path:"./images/floor3.png"},
	{name:"hero",path:"./images/hero.png"},
	{name:"mai",path:"./images/mai.png"},
	{name:"ue",path:"./images/ue.png"},
	{name:"wheel",path:"./images/wheel.png"},
]





function main(){
	//背景层初始化
	backLayer=new LSprite();

	//背景显示
	addChild(backLayer);
	//加载
	LLoadManage.onload(imgData,function(progress){

	},gameInit)
}
function gameInit(result){
	 imgList=result;
	 backLayer.addEventListener(LMouseEvent.MOUSE_UP,gameToStart)
}