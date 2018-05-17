
document.getElementById("swapReuse").addEventListener('click',()=>{
  document.getElementById("drink").src="/images/002-water.svg";
  document.getElementById("reused").innerHTML="total reused: 1";
})

document.getElementById("swapRecycle").addEventListener('click',()=>{
  document.getElementById("drink").src="/images/recycle-bin.svg";
  document.getElementById("recycled").innerHTML="total recycled: 1";
})

document.getElementById("my700btn").addEventListener('click',()=>{
  document.getElementById("drink1").src="/images/wave.svg";
  document.getElementById("text700").innerHTML="My 700:<br> 466";
})