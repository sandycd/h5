/* 基本图文组件对象 */


 var h5componentbar_v=function(names,cfg){
 	var component=new h5componentbase(name,cfg);

 	$.each(cfg.data,function(idx,item){
 		var line=$('<div class="line_v">');
 		var name=$('<div class="name_v">');
 		var rate=$('<div class="rate_v">');
 		var per=$('<div class="per_v">');
		var bar=item[1]*100+'%';
 		
 		 name.text(item[0]);
 		 
 		 
 		 rate.height(bar);
 		 rate.html('<div class="bg" style="background-color:'+item[2]+'">')
 		 // if(item[2]!==undefined){
 		 // 	$('.bg').css('background',item[2]);
 		 // }
 		line.append(per).append(rate).append(name);
 		var martop=line.height()-name.height()-(item[1]	*line.height())-25;
 	
 		per.css('margin-top',martop);
 		 per.text(bar); 	
 		component.append(line)

 	});

 	return component; 
 }

