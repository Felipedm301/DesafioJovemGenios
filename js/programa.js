var core = {
	message : document.getElementById('Resposta'),
	idNumber : "numero",
	number : 0,
	number3: 3,
	number5 : 5,
	messageMultiple3 : "Jovens",
	messageMultiple5 : "Gênios",
	messageMultiple3and5 : "Jovens Gênios",
	colorMultiple3 : "rgb(255,204,0)",
	colorMultiple5 : "rgb(21,88,88)",
	colorMultiple3and5 : "rgb(180,255,201)",
	colorDefault : "rgb(114,0,255)",
	numberIsInvalid : "Favor insira um número",

	multiple : function(value, color){
		var core = this;
		core.print(`<h3 style="color:${color}">${value}</h3>`);
	},
	print: function(value){
		var core = this;
		core.message.innerHTML += value;
	},
	result : function(){
		var core = this;
		core.message.innerHTML = "";
	    core.number = document.getElementById(core.idNumber).value;
	    if(!core.number){
	    	core.print(`<h3>${core.numberIsInvalid}</h3>`);
	    	return;
	    }

	    for (var index = 0; index <= core.number; index++) {
	        if ( index%core.number3 == 0 && index%core.number5 == 0) {
	            core.multiple(core.messageMultiple3and5, core.colorMultiple3and5);
	        } else if(index%core.number3 == 0){
	            core.multiple(core.messageMultiple3, core.colorMultiple3);
	        } else if(index%core.number5 == 0){
	            core.multiple(core.messageMultiple5, core.colorMultiple5);
	        } else {
	            core.multiple(index, core.colorDefault);
	        }
	    }	
	}
}