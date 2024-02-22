let main = document.getElementsByTagName('main');
let header = document.getElementsByTagName('header');
main[0].style.height = window.innerHeight - header[0].clientHeight  + `px`;
console.log(main[0]);