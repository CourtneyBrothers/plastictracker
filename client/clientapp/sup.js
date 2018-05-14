console.log('hi');
console.log(document.getElementsByClassName("reuseBtn"), "class");
let reuseBtns = document.getElementsByClassName("reuseBtn");

Array.from(reuseBtns).forEach((btn) => {
  console.log(btn, "btn")
  btn.addEventListener('click', (e) => {
      console.log(e, "event")
      console.log((e.target.id), "id");
      document.getElementById(`sup${e.target.id}`).src="/images/wave.svg";
      $.ajax({
        url:`${location.origin}/reuse/${e.target.id}`,
        type:'post',
        data:{}
      })
    }
  )
});

let recycleBtns = document.getElementsByClassName("recycleBtn");
Array.from(recycleBtns).forEach((btn) => {
  console.log(btn, "btn")
  btn.addEventListener('click', (e) => {
      console.log(e, "event")
      console.log((e.target.id), "id");
      document.getElementById(`sup${e.target.id}`).src="/images/recycle-bin.svg";
      $.ajax({
        url:`${location.origin}/recycle/${e.target.id}`,
        type:'post',
        data:{}
      })
    }
  )
});