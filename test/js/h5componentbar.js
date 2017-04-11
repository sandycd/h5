/* 基本图文组件对象 */


 var h5componentbar=function(names,cfg){
 	var component=new h5componentbase(name,cfg);

 	$.each(cfg.data,function(idx,item){
 		var line=$('<div class="line">');
 		var name=$('<div class="name">');
 		var rate=$('<div class="rate">');
 		var per=$('<div class="per">');
		var bar=item[1]*100+'%';
 		
 		 name.text(item[0]);
 		 	line.append(name);
 		 
 		 rate.width(bar);
 		 rate.html('<div class="bg" style="background-color:'+item[2]+'">')
 		 // if(item[2]!==undefined){
 		 // 	$('.bg').css('background',item[2]);
 		 // }
 		
 		 	line.append(rate);

 		 per.text(bar)
 		 	line.append(per);
 			 component.append(line)

 	});

 	return component; 
 }

