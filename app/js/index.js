const path = require('path');
const {ipcRenderer} = require('electron')

// 关闭app
document.querySelector('.close').addEventListener('click', () => {
    ipcRenderer.send('close-app') 
})

// 弹出设置窗口
document.querySelector('.settings').addEventListener('click', () => {
    document.querySelector('.bg').style.display = 'block'
    document.querySelector('.bg').style.animation = '.5s fadeIn'
})

// 关闭设置窗口
document.querySelector('.close-settings').addEventListener('click', () => {
    document.querySelector('.bg').style.display = 'none';
    
})

var btns = document.getElementsByClassName('sound-btn');
for (var i = 0; i < btns.length; i++) {
    console.log(btns[i].attributes["data-sound"].value);
    var soundBtn = btns[i];
    var soundName = btns[i].attributes["data-sound"].value
    var audio = new Audio(__dirname + '/app/wav/' + soundName + '.wav');
    btns[i].addEventListener('click', function () {
        console.log(1)
        audio.currentTime = 0;
        audio.play();
    });
}