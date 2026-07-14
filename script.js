// ۱. سیستم کپی کردن آی‌پی سرور در کلیپ‌بورد
document.getElementById('ip-copy-btn').addEventListener('click', function() {
    const ipText = this.getAttribute('data-ip');
    
    navigator.clipboard.writeText(ipText).then(() => {
        const toast = document.getElementById('toast');
        toast.className = "toast-notification show";
        
        setTimeout(() => {
            toast.className = "toast-notification";
        }, 3000);
    }).catch(err => {
        console.error('خطا در کپی آی‌پی: ', err);
    });
});

// ۲. افکت ۳ بعدی روان (Tilt Effect) برای کارت‌های فروشگاه دیزکس لند
const cards = document.querySelectorAll('.rank-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;
        
        const mouseX = e.clientX - cardRect.left - cardWidth / 2;
        const mouseY = e.clientY - cardRect.top - cardHeight / 2;
        
        const rotateX = -(mouseY / cardHeight / 2) * 15;
        const rotateY = (mouseX / cardWidth / 2) * 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
});