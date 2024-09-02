const menus=document.querySelectorAll('.list-item');
menus.forEach(menu =>{
  menu.addEventListener('click',(e)=>{
    //親要素を取得
    const conten=e.currentTarget.nextElementsibling;
    //子要素を取得
    const text=conten.children[0];
    //子要素の高さを取得して親要素に代入
    const textHeight=text.offsetHeight;
    conten.style.height=textHeight+'px';

    //ボタンの親要素にopenクラスを付け外し
    const parentMenu=e.currentTarget.parentNode;
    parentMenu.classList.toggle('open');

    //条件分岐で開閉
    if(parentMenu.classList.contains('open')){
      conten.style.heigh=textHeight+'px';
    }else{
      conten.style.height=0;
    }
  });
});

