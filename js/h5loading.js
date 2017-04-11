var h5_loading=function(images,firstpage){
		var id=this.id;
	if(this._images===undefined){//第一次进入
		this._images=(images||[]).length;
		this._loads=0;
		  
		window[id]= this;
		

	for(s in images){
			var item=images[s];
			var img=new Image ;
			img.onload=function(){
				window[id].loader();
			}

			img.src=item;
	}
		$('#rate').text('0%');
		return this;
	}else{
		this._loads++;
		$('#rate').text((this._loads/this._images*100)+'%');
	
		if(this._loads<this._images){	
			return this
		}
		
	}
		window[id]=null;
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