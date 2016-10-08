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
    let ele = $('#J_loading');
    let rotate = 90;
    setTimeout(function(){
        ele.cssText = `transform: rotate(${_rotate}deg)`;
        rotate += 90;
        if (rotate === 360) {
            rotate = 90;
        }
    },500);
    console.log(ele);
};

// init

loadingAnimation();