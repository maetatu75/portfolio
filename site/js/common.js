$(document).ready(function(){

    //ページ内リンクスクロール
    $(function(){
        $('a[href^="#"]').click(function(){
          var speed = 500;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $("html, body").animate({scrollTop:position}, speed, "swing");
          return false;
        });
    });

      //ページトップへ戻る
      var pagetop = $('.pagetop');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                    pagetop.fadeIn();
            } else {
                    pagetop.fadeOut();
            }
        });

})