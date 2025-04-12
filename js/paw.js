document.addEventListener('click', function (e) {
    const paw = document.createElement('img');
    paw.src = '/img/paw.png'; // 图片路径按你实际的来
    paw.className = 'click-paw';
    paw.style.left = e.pageX + 'px';
    paw.style.top = e.pageY + 'px';
    document.body.appendChild(paw);

    setTimeout(() => {
        paw.remove();
    }, 800);
});