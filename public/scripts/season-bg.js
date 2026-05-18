(function() {
  var month = new Date().getMonth() + 1;
  var bg = '../images/default.jpg';
  var isMobile = window.innerWidth <= 768; // 检测是否为窄屏

  if (month >= 1 && month <= 2) {
    bg = isMobile ? '../images/SprFesV.jpg' : '../images/SprFes.jpg';
  } else if (month >= 3 && month <= 5) {
    bg = isMobile ? '../images/SpringV.jpg' : '../images/Spring.jpg';
  } else if (month >= 6 && month <= 7) {
    bg = isMobile ? '../images/SummerV.jpg' : '../images/Summer.jpg';
  } else if (month >= 8 && month <= 10) {
    bg = isMobile ? '../images/SunsetV.jpg' : '../images/Sunset.jpg';
  } else {
    bg = isMobile ? '../images/XmasV.jpg' : '../images/Xmas.jpg';
  }

  var hero = document.querySelector('.hero');
  if (hero) {
    // 创建或获取背景层
    var bgLayer = hero.querySelector('.hero-bg-layer');
    if (!bgLayer) {
      bgLayer = document.createElement('div');
      bgLayer.className = 'hero-bg-layer';
      hero.insertBefore(bgLayer, hero.firstChild); // 插入到最前面
    }

    // 设置背景层样式（仅作用于背景，不影响内容）
    bgLayer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('${bg}');
      background-size: cover;
      background-position: center;
      z-index: -1; /* 确保在内容下方 */
      pointer-events: none; /* 不拦截鼠标事件 */
    `;

    // 确保hero有相对定位（为绝对定位背景层提供参考）
    hero.style.position = 'relative';
    hero.style.zIndex = '0';
  }

  window.addEventListener('resize', function() {
    var newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
      isMobile = newIsMobile;
      // 重新选择图片
      if (month >= 1 && month <= 2) {
        bg = isMobile ? '../images/SprFesV.jpg' : '../images/SprFes.jpg';
      } else if (month >= 3 && month <= 5) {
        bg = isMobile ? '../images/SpringV.jpg' : '../images/Spring.jpg';
      } else if (month >= 6 && month <= 7) {
        bg = isMobile ? '../images/SummerV.jpg' : '../images/Summer.jpg';
      } else if (month >= 8 && month <= 10) {
        bg = isMobile ? '../images/SunsetV.jpg' : '../images/Sunset.jpg';
      } else {
        bg = isMobile ? '../images/XmasV.jpg' : '../images/Xmas.jpg';
      }
      
      // 更新背景层
      if (bgLayer) {
        bgLayer.style.backgroundImage = `url('${bg}')`;
      }
    }
  });
})();