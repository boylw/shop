/**
 * Created by liuwenwu on 2017/12/12.
 */
$(function () {
    var
        $bookInfor = $('.bookInfo'),
        $doSome = $('.doSome'),
        $rd = $('.rd'),
        $add = $('.add'),
        $shop = $('.shop'),
        priceWrap = $('.priceWrap span:eq(1)').text();
    $shop.click(function () {
        alert('加入成功,请在购物车查看');
    });
    $doSome.click(function(){
        $(this).parent('.bookInfo').fadeOut(1200);
    });
    $rd.click(function () {
        var count = $(this).siblings('.price').text();
        console.log()
        if ($(this).siblings('i').text()>0){
            $(this).siblings('i').text($(this).siblings('i').text() - 1).stop().siblings('.num').text(
                (($(this).siblings('i').text())*count).toFixed(2)
            );
        }
    });
    $add.click(function () {
        var count = $(this).siblings('.price').text();
        $(this).siblings('i').text($(this).siblings('i').text() -(-1)).stop().siblings('.num').text(
            (($(this).siblings('i').text())*count).toFixed(2)
        );
    });
});