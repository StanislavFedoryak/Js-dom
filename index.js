const link = document.querySelector('a');
link.textContent = 'Youtube';
link.href = 'https://www.youtube.com/'


const sect = document.querySelector('section');
const para = document.createElement('p');
sect.appendChild(para);
para.innerText = 'Catty Catty Cat.';


const text = document.createTextNode(' its beatiful cat!');
const linkpara = document.querySelector('p');
linkpara.appendChild(text);

const linkparaclone = linkpara.cloneNode(true);
sect.appendChild(linkparaclone);


const btn = document.querySelector('.clickme');
btn.addEventListener('click', buttonClicked);
function buttonClicked() {
    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        clockContainer.innerText = (new Date()).toLocaleTimeString();
    
    }
    setInterval(updateClock, 1000);
}





// for (let i = 1; i <= 100; i++) {
//     const newPara = document.createElement('p')
//     newPara.innerText = i;
//     sect.appendChild(newPara)
// }