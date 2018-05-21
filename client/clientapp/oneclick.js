let oneClickBtns = document.getElementsByClassName("oneClickBtn");

Array.from(oneClickBtns).forEach((btn) => {
  btn.addEventListener('click', (e) => {
      document.getElementById(`img${e.target.id}`).src="/images/one.svg";
    }
  )
});

let oneClickCards = document.getElementsByClassName("oneClick");

Array.from(oneClickCards).forEach((card) => {
  card.addEventListener('click', (e) => {
      let imgNumber = +e.target.id.split("img")[1];
      console.log('e',+e.target.id.split("img")[1]);
      document.getElementById(`img${imgNumber}`).src="/images/one.svg";
      $.ajax({
        url:`${location.origin}/savedClick/${imgNumber}`,
        type:'post',
        data:{}
      }).done(()=>{
        window.location.href=`${location.origin}/saved/${imgNumber}`
      })
    }
  )
});