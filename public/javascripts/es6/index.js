// 选择器
var $ = (_ele) => {

    if (!document.querySelector()) {
        if (_ele.substring(0, 1) === '#') {
            return document.getElementById(_ele.substring(1));
        } else if (_ele.substring(0, 1) === '.'){
            return document.getElementsByClassName(_ele.substring(1));
        }
    } else {
        return document.querySelector(_ele);
    }
};

// loding icon 动画效果
var loadingAnimation = () => {
    var _ele = $('#J_loading');
    setTimeout(function(){
        _els.cssText = '';
    },500);
    console.log(_ele);
};

// init

loadingAnimation();