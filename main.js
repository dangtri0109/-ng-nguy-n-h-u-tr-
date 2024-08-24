// Hàm thêm hiệu ứng nhấp chuột
function addClickEffect(event) {
    const effect = document.createElement('span');
    effect.className = 'click-effect';
    effect.style.left = `${event.clientX - event.currentTarget.getBoundingClientRect().left}px`;
    effect.style.top = `${event.clientY - event.currentTarget.getBoundingClientRect().top}px`;
    event.currentTarget.appendChild(effect);
    setTimeout(() => effect.remove(), 600); // Xóa hiệu ứng sau 600ms
}

// Hàm thêm hiệu ứng hover cho các mạng xã hội
function addHoverEffect() {
    document.querySelectorAll('.profile-card-social .item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.animation = 'blinkSocial 1s infinite'; // Bật hiệu ứng nhấp nháy khi hover
        });
        item.addEventListener('mouseout', () => {
            item.style.animation = 'none'; // Tắt hiệu ứng nhấp nháy khi không hover
        });
    });
}

// Gọi hàm thêm hiệu ứng nhấp chuột cho profile card
document.querySelector('.profile-card').addEventListener('click', addClickEffect);

// Gọi hàm thêm hiệu ứng hover cho các mạng xã hội
addHoverEffect();
