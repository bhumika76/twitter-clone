let audiencebtn = document.getElementById('audiencebtn');
let showbox = document.getElementsByClassName('showbox')[0];

audiencebtn.addEventListener('click',()=>{
    showbox.classList.toggle('showboxactive');
})

function auto_grow(e){
    e.style.height = "5px";
    e.style.height = (e.scrollHeight)+"px";
}

const audience_check_off = () => {
    Array.from(document.getElementsByClassName('check_audience_i')).forEach((i) => {
        i.style.color = "#fff";
    })
}


Array.from(document.getElementsByClassName('check_audience')).forEach((i,a) => {
    i.addEventListener('click',()=>{
        audience_check_off();
        document.getElementsByClassName('check_audience_i')[a].style.color = "#1calf1";
        if(a == 0){
            audiencebtn.innerHTML = `Everyone <i class="fas fa-angle-down">`;
            audiencebtn.style.color = "#1ca1f1";
            audiencebtn.style.borderColor = "#1ca1f1";
        }else {
            audiencebtn.innerHTML = `Twitter Circle <i class="fas fa-angle-down">`;
            audiencebtn.style.color = "green";
            audiencebtn.style.borderColor = "green";
        }
        showbox.classList.toggle('showboxactive');
    })
})

let selectreplybtn =document.getElementsByClassName('selectreplybtn')[0];
let who_can_reply_bx =document.getElementsByClassName('who_can_reply_bx')[0];


selectreplybtn.addEventListener('click', ()=>{
    who_can_reply_bx.classList.toggle('showboxactive')
})


const who_can_reply_off = () => {
    Array.from(document.getElementsByClassName('who_can_reply_i')).forEach( (i) =>{
        i.style.color = "#fff";
    })
}


Array.from(document.getElementsByClassName('who_can_reply')).forEach((i,a) =>{
    i.addEventListener('click',()=>{
        who_can_reply_off();
        document.getElementsByClassName('who_can_reply_i')[a].style.color = "#1calf1";
        if(a === 0){
            selectreplybtn.innerHTML = `<i class="fas fa-globe-asia"></i> Everyone can reply`;
        }else if(a === 1){
            selectreplybtn.innerHTML = `<i class="fas fa-user-check"></i> People you follow`;
        }else {
            selectreplybtn.innerHTML = `<i style="font-size: normal;"><i style="font-size: normal;">@</i></i> Only people you mention`;
        }
        who_can_reply_bx.classList.toggle('showboxactive');
    })
})

let tweettextarea = document.getElementById('tweettextarea');
let tweetpost = document.getElementById('tweetpost');
let textlimit = document.getElementById('textlimit');

tweettextarea.addEventListener('keyup', () =>{
    if(tweettextarea.value.length > 0){
        tweetpost.style.background = "rgb(28,160,242)";
    }else {
        tweetpost.style.background = "rgb(28,160,242,.5)";
    }

    let a = tweettextarea.value.length;
    let b = parseInt((a/2));
    let c = (100-b);
    textlimit.innerText = c + "%";

    if (c == 0) {
        textlimit.style.color = "red";
    }else {
        textlimit.style.color = "rgb(0,0,0,.8)";
    }
})

// delete

let tasklist=document.querySelector(".postcard");
console.log(tasklist);
tasklist.addEventListener("click",function(ev){
    let element=ev.target;
    console.log(element);
    let className=ev.target.className;
    if(className =="delete"){
        let listitem=element.parentElement.parentElement.parentElement.parentElement.parentElement;
        console.log(listitem);
        listitem.remove();
    }
})

let tasklist1=document.querySelector(".postcard");
console.log(tasklist1);
tasklist1.addEventListener("click",function(ev){
    let element1=ev.target;
    console.log(element1);
    let className1=ev.target.className;
    if(className1 =="delete"){
        let listitem1=element1.parentElement.parentElement.parentElement.parentElement.parentElement;
        console.log(listitem1);
        listitem1.remove();
    }
})

//tweet
let tweet=document.querySelector("#tweetpost");
tweet.addEventListener("click",function(ev){
    ev.preventDefault();
    let input=document.querySelector("#tweettextarea");
    let value=input.value;
    console.log(value);
    let abcd=document.querySelector(".abcd").innerHTML=`${value}`;
    // additem(value);
    // input.value="";
})

// function additem(value){
//     let ul=document.querySelector(".postmain");
//     let li=document.createElement("div");
//     li.classList.add("postcard");
//     li.innerHTML=` ${value} `;
//     ul.append(li);
// }