// birinchi strelkaga ulanamiz.

const hour = document.querySelector('.h')
min = document.querySelector('.m')
sec = document.querySelector('.s')
hourNum = document.querySelector('.hours')
minNum = document.querySelector('.minutes')

// console.log(new Date());
// new Date() - Global Object Kompyuterdaagi hozirgi vaqtni korsatadi
// getHours() - komyuterdagi vaqtdan soatni olib beradi
// getMinutes() - kompyuterdagi vaqtdan minutni olib beradi
// getSeconds() - kompyuterdagi vaqtdan sekundni olib beradi
// console.log(new Date().getHours());

function clock() {
    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30


        sec.style.transform = `rotate(${second}deg)`
        min.style.transform = `rotate(${minutes}deg)`
        hour.style.transform = `rotate(${hours}deg)`
        setTimeout(() => {
            clock()
        }, 1000);

        hourNum.innerHTML = time.getHours() <10 ? '0'+ time.getHours() : time.getHours()
        minNum.innerHTML = time.getMinutes() <10 ? '0'+ time.getMinutes() : time.getMinutes()
}
clock()

const links = document.querySelectorAll('.tabsItem'),
      tabs = document.querySelectorAll('.tabsContentItem');

// 1-variant:  

    //   links.forEach((link,i) => {
    //       link.addEventListener('click', (e) => {
    //           e.preventDefault()
    //           links.forEach((all,j) => {
    //               all.classList.remove('active')
    //               tabs[j].classList.remove('active')
    //           })
    //           link.classList.add('active')
    //           tabs[i].classList.add('active')
    //       })
    //   })

// 2-variant:

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => {
            e.preventDefault()
            for (let j = 0; j < links.length; j++) {
                links[j].classList.remove('active')
                tabs[j].classList.remove('active')
            }
            links[i].classList.add('active')
            tabs[i].classList.add('active')
        })
   }

// secundomer:

// let btn = document.getElementById('.stopwatch__btn');
//      // Получаем доступ к кнопке

//      // Добавляем обработчик событий для клика по кнопке
//      btn.addEventListener('click', function() {
//          // Изменяем текст кнопки
//          if (btn.innerText === 'start') {
//              btn.innerText = 'stop';
//          } else {
//              btn.innerText = 'start';
//          }
//      });

    //  const btn = document.addEventListener("DOMContentLoaded", function() {
    //     // Ваш код, который обращается к кнопке и добавляет обработчик события
    //     var btn = document.querySelector('.stopwatch__btn');
    //     btn.addEventListener('click', function() {
    //         if (btn.innerText === 'start') {
    //                          btn.innerText = 'stop';
    //                      } else {
    //                          btn.innerText = 'start';
    //                      }
    //     });
    // });
 

        const  btn = document.querySelector('.stopwatch__btn')
               watchSec = document.querySelector('.stopwatch__seconds')
               watchMin = document.querySelector('.stopwatch__minutes')
               watchHour = document.querySelector('.stopwatch__hours')
               tls = document.querySelector('.tabsLink__span ')
               btn.addEventListener('click',()=> {
                   if (btn.innerHTML=='start') {
                    tls.classList.add('active')
                    btn.innerHTML ='stop'
                   }else if (btn.innerHTML =='stop'){
                   btn.innerHTML ='clear'
                   tls.classList.add('active_clear')
                   }else if (btn.innerHTML =='clear'){
                    btn.innerHTML ='start'
                    tls.classList.remove('active_clear')
                    tls.classList.remove('active')
                    }
               }) 
        
function watch() {
    if (btn.innerHTML == 'stop') {
        watchSec.innerHTML ++
        tls.classList.add('active')
        if (watchSec.innerHTML > 59) {
            watchSec.innerHTML = 0
            watchMin.innerHTML ++
            if (watchMin.innerHTML > 59) {
                watchMin.innerHTML == 0
                watchHour.innerHTML ++
            }
        }
    }else if(btn.innerHTML == 'start'){
             watchSec.innerHTML = 0
             watchMin.innerHTML = 0
             watchHour.innerHTML = 0
    }
        setTimeout(() => {
            watch()
        }, 500);
}
watch()
          
