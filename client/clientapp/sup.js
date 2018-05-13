console.log('hi');
console.log(document.getElementsByClassName("reuseBtn"), "class");
let reuseBtns = document.getElementsByClassName("reuseBtn");

Array.from(reuseBtns).forEach((btn) => {
  console.log(btn, "btn")
  btn.addEventListener('click', (e) => {
      console.log(e, "event")
      console.log((e.target.id), "id");
      document.getElementById(`sup${e.target.id}`).src="/images/wave.svg";
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
    }
  )
});