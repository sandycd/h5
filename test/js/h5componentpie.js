/* 饼图图组件对象 */


 var h5componentpie=function(names,cfg){
 	var component=new h5componentbase(name,cfg);
 	 var w=cfg.width;
 	var h=cfg.height;
 	//画布创建
 	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');

 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;

	component.append(cxt);

	//底图层
	r=w/2;
	cnt.arc(r,r,r,0,2*Math.PI);
	cnt.fillStyle='#eee'

	cnt.fill()


	//数据层
	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');

 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;
 	component.append(cxt);
 	var colors=['red','yellow','blue','orange','gray'];

	var sAngel=1.5*Math.PI;
 	for(var i=0;i<cfg.data.length;i++){
 		
 		var eAngel=sAngel+cfg.data[i][1]*2*Math.PI;
 		color=cfg.data[i][2]||(cfg.data[i][2]=colors.pop());
 		cnt.beginPath();
 	
 		cnt.fillStyle=color;
 		cnt.moveTo(r,r);
 		cnt.arc(r,r,r,sAngel,eAngel);

		cnt.fill();
 		sAngel=eAngel;

 		var context=$('<div class="text">');
 		var pie=$('<div class="pie">')
 		var item=cfg.data[i];
 		var itemtxt=item[1]*100+'%';
 		var x=r+Math.sin(.5*Math.PI-sAngel)*r;
		var y=r+Math.cos(.5*Math.PI-sAngel)*r;
 		context.text(item[0]);
			pie.text(itemtxt);
 		if(x>w/2){
 			context.css('left',x/2);
 		}else{
 			context.css('right',w/2-x/2);
 		}
 		if(y>h/2){
 			context.css('top',y/2);
 		}else{
 			context.css('bottom',h/2-y/2);
 		}
 		context.append(pie);
 		
 		context.css('color',cfg.data[i][2])
 		

 		component.append(context);

 	}
	
	

	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');

 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;
 	component.append(cxt);
	//加入动画
	var draw=function(per){
		cnt.clearRect(0,0,w,h)

 		cnt.beginPath();
 		cnt.fillStyle='#eee';
 		cnt.moveTo(r,r);
 		if(per<=0){
 			cnt.arc(r,r,r,0,2*Math.PI);
 		}else{cnt.arc(r,r,r,sAngel,sAngel+(2*Math.PI)*per,true);}
		cnt.fill();
 

}





	//生长动画
	component.on('afterLoad',function(){
		 var s=0
	  for(var i=0;i<100;i++){
	 	setTimeout(function(){
	  			 s +=.01;
	  			 
	 			draw(s);

	  	},i*10)
	 }

	});
		component.on('onLeave',function(){
		 var s=1
	  for(var i=0;i<100;i++){
	 	setTimeout(function(){
	  			 s -=.01;
	  			 
	 			draw(s);

	  	},i*10)
	 }

	});


 	return component; 
 }

