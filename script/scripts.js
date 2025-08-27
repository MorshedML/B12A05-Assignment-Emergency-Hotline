// Heart Count
const heartIcons = document.getElementsByClassName('heart-icon');

for(const heartIcon of heartIcons){
    heartIcon.addEventListener('click',function(){
        const heartCount = document.getElementById('heart-count').innerText;
        const newHeartCount = Number(heartCount) +1;

        document.getElementById('heart-count').innerText = newHeartCount;
    })
}

