// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/hutao.png");
        document.title = 'Σ(っ °Д °;)っ 你要走嘛我好伤心！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/hutao.png");
        document.title = '✧(◍˃̶ᗜ˂̶◍)✩ 哇喔！欢迎回来~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});