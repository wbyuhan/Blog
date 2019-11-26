---
aa
---
 useEffect(() => {
    // 初始化滚动状态
    let preScrollStatus = scrollStatus;
    // 初始化距离顶部的值
    let scrolHightBefore = 0;
    const onScroll = (e) => {
      window.requestAnimationFrame(() => {
        // 监听滚动事件
        const scrolHight = e.target.scrollTop; // 存储获取到的滚动dom的值
        let up;
        const num = scrolHight - scrolHightBefore;
        if (num >= 1) {
          up = '上滑';
        } else if (num <= -1) {
          up = '下滑';
        }
        console.log('up-->', up);
        console.log('num-->', num);
        const currentScrollStatus = up === '上滑';
        console.log('currentScrollStatus', currentScrollStatus);
        // 实时滚动的值和初始值进行比对，ruru
        scrolHightBefore = scrolHight; // 更新元素之前滚动的高度
        if (currentScrollStatus === preScrollStatus) {
          if (scrolHight < 52 / 375 * innerWidth) {
            console.log('52 / 375 * innerWidth aaa-->', 52 / 375 * innerWidth);
            window.dispatchEvent(isShowImg('下滑'));
          }
          // if (52 / 375 * innerWidth < scrolHight && scrolHight < 100) {
          //   console.log('aaaaa');
          //   window.dispatchEvent(isShowImg(up));
          // }
        } else {
          const aa = 52 / 375 * innerWidth;
          console.log('scrolHight', scrolHight);
          console.log('52 / 375 * innerWidth < scrolHight', aa);
          if (scrolHight < 52 / 375 * innerWidth) return;
          if (52 / 375 * innerWidth < scrolHight && scrolHight < 100) return;
          preScrollStatus = currentScrollStatus; // 更新滚动状态
          setScrollStatus(currentScrollStatus);
          console.log('up--->1', up);
          window.dispatchEvent(isShowImg(up));
        }
      });
    };
    window.addEventListener( // 监听次dom事件
      'scroll', onScroll,
      true
    );
    let startX; let startY; let moveEndX; let moveEndY;
    window.addEventListener('touchstart', (e) => {
      startX = e.changedTouches[0].pageX;
      startY = e.changedTouches[0].pageY;
    }, true);
    window.addEventListener('touchmove', (e) => {
      moveEndX = e.changedTouches[0].pageX;
      moveEndY = e.changedTouches[0].pageY;
      const X = moveEndX - startX;
      const Y = moveEndY - startY;
      console.log('x-->', X);
      console.log('y-->', Y);

      if (Math.abs(X) > Math.abs(Y) && X > 0) {
        console.log('向右滑动');
      } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
        console.log('向左滑动');
      } else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
        console.log('向下滑动');
        window.dispatchEvent(isShowImg('下滑'));
      } else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
        window.dispatchEvent(isShowImg('上滑'));
        console.log('向上滑动');
      } else {
        console('just touch');
      }
    }, true);
  }, []);
  /**
    *  自定义一个imageStatus方法，传递滑动的状态
    * @param {*} up
    */
    const isShowImg = (up = '上滑') => new CustomEvent('imageStatus', {
    // 创建imageStatus事件
      detail: {
        status: up,
      },
      bubbles: true, // 是否冒泡
      cancelable: false, // 是否取消默认事件
    });