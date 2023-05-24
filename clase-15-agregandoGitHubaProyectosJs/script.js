const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);
console.log(input);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
})

h1.innerText = ('Hola Mundo!');

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = '123'

pid.innerHTML = '';
const img = document.createElement('img');
img.setAttribute('src', 'https://thedali.org/wp-content/uploads/2020/07/1200x500-Exhibit-Student-Surrealism-2020-Statewide-1.jpg');
img.setAttribute('width', '400px');
img.setAttribute('height', '400px');
pid.append(img)
