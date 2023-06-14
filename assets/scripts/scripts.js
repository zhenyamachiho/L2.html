function addname(){
        let firstname = prompt("Введите имя");
        alert(firstname)
        }
        
addname()

let count = 0;
function getRandomColor() {
    let color = '#';
    let variant = '0123456789ABCDEF';
    
    for (let i = 0; i < 6; i++) {
        color += variant[Math.floor(Math.random() * 16)];
    }
    return color;
}
function chanchedColor() {
    let box = document.getElementById('btn');
    let element = box[0];
    let randColor = getRandomColor();
    element.style.cssText=`background-color: ${randColor};`;
}

document.querySelector('button').addEventListener('click', event => {
    event.target.style.backgroundColor = getRandomColor()
  })

