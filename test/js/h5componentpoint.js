/* 基本图文组件对象 */


 var h5componentpoint=function(names,cfg){
 	var component=new h5componentbase(name,cfg);

 	var base=cfg.data[0][1];

 	$.each(cfg.data,function(idx,item){
 		var point=$('<div class="point point_'+idx+'">');

 		var name=$('<div class="name">'+item[0]+'</div>');
 		var rate=$('<div class="rate">'+item[1]+'</div>');

 			point.append(name).append(rate);
 	
 		
 		var per=item[1]/base*100+'%';
 	
 		point.width(per).height(per);

 		point.css({
 			'background':item[2],

 		
 		});	

 		if(item[3]!==undefined&&item[4]!==undefined){
 			point.css({
 				
 				'position':'absolute',
 				'top':item[4],
 				'left':item[3]
 		})
 		}
 		point.css(
 			'transition','all 1s '+idx*.5+'s' 
 		);

 		component.append(point);
 	});
 	component.find('.point').on('click',function(){
 		component.find('.point').removeClass('point_foucs');
 		$(this).addClass('point_foucs')
 	}).eq(0).addClass('point_foucs');
 	return component; 
 }

