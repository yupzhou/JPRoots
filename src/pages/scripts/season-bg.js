(function() {
  var month = new Date().getMonth() + 1;
  var bg = '/api/images/default.jpg';  // ✅ 直接使用 API 路径
  var isMobile = window.innerWidth <= 768;

  if (month >= 1 && month <= 2) {
    bg = isMobile ? '/api/images/SprFesV.jpg' : '/api/images/SprFes.jpg';
  } else if (month >= 3 && month <= 5) {
    bg = isMobile ? '/api/images/SpringV.jpg' : '/api/images/Spring.jpg';
  } else if (month >= 6 && month <= 7) {
    bg = isMobile ? '/api/images/SummerV.jpg' : '/api/images/Summer.jpg';
  } else if (month >= 8 && month <= 10) {
    bg = isMobile ? '/api/images/SunsetV.jpg' : '/api/images/Sunset.jpg';
  } else {
    bg = isMobile ? '/api/images/XmasV.jpg' : '/api/images/Xmas.jpg';
  }

  var hero = document.querySelector('.hero');
  if (hero) {
    var bgLayer = hero.querySelector('.hero-bg-layer');
    if (!bgLayer) {
      bgLayer = document.createElement('div');
      bgLayer.className = 'hero-bg-layer';
      hero.insertBefore(bgLayer, hero.firstChild);
    }

    bgLayer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('${bg}');
      background-size: cover;
      background-position: center;
      z-index: -1;
      pointer-events: none;
    `;

    hero.style.position = 'relative';
    hero.style.zIndex = '0';
  }

  window.addEventListener('resize', function() {
    var newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
      isMobile = newIsMobile;
      if (month >= 1 && month <= 2) {
        bg = isMobile ? '/api/images/SprFesV.jpg' : '/api/images/SprFes.jpg';
      } else if (month >= 3 && month <= 5) {
        bg = isMobile ? '/api/images/SpringV.jpg' : '/api/images/Spring.jpg';
      } else if (month >= 6 && month <= 7) {
        bg = isMobile ? '/api/images/SummerV.jpg' : '/api/images/Summer.jpg';
      } else if (month >= 8 && month <= 10) {
        bg = isMobile ? '/api/images/SunsetV.jpg' : '/api/images/Sunset.jpg';
      } else {
        bg = isMobile ? '/api/images/XmasV.jpg' : '/api/images/Xmas.jpg';
      }
      
      if (bgLayer) {
        bgLayer.style.backgroundImage = `url('${bg}')`;
      }
    }
  });
})();