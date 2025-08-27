// Heart Count
const heartIcons = document.getElementsByClassName('heart-icon');

for(const heartIcon of heartIcons){
    heartIcon.addEventListener('click',function(){
        const heartCount = document.getElementById('heart-count').innerText;
        const newHeartCount = Number(heartCount) +1;

        document.getElementById('heart-count').innerText = newHeartCount;
    })
}


// Call Function
const callBtns = document.getElementsByClassName('call-btn');

for(const callBtn of callBtns){


    callBtn.addEventListener('click',function(){
        
        const callCoin = document.getElementById('call-coin').innerText;

        const serviceTitle =  callBtn.parentNode.parentNode.children[0].innerText;

        const serviceNumber = callBtn.parentNode.parentNode.children[2].innerText

        if(callCoin < 20){
            alert('❌ You don\'t have enough coins. If you want to call you need minimum 20 coins.');
            return;
        }

        const newCallCoin = Number(callCoin) - 20;;

        
        alert(`📞 Calling ${serviceTitle} ${serviceNumber}...`)
        
        document.getElementById('call-coin').innerText = newCallCoin;

        const callHistory = document.getElementById('call-history-part2');

        const callHistoryCreate = document.createElement('div');

        callHistoryCreate.innerHTML = `
            <div class="card-item bg-[#fafafa] rounded-lg p-5 flex justify-between items-center mt-4">

                <div class="w-2/3">
                    <h2 class="font-semibold text-lg">${serviceTitle} </h2>
                    <p class="text-[#5c5c5c]">${serviceNumber}</p>
                </div>

                <div >
                    <p class="text-[#111111] text-lg ">${ new Date().toLocaleTimeString() }</p> 
                </div>
            </div>
        `;

        callHistory.appendChild(callHistoryCreate);

    })    
}



document.getElementById('clear-history').addEventListener('click',function(){
    document.getElementById('call-history-part2').innerHTML = '';
});

