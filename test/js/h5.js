var h5=function(){
 	var ids=('h5_'+Math.random()).replace('.','_');
 	this.el=$('<div id="'+ids+'">').hide();
 	this.page=[]
 	$('body').append(this.el);
	this.addPage=function(name,text){
		var idname=name;
		var page=$('<div class="page section" >');
		if(name!==undefined){
			page.addClass('h5_page_'+idname+'')
		}
		if(text!==undefined){
			page.text(text)
		}
		this.el.append(page);
		this.page.push(page);
		return this;
	}
	this.addComponent=function(name,cfg){
		var cfg=cfg||{};
		cfg=$.extend({
			type:'base'
		},cfg);
		switch (cfg.type){
		case 'base':{
			var component=new h5componentbase(name,cfg);
			break;
		}
		default:break;
		}
		
		var page=this.page.slice(-1)[0];
		page.append(component);
	
		return this;
	}
	this.loader=function(){
		this.el.fullpage({
			onLeave:function(index, nextIndex, direction){
				$(this).find('.h5_component').trigger('onLeave');
				
			},
			afterLoad:function(anchorLink, index){
			
			$(this).find('.h5_component').trigger('afterLoad');
			},
		});
		this.page[0].find('.h5_component').trigger('afterLoad');
		this.el.show();
	}
}