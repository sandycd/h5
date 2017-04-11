var jdata=[]
var h5=function(){
 	this.id=('h5_'+Math.random()).replace('.','_');
 	this.el=$('<div id="'+this.id+'">').hide();
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
		if(typeof this.whenAddPage=='function'){
			this.whenAddPage()
		}
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
		case 'polyline':{
			var component=new h5componentpolyline(name,cfg);
			break;
		}
		case 'pie':{
			var component=new h5componentpie(name,cfg);
			break;
		}
		case 'bar':{
			var component=new h5componentbar(name,cfg);
			break;
		}
		case 'bar_v':{
			var component=new h5componentbar_v(name,cfg);
			break;
		}
		case 'radar':{
			var component=new h5componentradar(name,cfg);
			break;
		}
		case 'ring':{
			var component=new h5componentring(name,cfg);
			break;
		}
		case 'pie':{
			var component=new h5componentpie(name,cfg);
			break;
		}
		case 'point':{
			var component=new h5componentpoint(name,cfg);
			break;
		}
		default:break;
		}
		
		var page=this.page.slice(-1)[0];
		page.append(component);
	
		return this;
	}
	this.loader=function(firstpage){
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
		if(firstpage){$.fn.fullpage.moveTo(firstpage)}
	}
	this.loader=(typeof h5_loading =='function' ) ? h5_loading : this.loader;

}