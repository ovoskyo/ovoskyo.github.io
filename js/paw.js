//z_999
/**
 * 在页面指定位置生成猫爪印记
 * @param {number} x - 横坐标（视口内）
 * @param {number} y - 纵坐标（视口内）
 */
function createPawPrint(x, y) {
  const paw = document.createElement('img');
  paw.src = '/img/paw.png';               // 替换成你的猫爪图片路径
  paw.className = 'click-paw';
  paw.style.left = x + 'px';
  paw.style.top = y + 'px';

  document.body.appendChild(paw);

  // 1.2 秒后自动移除
  setTimeout(() => {
    paw.remove();
  }, 1200);
}

// ---- PC 端点击事件 ----
document.addEventListener('click', function (e) {
  createPawPrint(e.clientX, e.clientY);
});

// ---- 移动端点击事件（不跟随滑动，仅响应触摸点击） ----
document.addEventListener('touchend', function (e) {
  const touch = e.changedTouches[0];
  createPawPrint(touch.clientX, touch.clientY);
});


/*
 * 创建一只猫爪印记，并插入页面
 * @param {number} x - 生成位置的横坐标（clientX）
 * @param {number} y - 生成位置的纵坐标（clientY）
 

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
  createPawPrint(e.clientX, e.clientY);});   //PageX/Y 坐标参考系为页面（包括滚动漂移）, ClientX/Y 坐标系为视口（不包含滚动））clientX / clientY 是基于视口的坐标，不受滚动影响，更适合 fixed 定位.

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
*/

/*
//PC端点击
document.addEventListener('click', function (e) {
  const paw = document.createElement('img');
  paw.src = '/img/paw.png'; // 图片路径按你实际的来
  paw.className = 'click-paw';
  paw.style.left = e.pageX + 'px';
  paw.style.top = e.pageY + 'px';
  createPawPrint(e.clientX, e.clientY);});   // PageX/Y 坐标参考系为页面（包括滚动漂移）, ClientX/Y 坐标系为视口（不包含滚动））clientX / clientY 是基于视口的坐标，不受滚动影响，更适合 fixed 定位.

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

*/

/*
let lastTouchX = null, lastTouchY = null;
let lastMouseX = null, lastMouseY = null;

let isMouseDown=false;
document.addEventListener('mousedown', function () {
  isMouseDown = true;
});

document.addEventListener('mouseup', function () {
  isMouseDown = false;
});

const pawSpacing = 30; // 每滑动/移动多少像素生成一个新猫爪

// 判断两个坐标点之间的距离是否足够远
function shouldCreateNewPaw(lastX, lastY, newX, newY) {
  if (lastX === null || lastY === null) return true;
  const dx = newX - lastX;
  const dy = newY - lastY;
  return Math.sqrt(dx * dx + dy * dy) > pawSpacing;
}

// ---------------- 移动端拖尾猫爪 ----------------
document.addEventListener('touchmove', function (e) {
  if(!isMouseDown)
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  if (shouldCreateNewPaw(lastTouchX, lastTouchY, x, y)) {
    createPawPrint(x, y);
    lastTouchX = x;
    lastTouchY = y;
  }
});

// 触摸结束时重置上一次触点
document.addEventListener('touchend', function () {
  lastTouchX = null;
  lastTouchY = null;
});

// ---------------- PC端鼠标拖尾猫爪 ----------------
document.addEventListener('mousemove', function (e) {
  const x = e.clientX;
  const y = e.clientY;

  if (shouldCreateNewPaw(lastMouseX, lastMouseY, x, y)) {
    createPawPrint(x, y);
    lastMouseX = x;
    lastMouseY = y;
  }
});

// 可选：鼠标停止时重置（防止跳跃）
document.addEventListener('mouseleave', function () {
  lastMouseX = null;
  lastMouseY = null;
});*/