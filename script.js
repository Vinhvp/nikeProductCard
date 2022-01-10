let card_function = document.querySelectorAll('.card-function');

let color = document.querySelectorAll('.card-color');
let size = document.querySelectorAll('.card-size');
let action = document.querySelectorAll('.card-action');
let card = document.querySelectorAll('.card')
let card_img = document.querySelectorAll('.card-img')
// card_function sẽ có các childNodes và từng childeNodes là các node nhỏ bên trong
// card_function.forEach(e=>{
//     for (let i = 1; i < e.childNodes.length ; i +=2){ // phải += 2 vì từng class nó nằm xen kẽ
//         e.childNodes[i].classList.remove('active');
//     }
// })

// console.log(e.children.length);
// mỗi parent sẽ có các children ta lấy classList của từng children và xoá
card_function.forEach(e=>{
    for (let i = 0; i < e.children.length; i++){
        e.children[i].classList.remove('active');
    }
})
card_img.forEach(e => e.classList.remove('active'));

// card.addEventListener('mouseover', ()=>{
//     color.classList.add('active');
//     size.classList.add('active');
//     action.classList.add('active');
//     card_img.classList.add('active');
// })

// card.addEventListener('mouseleave', ()=>{
//     color.classList.remove('active');
//     size.classList.remove('active');
//     action.classList.remove('active');
//     card_img.classList.remove('active')
// })

card.forEach((e,i) => e.addEventListener('mouseover',()=>{
    color[i].classList.add('active');
    size[i].classList.add('active');
    action[i].classList.add('active');
    card_img[i].classList.add('active');
}));

card.forEach((e,i) => e.addEventListener('mouseleave',()=>{
    color[i].classList.remove('active');
    size[i].classList.remove('active');
    action[i].classList.remove('active');
    card_img[i].classList.remove('active')
}));


