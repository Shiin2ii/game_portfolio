# 🎮 Game Portfolio - Trải Nghiệm Portfolio Tương Tác
REVIEW: https://game-portfolio-azure.vercel.app/
#Một website portfolio độc đáo với theme game/phiêu lưu, biến việc xem CV thành một cuộc phiêu lưu thú vị!

## ✨ Tính Năng Đặc Biệt

### 🎯 Game-like Experience
- **Loading Screen**: Màn hình tải game với progress bar
- **Level System**: Mỗi section là một level khác nhau
- **Progress Bar**: Thanh tiến độ theo dõi hành trình
- **Sound Effects**: Âm thanh tương tác (có thể bật/tắt)
- **Character Stats**: Thống kê nhân vật game

### 🎨 Visual Effects
- **Glitch Text**: Hiệu ứng text glitch cho tên
- **Typing Animation**: Text tự động gõ
- **Parallax Scrolling**: Hiệu ứng cuộn mượt mà
- **Particle System**: Hạt bay lơ lửng
- **Mouse Trail**: Vệt chuột phát sáng
- **Hover Effects**: Hiệu ứng khi di chuột

### 🎪 Interactive Elements
- **Navigation**: Menu game với icons
- **Skill Bars**: Thanh kỹ năng tự động tăng
- **Timeline**: Lịch sử công việc như quest log
- **Project Cards**: Thẻ dự án với hover effects
- **Easter Egg**: Konami Code (↑↑↓↓←→←→BA)

## 🚀 Cách Sử Dụng

### Mở File
1. Tải tất cả files về máy
2. Mở `index.html` bằng trình duyệt web
3. Thưởng thức trải nghiệm game portfolio!

### Tùy Chỉnh Nội Dung
1. **Thông tin cá nhân**: Sửa trong `index.html`
   - Tên, tuổi, vị trí
   - Mô tả bản thân
   - Thông tin liên hệ

2. **Kỹ năng**: Cập nhật trong section skills
   - Thêm/bớt kỹ năng
   - Điều chỉnh % thành thạo

3. **Kinh nghiệm**: Sửa timeline trong section experience
   - Thêm công việc mới
   - Cập nhật mô tả

4. **Dự án**: Thay đổi trong section projects
   - Thêm hình ảnh dự án
   - Cập nhật link demo
   - Thay đổi công nghệ sử dụng

## 🎨 Customization

### Màu Sắc
Thay đổi màu chính trong `styles.css`:
```css
:root {
    --primary-color: #00ff88;    /* Màu xanh chính */
    --secondary-color: #ff0088;  /* Màu hồng phụ */
    --accent-color: #00ffff;     /* Màu xanh nhạt */
}
```

### Hình Ảnh
- Avatar: Thay thế placeholder trong hero section
- Project images: Thay thế placeholder trong projects section

### Âm Thanh
- Bật/tắt bằng nút speaker ở góc phải trên
- Tùy chỉnh âm thanh trong `script.js`

## 🛠️ Cấu Trúc Files

```
portfolio/
├── index.html      # File HTML chính
├── styles.css      # Styling và animations
├── script.js       # JavaScript tương tác
└── README.md       # Hướng dẫn này
```

## 🎮 Game Features Chi Tiết

### Level System
- **Level 1**: Hero/Start - Giới thiệu
- **Level 2**: About - Thông tin cá nhân
- **Level 3**: Skills - Kỹ năng
- **Level 4**: Experience - Kinh nghiệm
- **Level 5**: Projects - Dự án
- **Level 6**: Contact - Liên hệ

### Sound Effects
- Click sounds khi tương tác
- Hover sounds khi di chuột
- Level up sounds khi chuyển section
- Appear sounds khi element xuất hiện

### Easter Eggs
- **Konami Code**: ↑↑↓↓←→←→BA để kích hoạt Matrix mode
- **Character Click**: Click vào avatar để animation
- **Mouse Trail**: Vệt chuột phát sáng

## 📱 Responsive Design

Website tương thích với tất cả thiết bị:
- 💻 Desktop (1024px+)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (480px - 768px)
- 📱 Small Mobile (<480px)

## 🌟 Tips Sử Dụng

1. **Scroll mượt**: Sử dụng scroll wheel hoặc navigation menu
2. **Tắt âm thanh**: Click icon speaker nếu cần im lặng
3. **Mobile**: Swipe để navigate trên thiết bị di động
4. **Performance**: Website tối ưu cho tốc độ tải nhanh

## 🔧 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 📝 License

Free to use và customize cho mục đích cá nhân!

---

**Chúc bạn có trải nghiệm portfolio game thú vị! 🎮✨**
