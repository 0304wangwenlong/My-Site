/**
 * main.js - 网站主要的JavaScript功能
 * 包含导航栏效果、滚动动画和技能进度条动画
 */

// ===== 导航栏滚动效果 =====
// 当页面滚动时改变导航栏的背景色，使其更透明
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // 当滚动超过50px时
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)'; // 设置半透明背景
    } else {
        header.style.backgroundColor = 'var(--primary-color)'; // 恢复原始颜色
    }
});

// ===== 平滑滚动效果 =====
// 为所有锚点链接添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // 阻止默认的跳转行为
        // 使用scrollIntoView实现平滑滚动
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // 平滑滚动效果
        });
    });
});

// ===== 技能进度条动画 =====
/**
 * 为技能进度条添加动画效果
 * 初始化时进度条宽度为0，然后动画过渡到实际宽度
 */
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width; // 保存原始宽度
        bar.style.width = '0'; // 设置初始宽度为0
        setTimeout(() => {
            bar.style.width = width; // 延迟300ms后恢复到原始宽度，产生动画效果
        }, 300);
    });
}

// ===== 页面加载完成后初始化 =====
// 当DOM内容加载完成后执行进度条动画
document.addEventListener('DOMContentLoaded', function() {
    animateProgressBars();
}); 