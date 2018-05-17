console.log('hi');
console.log(document.getElementsByClassName("reuseBtn"), "class");
let reuseBtns = document.getElementsByClassName("reuseBtn");

Array.from(reuseBtns).forEach((btn) => {
  console.log(btn, "btn")
  btn.addEventListener('click', (e) => {
      console.log(e, "event")
      console.log((e.target.id), "id");
      document.getElementById(`sup${e.target.id}`).src="/images/002-water.svg";
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

let deleteBtns = document.getElementsByClassName("deleteBtn");
Array.from(deleteBtns).forEach((btn) => {
  console.log(btn, "btn")
  btn.addEventListener('click', (e) => {
      console.log(e, "event")
      console.log((e.target.id), "id");
      document.getElementById(`card${e.target.id}`).style.display="none";
      fetch(`/delete/${e.target.id}`,{
        method:'delete',
        credentials:'inlcude'
      })
      .then(function(response){
        return response;
      })
      .catch(err => {
        console.log(err,"error on delete button")
      })
    }
  )
});


let deleteSavedBtns = document.getElementsByClassName("deleteSavedBtn");
Array.from(deleteSavedBtns).forEach((btn) => {
  console.log(btn, "btn")
  btn.addEventListener('click', (e) => {
      console.log(e, "event")
      console.log((e.target.id), "id");
      document.getElementById(`card${e.target.id}`).style.display="none";
      fetch(`/deletesaved/${e.target.id}`,{
        method:'delete',
        credentials:'inlcude'
      })
      .then(function(response){
        return response;
      })
      .catch(err => {
        console.log(err,"error on delete button")
      })
    }
  )
});