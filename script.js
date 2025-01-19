document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const navItems = document.querySelectorAll('.nav-dots li');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;

    function goToSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        navItems.forEach(item => item.classList.remove('active'));
        
        slides[index].classList.add('active');
        navItems[index].classList.add('active');
        currentSlide = index;
    }

    // 导航点击事件
    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(index);
        });
    });

    // 上下按钮事件
    prevBtn.addEventListener('click', () => {
        const newIndex = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
        goToSlide(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        goToSlide(newIndex);
    });

    // 键盘控制
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') prevBtn.click();
        if (e.key === 'ArrowDown') nextBtn.click();
    });

    // 鼠标滚轮控制
    document.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            nextBtn.click();
        } else {
            prevBtn.click();
        }
    }, { passive: true });
}); 