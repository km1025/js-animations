const menus=document.querySelectorAll('.list-item');
menus.forEach(menu =>{
  menu.addEventListener('click',()=>{
    //親要素を取得
    const content=menu.querySelector('.list-content');
    
    content.classList.toggle('open');
    //条件分岐で開閉
    if(content.classList.contains('open')){
      content.style.height=content.scrollHeight+'px';
    }else{
      content.style.height=0;
    }
  });
});

