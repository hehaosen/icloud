'use strict';

// 选择器
var $ = function $(_ele) {

    if (!document.querySelector) {
        if (_ele.substring(0, 1) === '#') {
            return document.getElementById(_ele.substring(1));
        } else if (_ele.substring(0, 1) === '.') {
            return document.getElementsByClassName(_ele.substring(1));
        }
    } else {
        return document.querySelector(_ele);
    }
};

// loding icon 动画效果
var loadingAnimation = function loadingAnimation() {
    var ele = $('#J_loading');
    var eleChild = ele.querySelector('.loading-icon');
    var rotate = 90,
        topOffset = 0;
    setInterval(function () {
        ele.style.cssText = 'transform: rotate(' + rotate + 'deg)';
        eleChild.style.cssText = 'top:-' + topOffset + 'px';
        topOffset += 32;

        if (topOffset > 64) {
            topOffset = 0;
            rotate += 90;
            if (rotate === 360) {
                rotate = 0;
            }
        }
    }, 100);
};

// init

loadingAnimation();