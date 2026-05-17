// 季节性背景图片切换脚本
(function() {
    'use strict';
    
    // 图片配置
    const imageConfig = {
        basePath: '././assets/img/', // 
        images: {
            1: 'SprFes.jpg',  // 1-2月
            2: 'Spring.jpg',  // 3-5月
            3: 'Summer.jpg',  // 6-8月
            4: 'Sunset.jpg',  // 9-11月
            5: 'Xmas.jpg'     // 12月
        }
    };
    
    // 断点配置
    const breakpoint = 767.98;
    
    /**
     * 根据当前月份获取对应的图片编号
     */
    function getImageIndexByMonth() {
        const currentMonth = new Date().getMonth() + 1; // 月份从1开始（1-12）
        
        if (currentMonth >= 1 && currentMonth <= 2) {
            return 1; // 1-2月
        } else if (currentMonth >= 3 && currentMonth <= 5) {
            return 2; // 3-5月
        } else if (currentMonth >= 6 && currentMonth <= 8) {
            return 3; // 6-8月
        } else if (currentMonth >= 9 && currentMonth <= 11) {
            return 4; // 9-11月
        } else if (currentMonth === 12) {
            return 5; // 12月
        }
        
        return 1; // 默认值
    }
    
    /**
     * 获取当前屏幕类型（wide-宽屏，narrow-窄屏）
     */
    function getScreenType() {
        return window.innerWidth > breakpoint ? 'wide' : 'narrow';
    }
    
    /**
     * 构建完整的图片文件名
     * 窄屏图在文件名末尾加V字
     */
    function getImageFileName(imageIndex, screenType) {
        let fileName = imageConfig.images[imageIndex];
        
        // 如果是窄屏，在文件名末尾（扩展名前）添加"V"
        if (screenType === 'narrow') {
            const lastDotIndex = fileName.lastIndexOf('.');
            if (lastDotIndex !== -1) {
                const name = fileName.substring(0, lastDotIndex);
                const extension = fileName.substring(lastDotIndex);
                fileName = name + 'V' + extension;
            }
        }
        
        return fileName;
    }
    
    /**
     * 获取完整的图片路径
     */
    function getImagePath(imageIndex, screenType) {
        const fileName = getImageFileName(imageIndex, screenType);
        return imageConfig.basePath + fileName;
    }
    
    /**
     * 应用背景图片到页面
     */
    function applySeasonalBackground() {
        const imageIndex = getImageIndexByMonth();
        const screenType = getScreenType();
        const imagePath = getImagePath(imageIndex, screenType);
        
        // 获取body元素
        const bodyElement = document.body;
        
        if (!bodyElement) {
            console.error('未找到body元素');
            return;
        }
        
        // 设置背景样式
        bodyElement.style.backgroundImage = `url('${imagePath}')`;
        bodyElement.style.backgroundSize = 'cover';
        bodyElement.style.backgroundRepeat = 'no-repeat';
        bodyElement.style.backgroundAttachment = 'fixed';
        
        // 根据屏幕类型设置背景位置
        if (screenType === 'wide') {
            bodyElement.style.backgroundPosition = 'center 0%';
        } else {
            bodyElement.style.backgroundPosition = 'top';
        }
        
        // 添加平滑过渡效果
        bodyElement.style.transition = 'background-image 0.5s ease-in-out';
        
        console.log(`季节背景已应用: 月份${new Date().getMonth() + 1} -> 图片${imageIndex}, 屏幕类型: ${screenType}, 文件: ${getImageFileName(imageIndex, screenType)}`);
    }
    
    /**
     * 预加载所有图片（包括宽屏和窄屏版本）
     */
    function preloadImages() {
        const imageIndices = Object.keys(imageConfig.images);
        
        imageIndices.forEach(index => {
            // 预加载宽屏图片
            const wideImagePath = imageConfig.basePath + imageConfig.images[index];
            const wideImg = new Image();
            wideImg.src = wideImagePath;
            
            // 预加载窄屏图片（带V后缀）
            const narrowFileName = getImageFileName(parseInt(index), 'narrow');
            const narrowImagePath = imageConfig.basePath + narrowFileName;
            const narrowImg = new Image();
            narrowImg.src = narrowImagePath;
        });
    }
    
    /**
     * 初始化函数
     */
    function initSeasonalBackground() {
        // 预加载图片
        preloadImages();
        
        // 页面加载时立即应用背景
        applySeasonalBackground();
        
        // 监听窗口大小变化
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                applySeasonalBackground();
            }, 250); // 防抖处理，250ms后执行
        });
        
        // 每天检查一次是否需要更新（针对月份变更）
        setInterval(applySeasonalBackground, 24 * 60 * 60 * 1000);
    }
    
    // 页面加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSeasonalBackground);
    } else {
        initSeasonalBackground();
    }
    
})();