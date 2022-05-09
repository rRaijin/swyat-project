// 
$(document).ready(function(){
    // Скрипт отвечающий за выпадение вложенного списка дополнительной навигации
	$("#topbar > li:has(ul) > ul").hide().each(function(){
        console.log('ok');
		var parent = $(this).parent();
		var height = parent.outerHeight();
		$(this).css({
			position: "absolute",
			top: height,
			// top: "30px",
			zIndex: 1000
		});
	});
	$("#topbar > li:has(ul)").on("mouseover mouseout", function(){
        console.log('dfdf')
        $(this).find("ul").stop().slideToggle(500);

	});
});