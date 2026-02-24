
let interviewArr = [];
let rejectArr = [];
let currentStatus = 'allmainBtn';


let hideTotal=document.getElementById('hideTotal');
let hideInt =document.getElementById('hideInt');
let hideReject=document.getElementById('hideReject');


const main = document.querySelector('main');

const filteredCard = document.getElementById('filteredCard');

let total = document.getElementById('totalNumber');
let total2 = document.getElementById('totalNumber2');
let interviewTotal = document.getElementById('interviewTotal');
let interviewTotal1 = document.getElementById('interviewTotal1');
let rejectTotal = document.getElementById('rejTotal');
let rejectTotal1 = document.getElementById('rejTotal1');
const allcards = document.getElementById('allCards');

function calculateCount() {
    total.innerText = (allcards.children.length);
    interviewTotal.innerText = interviewArr.length;
    interviewTotal1.innerText = interviewArr.length;
    rejectTotal.innerText = rejectArr.length;
    rejectTotal1.innerText = rejectArr.length;
    total2.innerText= (allcards.children.length);
}
calculateCount();


const allFilterBtn = document.getElementById("allmainBtn");
const intFilterBtn = document.getElementById("intmainBtn");
const rejFilterBtn = document.getElementById("rejmainBtn");
const getFiler = document.getElementById('filteredCard');
const getFilerRej = document.getElementById('filteredCardRej');
const noCardInt =document.getElementById('noCardInt');
const noCardRej=document.getElementById('noCardRej');
const deleteBtn = document.getElementById('deleteBtn');

function toggleStyle(id) {


    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    intFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejFilterBtn.classList.remove('bg-blue-500', 'text-white');

    allFilterBtn.classList.add('bg-slate-200', 'text-blue-500');
    intFilterBtn.classList.add('bg-slate-200', 'text-blue-500');
    rejFilterBtn.classList.add('bg-slate-200', 'text-blue-500');
    const selected = document.getElementById(id);
    currentStatus = id;

    console.log(selected);
    selected.classList.remove('bg-slate-200', 'text-blue-500');
    selected.classList.add('bg-blue-500', 'text-white');

    if (id == 'intmainBtn') {
        hideTotal.classList.add('hidden');
        hideReject.classList.add('hidden');
        hideInt.classList.remove('hidden');
        allcards.classList.add('hidden');
        getFiler.classList.remove('hidden');
        getFilerRej.classList.add('hidden');
        


        if(interviewArr.length==0){
            noCardInt.classList.remove('hidden');
            
        }
        pushObject();
    }

    else if (id == 'rejmainBtn') {
          hideTotal.classList.add('hidden');
        hideReject.classList.remove('hidden');
        hideInt.classList.add('hidden');
        allcards.classList.add('hidden');
        getFiler.classList.add('hidden');
        getFilerRej.classList.remove('hidden');
        if(rejectArr.length==0){
            noCardRej.classList.remove('hidden');
            
        }
        pushObjectRej();
    }

    else if (id == 'allmainBtn') {
          hideTotal.classList.remove('hidden');
        hideReject.classList.add('hidden');
        hideInt.classList.add('hidden');
        allcards.classList.remove('hidden');
        getFiler.classList.add('hidden');
        getFilerRej.classList.add('hidden');
    }


 




}
main.addEventListener('click', function (event) {

    const interviewBtn = event.target.closest('.interviewBtnclass');
    const rejectBtnClass = event.target.closest('.rejectBtnClass');
     const deleteBtnClass = event.target.closest('.deleteBtnClass');

    if (interviewBtn) {

        console.log('Interview clicked');
        const parentNode = event.target.parentNode;
        // style 
        const statasS = parentNode.querySelector('.statas')
        statasS.classList.remove('bg-blue-100', 'bg-red-50');
        statasS.classList.add('bg-green-50');
        statasS.classList.add('text-black');
        // border add
        parentNode.querySelector('.statas').innerText = 'Interviewed';
        const jobPlace = parentNode.querySelector('.jobPlace').innerText;
        const jobWork = parentNode.querySelector('.jobWork').innerText;
        const jobDetails = parentNode.querySelector('.jobDetails').innerText;
        const statas = parentNode.querySelector('.statas').innerText;
        const nodes = parentNode.querySelector('.nodes').innerText;

        console.log(jobPlace, jobWork, jobDetails, statas, nodes);
        const cardInfo = {
            jobPlace,
            jobWork,
            jobDetails,
            statas: 'Interviewed',
            nodes
        }

        const jobis = interviewArr.find(iteam => iteam.jobPlace == cardInfo.jobPlace);
        parentNode.querySelector('.statas').innerText = 'Interviewed';
        if (!jobis) {
            interviewArr.push(cardInfo);
            console.log(interviewArr);
        }


        rejectArr = rejectArr.filter(iteam => iteam.jobPlace != cardInfo.jobPlace);

        if (currentStatus == 'rejmainBtn') {
            pushObjectRej();
        }

        calculateCount();

    }
    else if (rejectBtnClass) {
        console.log('Rejected clicked');

        const parentNode = event.target.parentNode;
        //   style
        const statasS = parentNode.querySelector('.statas')
        statasS.classList.remove('bg-blue-100', 'bg-green-50');
        statasS.classList.add('bg-red-50');
        statasS.classList.add('text-black');
      
    //   inter.classList.remove('border-l-4','border-green-500')
    //  inter.classList.add('border-l-4','border-red-500');
        // finish
        parentNode.querySelector('.statas').innerText = 'Rejected';
        const jobPlace = parentNode.querySelector('.jobPlace').innerText;
        const jobWork = parentNode.querySelector('.jobWork').innerText;
        const jobDetails = parentNode.querySelector('.jobDetails').innerText;
        const statas = parentNode.querySelector('.statas').innerText;
        const nodes = parentNode.querySelector('.nodes').innerText;

        console.log(jobPlace, jobWork, jobDetails, statas, nodes);
        const cardInfo = {
            jobPlace,
            jobWork,
            jobDetails,
            statas: 'Rejected',
            nodes
        }

        const jobisRej = rejectArr.find(iteam => iteam.jobPlace == cardInfo.jobPlace);
        parentNode.querySelector('.statas').innerText = 'Rejected';
        if (!jobisRej) {
            rejectArr.push(cardInfo);
            console.log(rejectArr);
        }

        interviewArr = interviewArr.filter(iteam => iteam.jobPlace != cardInfo.jobPlace);
       calculateCount();

// If we are in Interview tab → refresh interview list
if (currentStatus === "intmainBtn") {
    pushObject();
}

// If we are in Reject tab → refresh reject list
if (currentStatus === "rejmainBtn") {
    pushObjectRej();
}
        calculateCount();


    }

   if (deleteBtnClass) {

    const card = deleteBtnClass.closest('.cards');

    const jobPlace = card.querySelector('.jobPlace').innerText;

    // Remove from Interview Array
    interviewArr = interviewArr.filter(item => item.jobPlace !== jobPlace);

    // Remove from Reject Array
    rejectArr = rejectArr.filter(item => item.jobPlace !== jobPlace);

    // Remove from DOM (All Section)
    card.remove();

    // Update counts
    calculateCount();

    // Refresh filtered sections if active
    if (currentStatus === 'intmainBtn') {
        pushObject();
    }
    if (currentStatus === 'rejmainBtn') {
        pushObjectRej();
    }
}


});


function pushObject() {
    // filteredCard.innerHTML = '';
     const cards = filteredCard.querySelectorAll('.cards');
    cards.forEach(card => card.remove());
       if (interviewArr.length === 0) {
        noCardInt.classList.remove('hidden');
        return;
    } else {
        noCardInt.classList.add('hidden');
    }

    for (let arr of interviewArr) {
        console.log(arr);
        let div = document.createElement('div');
        div.className = 'cards flex justify-between p-3 shadow mt-2';
        div.innerHTML = `
     <div class="space-y-4">
                    <p class="jobPlace">${arr.jobPlace}</p>
                    <p class="jobWork">${arr.jobWork}</p>
                    <p class="jobDetails">${arr.jobDetails}</p>
                   <div id="statas" class="statas p-[10px] max-w-[110px] rounded-md 
${arr.statas === 'Interviewed' ? 'bg-green-50 text-black':
                arr.statas === 'Rejected' ? 'bg-red-50 text-black' :
                    'bg-blue-100'}">${arr.statas}</div>
                    <p class="nodes">Create stunning web experiences for high-profile clients. Must have portfolio and experience with
                        modern web design trends.</p>
                    <button id="interviewBtn"
                        class="interviewBtnclass px-[32px] py-[5px] shadow rounded-md cursor-pointer border text-green-500 ">Interview</button>
                    <button id="rejectBtn"
                        class=" rejectBtnClass  px-[32px] py-[5px] shadow rounded-md border cursor-pointer text-red-600 ">Rejected</button>

                </div>
                 <div><button id="deleteBtn"><i class="fa-solid fa-trash"></i></button></div>
            </div>
    `


        filteredCard.appendChild(div);

    }
}
function pushObjectRej() {
    // getFilerRej.innerHTML = '';
    const cards = getFilerRej.querySelectorAll('.cards');
    cards.forEach(card => card.remove());
     if (rejectArr.length === 0) {
        noCardRej.classList.remove('hidden');
        return;
    } else {
        noCardRej.classList.add('hidden');
    }
    for (let arr of rejectArr) {
        console.log(arr);
        let div = document.createElement('div');
        div.className = 'cards flex justify-between p-3 shadow mt-2';
        div.innerHTML = `
     <div class="space-y-4">
                    <p class="jobPlace">${arr.jobPlace}</p>
                    <p class="jobWork">${arr.jobWork}</p>
                    <p class="jobDetails">${arr.jobDetails}</p>
                    <div id="statas" class="statas p-[10px] max-w-[110px] rounded-md 
${arr.statas === 'Interviewed' ? 'bg-green-50 text-black' : 
  arr.statas === 'Rejected' ? 'bg-red-50 text-black' : 
  'bg-blue-100'}">${arr.statas}</div>
                    <p class="nodes">${arr.nodes}</p>
                    <button id="interviewBtn"
                        class="interviewBtnclass px-[32px] py-[5px] shadow rounded-md cursor-pointer border text-green-500 ">Interview</button>
                    <button id="rejectBtn"
                        class=" rejectBtnClass  px-[32px] py-[5px] shadow rounded-md border cursor-pointer text-red-600 ">Rejected</button>

                </div>
                 <div><button id="deleteBtn"><i class="fa-solid fa-trash"></i></button></div>
            </div>
    `


        getFilerRej.appendChild(div);

    }
}


// working of delete btn 



