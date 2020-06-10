/**
 * Created by LiQuan on 2020/5/21.
 */
$(function () {
    // 初始化组件
    $('.container').fullpage({
        // 设置每一个屏幕的背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        // 设置屏幕内容的对齐方式 默认是垂直居中的
        verticalCentered: false,
        // 显示项目导航
        navigation: true,
        // 滚动速度
        scrollingSpeed: 1000,
        // 监听进入某一屏的时候
        afterLoad: function (link, index) {
            $('.section').eq(index - 1).addClass('now');
        },
        // 监听离开某一屏的时候
        onLeave: function (index, nextIndex, direction) {
            var currentSetion = $('.section').eq(index - 1);
            if (index == 2 && nextIndex == 3) { // 从第2页到第3页
                currentSetion.addClass('leaved');
            } else if (index == 3 && nextIndex == 4) { // 从第3页到第4页
                currentSetion.addClass('leaved');
            } else if (index == 5 && nextIndex == 6) { // 从第5页到第6页
                currentSetion.addClass('leaved');
                $('.screen06 .box').addClass('show');
            } else if (index == 6 && nextIndex == 7) { // 从第6页到第7页
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    $(this).css('transition-delay', i * 0.5 + 's');
                })
            }
        },
        // 页面结构生成后的回调函数
        afterRender: function () {
            // 点击"继续往下" 跳转下一页
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            // 当第4屏的购物车动画结束之后执行收货地址的动画
            $('.screen04 .03_CART').on('transitionend', function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            $('.screen08').on('mousemove', function (e) {
                $(this).find('.hand').css({
                    left: e.clientX - 190,
                    top: e.clientY - 20
                });
            }).find('.again').on('click', function () {
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.conttent [style]').removeAttr('style');
                // 返回首页
                $.fn.fullpage.moveTo(1);
            });
        }
    });
});