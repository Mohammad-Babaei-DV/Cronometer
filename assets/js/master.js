let dm = document.getElementById('m')
let ds = document.getElementById('s')
let dms = document.getElementById('ms')
let start = document.getElementById('start')
let pause = document.getElementById('pause')
let lap = document.getElementById('lap')
let reset = document.getElementById('reset')
let sp = document.getElementById('sp')
let m = 0
let s = 0
let ms = 0
let clearr = null

start.addEventListener('click', (e) => {
    clearr = setInterval(cornometer, 10);
    e.target.setAttribute('disabled', true)
})
pause.addEventListener('click', () => {
    clearInterval(clearr)
    start.removeAttribute('disabled')
})
lap.addEventListener('click', () => {
    let span = document.createElement('span')
    span.innerHTML = 'M: ' + m + '  /   s: ' + s + '  /   ms: ' + ms + ''
    sp.appendChild(span)

})
reset.addEventListener('click', () => {
    start.removeAttribute('disabled')
    clearInterval(clearr)
    m = 0
    s = 0
    ms = 0
    dm.innerHTML=m
    ds.innerHTML=s
    dms.innerHTML=ms
})

function cornometer() {
    if (ms < 99) {
        ms++
        dms.innerHTML = ms
    } else {
        ms = 0
        if (s < 60) {
            s++
            ds.innerHTML = s
        } else {
            s = 0;
            m++
            dm.innerHTML = m

        }
    }
}


