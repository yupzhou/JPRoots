var indexinsopen = false;   //目录是否展开
// 目录收起展开
$('#indexbtn').click(function() {
  if (indexinsopen) {
    $('.indexbox').css("visibility","hidden");
    $('.dicindex').css("height","0px");
    $('.dicindex').css("padding-bottom","61px"); 
    $('.dicindex').css("width","94px");
    $('.dicindexmenu').css("width","59px");  
    $(this).html('目录');
    $('.dicindex').addClass('dicindex-close');
    indexinsopen = false;
  }else {
    $('.indexbox').css("visibility","visible");
    $('.dicindex').css("height","175px");
    $('.dicindex').css("padding-bottom","70px");
    $('.dicindex').css("width","160px");
    $('.dicindexmenu').css("width","124px");
    $(this).html('目录');
    $('.dicindex').removeClass('dicindex-close');
    indexinsopen = true;
  }
})