// let btnOpen = document.querySelector('#openBtn');
// let btnClose = document.querySelector('#closeBtn');
// let modalContent = document.querySelector('.modal-content');

// btnOpen.onclick = function () {
//  modal.classList.add('active');   
// }

let modal = document.getElementById("modal");
// let btnOpen = document.getElementById('btnOpen');
document.getElementById("btnOpen").onclick = () => modal.classList.add("active");
document.getElementById("btnClose").onclick = () => modal.classList.remove("active");
window.onclick = (e) => { 
   if  (e.target === modal) modal.classList.remove("active");
};

// document.getElementById('btnOpen')


// .onclick = () => modal.classList.add('active');

// window.addEventListener('click', (e) =>{
// if (e.target === modale){
//     modal.style.display = "none";
// }
// })