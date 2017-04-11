/* 基本图文组件对象 */


 var h5componentbar_v=function(names,cfg){
 	var component=new h5componentbase(name,cfg);

 	$.each(cfg.data,function(idx,item){
 		var line=$('<div class="line">');
 		var name=$('<div class="name">');
 		var rate=$('<div class="rate">');
 		var per=$('<div class="per">');
		var bar=item[1]*100+'%';
 		
 		 name.text(item[0]);
 		 
 		 
 		 rate.height(bar);
 		 rate.html('<div class="bg" style="background-color:'+item[2]+'">')
 		 // if(item[2]!==undefined){
 		 // 	$('.bg').css('background',item[2]);
 		 // }
 		line.append(per).append(rate).append(name);
 		var martop=line.height()-name.height()-(item[1]	*line.height())-25;
 		console.log(martop)
 		per.css('margin-top',martop);
 		 per.text(bar); 	
 		component.append(line)

 	});

 	return component; 
 }

