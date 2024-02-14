/* ===============================
		cover-slide
================================= */
//スクロールに合わせて画像にカバースライドアニメーションを付与する
// .cover-slide > img.slide-image のHTML構造を想定
// .cover-slideにカバーの向きをクラスで付与する
// 付与するのはsfrom-upper、sfrom-right、sfrom-bottom、sfrom-left
// scssファイルの$durationでアニメーションの長さを、
// $cover-colorでカバーの色を設定可能

// アニメーション対象要素の取得
const slide_elms = document.querySelectorAll(".cover-slide");

// スクロールに合わせて.inviewを付与
const cover_slide_animation = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
      observer.unobserve(entry.target);
    }
  });
};

// IntersectionObserverのオプション設定
const slideOptions = {
  root: null,
  rootMargin: "-20px 0px",
  threshold: 0,
};
// IntersectionObserverのインスタンス化
const slideAnime = new IntersectionObserver(cover_slide_animation, slideOptions);

// 取得した要素を１つずつslideAnimeに渡す
slide_elms.forEach((elm) => {
  slideAnime.observe(elm);
});
