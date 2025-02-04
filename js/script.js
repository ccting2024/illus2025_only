
// 如果只在ＣＳＳ用display:none 可能還是會下載，浪費流量
//function是不要立刻執行的小房間
// if(條件){$(對象).行為;}
$(document).ready(function () { //document ready一個ＪＳ檔案只要寫一次就好了

    //交替漢堡按鈕
    // $('誰').偵測動作(下一個動作等待的小房間=此處等於function(){下一個執行的步驟})
    $('.menumom').click(function(){
        // .hamburger 交替切換 is-active
        $(this).toggleClass('is-active');
        // .navigation 交替切換 show
        $('.navigation').toggleClass('show');
    });


});

//JQuery smoove
$('.smoove').smoove({
    offset: '20%'
});

$(document).ready(function() {
    console.log("script.js 成功載入！");
    console.log("jQuery 版本：", $.fn.jquery);

    $('.menumom').on('click', function() { // 確保事件綁定正確
        console.log("menumom 被點擊");
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');

        // 測試 class 是否正確變更
        console.log("navigation class: ", $('.navigation').attr("class"));
    });
});


