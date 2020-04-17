//hamburger menu
const hamburger=document.getElementById('hamburger');
const hamburgerIcon=document.querySelector('#hamburger>img');
const navLogo=document.querySelector('.nav__logo');
hamburger.addEventListener('click',(e)=>{
    hamburger.classList.toggle('show');
    document.body.classList.toggle('no-scroll')
    hamburgerIcon.style.padding='4px';
    
    if(hamburger.classList.contains('show')==true){
        navLogo.setAttribute('src','images/logo-bookmark-nav.svg');
        navLogo.style.width='148px'
        hamburgerIcon.setAttribute('src','images/icon-close.svg');
    }
    else{
        navLogo.setAttribute('src','images/logo-bookmark.svg');
        hamburgerIcon.setAttribute('src','images/icon-hamburger.svg')
    }
    e.preventDefault();
},false);



//links 
const bookmark=document.getElementById('simple-bookmark');
const search=document.getElementById('speedy-search');
const share=document.getElementById('easy-sharing');

const image=document.getElementById('feature-img');
const title=document.getElementById('feature-title');
const desc=document.getElementById('feature-desc');

bookmark.addEventListener('click',(e)=>{
    search.classList.remove('features__link--current');
    share.classList.remove('features__link--current');
    bookmark.classList.add('features__link--current');
    image.setAttribute('src','images/illustration-features-tab-1.svg');
    image.setAttribute('alt','simple bookmarking')
    title.innerHTML=`Bookmark in one Click`;
    desc.innerHTML=`Organize your bookmarks however you like.Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`;
    e.preventDefault();
})

search.addEventListener('click',(e)=>{
    share.classList.remove('features__link--current');
    bookmark.classList.remove('features__link--current');
    search.classList.add('features__link--current');
    image.setAttribute('src','images/illustration-features-tab-2.svg');
    image.setAttribute('alt','speedy searching')
    title.innerHTML=`Intelligent search`;
    desc.innerHTML=`Our powerful search feature will help you find saved sites in no time at all. No need tp trawl through all of your bookmarks.`;
    e.preventDefault();
})

share.addEventListener('click',(e)=>{
    bookmark.classList.remove('features__link--current');
    search.classList.remove('features__link--current');
    share.classList.add('features__link--current');
    image.setAttribute('src','images/illustration-features-tab-3.svg');
    image.setAttribute('alt','easy sharing')
    title.innerHTML=`Share your Bookmarks`;
    desc.innerHTML=`Easily share your bookmarks and collection with others. Create a shareable link that you can send at click of a button.`;
    e.preventDefault();
})

//accordion
document.querySelectorAll('.accordion__btn').forEach(button=>{
    button.addEventListener('click',(e) => {
        button.classList.toggle('accordion__btn--active');
        e.preventDefault(); 
    })
})

//email validate
const email=document.getElementById('email-id');
const emailBtn=document.getElementById('email-btn');
const msg=document.querySelector('.err-msg');

emailBtn.addEventListener('click',(e)=>{
    
    if(email.value.trim()===""){
        email.classList.add('err');
        msg.innerHTML="Email can't be empty";
    }
    else if(!isEmail(email.value.trim())){
        email.parentElement.classList.add('err');
        msg.innerHTML='Whoops, make sure it\'s an email.';
    }
    else{
        email.parentElement.classList.remove('err');
    }

    e.preventDefault();
})

function isEmail(emailId){
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailId));
}