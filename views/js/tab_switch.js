import $ from 'jquery'

// tab栏切换
$(function() {
    //1.点击上部的li，当前的li添加current类，其余兄弟移除类
    $(".tab_list li").click(function() {
        //链式编程操作
        $(this).addClass("current").siblings().removeClass("current");
        //2.点击的同时，得到当前li的索引号
        var index = $(this).index();
        console.log(index);
        //3.让下部里面的相应索引号的item显示，其余的item隐藏
        $(".tab_con .item").eq(index).show().siblings().hide();
    })

    $(".homepage").click(function() {
        $(location).attr("href", "index.html");
    })

    $(".classify").click(function() {
        $(location).attr("href", "category.html");
    })
})