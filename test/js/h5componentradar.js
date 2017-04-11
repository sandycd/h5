/* 雷达图组件对象 */


 var h5componentradar=function(names,cfg){
 	var component=new h5componentbase(name,cfg);
 	 var w=cfg.width;
 	var h=cfg.height;
 	//画布创建
 	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');

 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;

	component.append(cxt);
	var step=cfg.data.length
    var rad=360/step
    var r=w/2;
    var isblue=false

    for(var s=10;s>0;s--){	
		cnt.beginPath();
		for(var i=0;i<step;i++){
		 var rad=(2*Math.PI/360)*(360/step)*i;
		var x=r+Math.sin(rad)*r*(s/10);
		var y=r+Math.cos(rad)*r*(s/10);	
		cnt.lineTo(x,y);	
		}
		cnt.closePath();
		cnt.fillStyle=(isblue=!isblue) ? '#99c0ff' :'#f1f9ff';
		cnt.fill()
		
	}
	//划线
	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');

 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;
 	component.append(cxt);
 
	//加入动画
	var draw=function(per){
		cnt.clearRect(0,0,w,h)	;
 		cnt.beginPath();
 		//连线
 	for(var i=0;i<step;i++){
		var rad=(2*Math.PI/360)*(360/step)*i;
		var nn=cfg.data[i][1];
		var x=r+Math.sin(rad)*r*nn*per;
		var y=r+Math.cos(rad)*r*nn*per;
		cnt.arc(x,y,5,0,2*Math.PI);
		 cnt.lineTo(x,y);
		 cnt.strokeStyle='#ff7676';	
	}
		cnt.closePath();
		cnt.stroke();
		//画点

 	for(var i=0;i<step;i++){
		var rad=(2*Math.PI/360)*(360/step)*i;
		var nn=cfg.data[i][1];
		var x=r+Math.sin(rad)*r*nn*per;
		var y=r+Math.cos(rad)*r*nn*per;
			cnt.beginPath();
			cnt.arc(x,y,5,0,2*Math.PI);
			 cnt.fillStyle='#ff7676';
		 	cnt.fill();
			cnt.closePath();	
	}

 


}
	//加入数据
	for(var i=0;i<step;i++){
		var rad=(2*Math.PI/360)*(360/step)*i;
		var x=r+Math.sin(rad)*r;
		var y=r+Math.cos(rad)*r;
		var context=$('<div class="text">');
		context.text(cfg.data[i][0]);
		context.css('top',y/2);
		if(x>w/2){
			context.css('left',x/2+5)
		}else{
			context.css('right',w/2-x/2+5)
		}
		if(y>h/2){
			context.css('top',y/2-5)
		}else{
			context.css('bottom',h/2-y/2+5)
		}

		context.css('transition-delay',i*300+'ms');
		console.log(i*10)
		component.append(context);
		
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

