/**
 * 创建一个猫爪印记，并在指定位置显示后自动淡出销毁
 * @param {number} x - X 坐标，视口中的像素值，单位 px（clientX）
 * @param {number} y - Y 坐标，视口中的像素值，单位 px（clientY）
 */
function createPawPrint(x, y) {
    const paw = document.createElement('img');
    paw.src = '/img/paw.png';         // 设置猫爪图像路径
    paw.className = 'click-paw';      // 应用动画样式
    paw.style.left = x + 'px';
    paw.style.top = y + 'px';
    document.body.appendChild(paw);   // 将猫爪插入到页面中

    // 800ms 后自动移除该猫爪节点（与 CSS 动画一致）
    setTimeout(() => {
        paw.remove();
    }, 800);
}


//PC端点击
document.addEventListener('click', function (e) {
    /*const paw = document.createElement('img');
    paw.src = '/img/paw.png'; // 图片路径按你实际的来
    paw.className = 'click-paw';
    paw.style.left = e.pageX + 'px';
    paw.style.top = e.pageY + 'px';*/
    createPawPrint(e.clientX, e.clientY);});   /* PageX/Y 坐标参考系为页面（包括滚动漂移）, ClientX/Y 坐标系为视口（不包含滚动））clientX / clientY 是基于视口的坐标，不受滚动影响，更适合 fixed 定位.*/

//移动端触摸
let followPaw = null; // 用于跟踪当前正在跟随手指滑动的猫爪对象

// 移动端触摸开始：创建跟随猫爪
document.addEventListener('touchstart', function (e) {
    const touch = e.touches[0];  // 获取第一个手指触点
    followPaw = document.createElement('img');
    followPaw.src = '/img/paw.png';
    followPaw.className = 'paw-follow';           // 使用跟随样式（无动画）
    followPaw.style.left = touch.clientX + 'px';
    followPaw.style.top = touch.clientY + 'px';
    document.body.appendChild(followPaw);
});

// 触摸移动时：更新位置
document.addEventListener('touchmove', function (e) {
    if (followPaw) {
        const touch = e.touches[0];
        followPaw.style.left = touch.clientX + 'px';
        followPaw.style.top = touch.clientY + 'px';
    }
});

// 触摸结束时：渐隐并移除
document.addEventListener('touchend', function () {
    if (followPaw) {
        followPaw.style.transition = 'opacity 0.6s ease-out'; // 添加渐隐效果
        followPaw.style.opacity = '0';

        setTimeout(() => {
            if (followPaw.parentNode) {
                followPaw.remove();
                followPaw = null; // 重置变量
            }
        }, 600); // 等待动画完成后销毁
    }
});