//ページを読み込んだ時に関数処理を実行する設定
document.addEventListener("DOMContentLoaded", () => {
  handleScrollIn();
});
//boxes-wrapper内の全ての要素を取得
const handleScrollIn = () => {
  const targets = document.querySelectorAll(".boxes-wrapper");

  //IntersectionObserverの動作指定
  const options = {
    root: null,
    rootMargin: "-20% 0px",
    threshold: [0]
  };
//交差時に実行されるコールバック
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        //一度アニメーションが適用されたら監視を外す
        observer.unobserve(entry.target);
      }
    });
    };
//IntersectionObserverのインスタンス化
    const observer = new IntersectionObserver(callback, options);

    target.forEach((target) => {
      observer.observe(target);
      });
    };

