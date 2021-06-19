// preloader
window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
})

// navBtn toggle
document.querySelector('.navBtn').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('nav--show')
    // document.querySelector('.nav').classList.toggle('.nav--show');
})

// switch video
document.querySelector('.video__switch').addEventListener('click', function() {
        const btn = document.querySelector('.video__switch-btn')
    if (!btn.classList.contains('video__switch-toggle')) {
        btn.classList.add('video__switch-toggle')
        document.querySelector('.video__item').pause()
    }
    else {
        btn.classList.remove('video__switch-toggle')
        document.querySelector('.video__item').play()
    }
})

// display modal 
const links = document.querySelectorAll('.work-item__icon')

links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault()
       if (e.target.parentElement.classList.contains('work-item__icon'));
        {
           let id = e.target.parentElement.dataset.id;
           const modal= document.querySelector('.work-modal');
           const modalItem = document.querySelector('.work-modal__item');
           modal.classList.add('work-modal--show');
           modalItem.style.backgroundImage = `url(images/work-${id}.jpg)`
       }
    })
})

// hide modal 
document.querySelector('.work-modal__close').addEventListener('click', function(){
    document.querySelector('.work-modal').classList.remove('work-modal--show')
})

// const result = document.querySelector('.offer-form__feedback')

// form 
//     const name= document.querySelector('.input-name').value
//     const email= document.querySelector('.input-email').value
// document.querySelector('.offer-form').addEventListener('submit', function(e) {
//     e.preventDefault();

    
//     if(name == '' && email == '') { 
//        showFeedback('please fill first', 'error' )
//     }
//     else {
//        showFeedback('please fill first', 'success' )
//     }

// })
    
// form feedback 
// function showFeedback(text, type) {

//     result.textContent =text;
//     result.classList.add(type)

//     setTimeout(function(){
//         result.textContent ='';
//     result.classList.remove(type)
//     },1000)
// }

// customer
// function customer () {
//     const iamges= [2,3,4,5,6]
//     let random = Math.floor(Math.random * iamges.length)

//     const element = document.createElement('div')
//     element.classList.add('person')
//     element.innerHTML = `<img src="images/user-${random}" alt="person"     class="person__thumbnail">
//     <h4 class="person__name">${name}</h4>`;

//     document.querySelector('.offer-card__list').appendChild(element)              
    
                            
// }