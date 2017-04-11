/* 饼图图组件对象 */


 var h5componentring=function(names,cfg){
 	var component=new h5componentbase(name,cfg);
 	 var w=cfg.width;
 	var h=cfg.height;
 	//画布创建
 	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');

 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;
	$(cxt).css('zIndex','1');
	component.append(cxt);

	//底图层
	 r=w/2;
	 cnt.arc(r,r,r*.8,0,2*Math.PI);
	 cnt.fillStyle='#eee'
	 cnt.css
	 cnt.fill()



	//动画层

	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');

 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;
	$(cxt).css('zIndex','2');
 	component.append(cxt);
	//加入动画
	var draw=function(per){
		
			var rad=2*Math.PI*cfg.data[1]*per;
 			var sAngel=1.4*Math.PI;
 			var eAngel=sAngel+rad;
 			cnt.beginPath();
 			cnt.moveTo(r,r);
 			cnt.arc(r,r,r,sAngel,eAngel);
			cnt.fillStyle='#fe7878';		
			cnt.fill();
			cnt.closePath();
			cnt.beginPath();
		
			 cnt.moveTo(r,r);
			cnt.arc(r,r,r,eAngel,sAngel);

			cnt.fillStyle='#c9e3f7';		
			cnt.fill();
			cnt.closePath();
			cnt.beginPath();
			 r=w/2;
			 cnt.arc(r,r,r*.8,0,2*Math.PI);
	 		cnt.fillStyle='#eee';
 			cnt.closePath();
	 		cnt.fill();
			cnt.closePath();
			if(per>=1){
				context.css('opacity',1)
			}
 
}
	

	var context=$('<div class="text">');

  		context.text(cfg.data[0]);
  		var pie=$('<div class="pie">');
  		var pt=cfg.data[1]*100+'%'
  		pie.text(pt)
  		context.append(pie);
  		component.append(context);
  		context.css('left',r/2-50).css('top',r/2-30)



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

