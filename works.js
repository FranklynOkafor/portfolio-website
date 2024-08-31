// let counter =1;
// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
    
//     if (counter > 4){
//         counter = 1
//     }
// }, 5000);


const menu = document.querySelector('.menu-bars')

const sidebar = document.querySelector('.side-bar')

const navBar = document.querySelector('.nav-List')

console.log(navBar)

function showSidebar() {
    sidebar.style['display'] = 'flex'
}
function hideSideBar() {
    sidebar.style['display'] = 'none'
}


//For Drop down in Work Section


const writeUps = document.querySelectorAll('.workWriteUp')


function closeBlocks(yourArray, yourItem) {
    for (let index = 0; index < yourArray.length; index++) {
        const element = yourArray[index];
        if (yourArray.indexOf(yourItem) != index) {
            element.style['display'] = 'none';
            
        }
        
    }
    
}
const drop = document.querySelector('.dropDown1')
const writeUp1 = document.querySelector('.workWriteUp1')
drop.addEventListener('click', function name() {
    if (writeUp1.style['display'] == 'none') {
        writeUp1.style['display'] = 'block'
        drop.style['margin-bottom'] = '2em'
        // closeBlocks(writeUps, writeUp1)
    } else {
        drop.style['margin-bottom'] = '0em'
        writeUp1.style['display'] = 'none'
    }
    
})


const drop2 = document.querySelector('.dropDown2')
const writeUp2 = document.querySelector('.workWriteUp2')

drop2.addEventListener('click', function name() {
    if (writeUp2.style['display'] == 'none') {
        writeUp2.style['display'] = 'block'
        drop2.style['margin-bottom'] = '2em'
        // closeBlocks(writeUps, writeUp2)
    } else {
        drop2.style['margin-bottom'] = '0em'
        writeUp2.style['display'] = 'none'

    }
    
})


const drop3 = document.querySelector('.dropDown3')
const writeUp3 = document.querySelector('.workWriteUp3')

drop3.addEventListener('click', function name() {
    if (writeUp3.style['display'] == 'none') {
        writeUp3.style['display'] = 'block'
        drop3.style['margin-bottom'] = '2em'
        // closeBlocks(writeUps, writeUp3)
    } else {
        drop3.style['margin-bottom'] = '0em'
        writeUp3.style['display'] = 'none'

    }
    
})















// FOR WORK 2


// let counter2 = 1;
// setInterval(function(){
//     document.getElementById('radio0' + counter2).checked = true;
//     counter2++;
    
//     if (counter2 > 4){
//         counter2 = 1
//     }
// }, 5000);