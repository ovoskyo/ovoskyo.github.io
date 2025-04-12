function createPawPrint(x, y) {
    const paw = document.createElement('img');
    paw.src = '/img/paw.png'; // 猫爪图片路径
    paw.className = 'click-paw';
    paw.style.left = x + 'px';
    paw.style.top = y + 'px';
    document.body.appendChild(paw);

    setTimeout(() => {
        paw.remove();
    }, 800); // 动画持续时间一致
}


//PC端点击
document.addEventListener('click', function (e) {
    /*const paw = document.createElement('img');
    paw.src = '/img/paw.png'; // 图片路径按你实际的来
    paw.className = 'click-paw';
    paw.style.left = e.pageX + 'px';
    paw.style.top = e.pageY + 'px';*/
    createPawPrint(e.pageX, e.pageY);});

//移动端触摸
document.addEventListener('touchstart', function (e) {
    const touch = e.touches[0]; // 取第一个触点
    createPawPrint(touch.pageX, touch.pageY);});
    
