/* 基本图文组件对象 */


 var h5componentpolyline=function(names,cfg){
 	var component=new h5componentbase(name,cfg);
 	 var w=cfg.width;
 	var h=cfg.height;
 	//画布创建
 	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');

 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;

	component.append(cxt);
	
		window.cnt=cnt;
		
	

	cnt.beginPath();
	var step=10;

	
	var he=h/step;
	cnt.lineWidth=1;
	 cnt.strokeStyle='#aaaaaa';
	for(var i=0;i<step+1;i++){
		var y=he*i

		cnt.moveTo(0,y)
		cnt.lineTo(w,y);
	
	}
		var step=w/(cfg.data.length+1)
	
		for(var i=0;i<cfg.data.length+2;i++){
		var x=step*i

		cnt.moveTo(x,0)
		cnt.lineTo(x,h);
		
	}

	cnt.stroke();
	//动画开始
	var cxt=document.createElement('canvas');
 	var cnt=cxt.getContext('2d');
 
 	cxt.width=cnt.width=w;
	cxt.height=cnt.height=h;

	component.append(cxt);

		//加入画布
	var draw=function(per){
		cnt.clearRect(0,0,w,h);
	cnt.beginPath();
	step=w/(cfg.data.length+1);
	cnt.lineWidth=3;
	cnt.strokeStyle='#ff8878';
		var x=0
		var y=0
	//画点
	for(i in cfg.data){
		x=step*i+step
		y=h*(1-per*cfg.data[i][1])
		cnt.moveTo(x,y);
		cnt.arc(x,y,5,0,2*Math.PI);
		
		}

	//连线
	x=step
	y=h*(1-per*cfg.data[i][1])
	cnt.lineWidth=1;
	 // cnt.strokeStyle='#ff8878';
	cnt.moveTo(x,y); 
	for(i in cfg.data){
		
		x=step*i+step
		y=h*(1-per*cfg.data[i][1]);	
		cnt.lineTo(x,y);
		
		}
		cnt.stroke();

		//填充颜色
	cnt.lineTo(x,h);
	cnt.lineTo(step,h);
	cnt.fillStyle='rgba(255,136,120,0.2)';
	cnt.fill();


	//写数据

	for(i in cfg.data){
		x=step*i+step
		y=h*(1-per*cfg.data[i][1])
		// it=cfg.data[i];
		// console.log(cfg.data[0][1])
	
		var item=cfg.data[i][1]*100+'%'	;
		cnt.fillStyle=cfg.data[i][2] ? cfg.data[i][2] : '#595959';
		cnt.font="20px Arial";
		cnt.fillText(item,x-10,y-10);
		
		
		
	}

	}

	
	//文字类型
	step=cfg.data.length+1;
	var text_w=w/step>>0;

	for(var i=0;i<step;i++){
		var x=(w/step)*i;
	
		var content =$('<div class="text">')
		if(cfg.data[i]){

		content.text(cfg.data[i][0])
		content.width(text_w).css('left',(x/2+text_w/4))
		}
	
		component.append(content);
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

