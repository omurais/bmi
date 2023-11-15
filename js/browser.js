'use strict';
{
  document.querySelectorAll('a[href^="#"]').forEach(e => e.addEventListener('click', function(e){
  
    //a要素のクリックイベントをキャンセル。
    e.preventDefault();
  
    //a要素が持つhref属性の値を取得。（#content1のように先頭に#が付いた状態で取得される。）
    let target = e.target.getAttribute("href");
  
    //指定した要素までの距離を取得。
    let targetTop = document.querySelector(target).getBoundingClientRect().top + window.scrollY;

    let scrollOptions = {
      left: 0,
      top: targetTop,
      behavior: 'smooth',
    }
  
    //指定した要素へスクロールする。
    window.scrollTo(scrollOptions);
  }));
}