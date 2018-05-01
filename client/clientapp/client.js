
document.getElementById("showLogin").addEventListener('click', () => {
  console.log('Wow, that worked!', location.origin);
  location.href = `${location.origin}/login`;
});

document.getElementById("showRegister").addEventListener('click', () => {
  location.href = `${location.origin}/register`;
});


// document.getElementById("submit").addEventListener('click', () => {
//   console.log("quantity",document.getElementById("quantity").value)
//   location.href = `${location.origin}/stats`
// });

// document.getElementById("notSavedSubmit").addEventListener('click', () => {
//   location.href = `${location.origin}/notsavedplastic`
// });