/* 基本图文组件对象 */


 var h5componentbase=function(names,cfg){
 	var cfg=cfg || {}
 	var cls='h5_component_'+names +' h5_component_'+cfg.type ;
 	var ids=('h5_base_'+Math.random()).replace('.','_');
 	var component=$('<div class="h5_component '+cls+' h5_animate_Leave" id="'+ids+' " >');

 	cfg.text && component.text(cfg.text);
 	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);
	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');
	if(cfg.center ===true){
		component.css({
		position:'absolute',
		left:'50%',		
		marginLeft:(cfg.width/4*-1)+'px',

	})
	}
	if(typeof cfg.onclick =='function')
	{
		component.on('click',cfg.onclick)
	}
	component.on('onLeave',function(){
			
		setTimeout(function(){
			component.addClass('h5_animate_Leave').removeClass('h5_animate_Load');
			cfg.animateOut && component.animate(cfg.animateOut);
		},0);
			return false;
		});
	component.on('afterLoad',function(){
		setTimeout(function(){
			component.addClass('h5_animate_Load').removeClass('h5_animate_Leave');
			cfg.animateIn && component.animate(cfg.animateIn);
			},cfg.delay||0);
			return false;
		});

 	return component; 
 }

