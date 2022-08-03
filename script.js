const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => { // test time between clicks. if less than 800ms consider as double click
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    //Exact location clicked by client relative to the entire viewport
    const x = e.clientX
    const y = e.clientY
    // console.log(x,y);
    //get offset from left and top to image
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    // Exact loaction clicked in the image
    const xInside = x - leftOffset
    const yInside = y - topOffset
    // console.log(xInside, yInside);
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}