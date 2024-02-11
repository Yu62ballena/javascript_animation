/* ===============================
    fade-from-bottom
================================= */
// スクロールに合わせてフェードインさせるアニメーション
// アニメーションさせたい対象の要素にfadeInのクラスを振る
// 合わせてonly-fadeIn, from-bottom, from-upper,
// from-left, from-rightをクラスに振ることで
// 動きの向きを設定することが出来る
// 動きの量はscss内の$pattern内の数値をカスタマイズすることで可能

// アニメーション対象要素の取得
const elms = document.querySelectorAll(".fadeIn");

// スクロールに合わせて.fade-from-bottom-animationを付与
const animation = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn-animation");
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
