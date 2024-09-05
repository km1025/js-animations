//ページを読み込んだ時に関数処理を実行する設定
document.addEventListener("DOMContentLoaded", () => {
  handleScrollIn();
});

//boxクラスを持つ全ての要素の取得
const handleScrollIn = () => {
  const targets = document.querySelectorAll(".box");

  //IntersectionObserverの動作指定
  const options = {
    threshold: [0]
  };

//交差時に実行されるコールバック
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("displayed");
//一度アニメーションが適用されたら監視を外す
        observer.unobserve(entry.target);
      }
    });
    };

//IntersectionObserverのインスタンス化
    const observer = new IntersectionObserver(callback, options);

//監視する対象の登録
    targets.forEach((box) => {
      observer.observe(box);
      });
    };
