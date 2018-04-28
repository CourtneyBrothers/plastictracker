
document.getElementById("showLogin").addEventListener('click', () => {
  console.log('Wow, that worked!', location.origin);
  location.href = `${location.origin}/login`;
});

document.getElementById("showRegister").addEventListener('click', () => {
  location.href = `${location.origin}/register`;
});


document.getElementById("submit").addEventListener('click', () => {
  location.href = `${location.origin}/savedplastic`
});

document.getElementById("notSavedSubmit").addEventListener('click', () => {
  location.href = `${location.origin}/notsavedplastic`
});