// JavaScript Document
 var num = 0;
 $("#nav").hide();
	$("li img").load(function(){
		num++;
		if (num==4)
		{
			$("#nav").show();
		}
	})
		.click(function(){
		
		//如果已经处于active状态，return
		if (this.className.indexOf("active")!=-1) return;
		
		//正文文字渐隐
		$("#frontText").fadeOut();
		$("#frontTextBack").fadeOut();
		$("#frontTextSub").fadeOut();

		//active状态的图片恢复原样
		$("li img.active").fadeTo(200,0.6)
		.removeClass("active")
		.animate({top:5,width:52,left:10},300)
		.parent().css({"color":"#aaa"});  //
		
		//获取数据
		var i = $(this).attr("pic");
		var t = $(this).attr("text").split("|");
		
		//当前
		$(this).animate({top:-5,width:70,height:40,left:1},100)
		.addClass("active")
		.fadeTo(200,1)
		.parent().css({"color":"white"});

		$("#back").children().addClass("gray").end()
					.fadeTo(500,0.1,function(){
										//var IMG = new Image();
										//IMG.s
										$(this).children("img").attr("src","images/"+i+".jpg").removeClass("gray");	  //更改图片
										$(this).fadeTo(500,1,function(){
																$("#frontText").html(t[0]).fadeIn(200);	//更改正文文字
																$("#frontTextBack").html(t[0]).fadeIn(200);	//阴影文字
																$("#frontTextSub").html(t[1]).fadeIn(200)}	//副标题
																);
										})
		})

	//初始第一张图片
	
	var i =0;

	show();

	function show(){
		if (i==$("li img").size()) i = 0
		$("li img").eq(i).click();
		i++;
		//setTimeout(show(),1000);
	}

	document.oncontextmenu   =  function(e){return false}
	
	if (self.location.search!=""){
		var V = self.location.search;
		V = V.substr(1,V.length);
		eval(V);
		var json ="{";
		if (option.skin==0)
			$("#mask").hide();
		if (option.animate == 0){
		$("#nav ul").hide();
		}
		$("#nav").width(option.width?option.width:760);
		$("#nav").height(option.height?option.height:240);
		$("#back img").width($("#nav").width());
		$("#back img").height($("#nav").height());
		$(self.parent.document.getElementById("splash")).children().height($("#nav").height()).width($("#nav").width());
	}