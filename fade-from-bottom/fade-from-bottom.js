/* ===============================
    fade-from-bottom
================================= */
// スクロールに合わせて下からふわっとフェードインするアニメーション
// アニメーションさせたい要素に.fade-from-bottomを付与すればOK
// fade-from-bottom用CSSを追加するのは忘れずに

// アニメーション対象要素の取得
const elms = document.querySelectorAll(".fade-from-bottom");

// スクロールに合わせて.fade-from-bottom-animationを付与
const animation = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-from-bottom-animation");
      observer.unobserve(entry.target);
    }
  });
};

// IntersectionObserverのオプション設定
const imageOptions = {
  root: null,
  rootMargin: "-20px 0px",
  threshold: 0,
};

// IntersectionObserverのインスタンス化
const showImage = new IntersectionObserver(animation, imageOptions);

// 取得した要素を1つずつshowImage.observeに渡していく
elms.forEach((elm) => {
  showImage.observe(elm);
});