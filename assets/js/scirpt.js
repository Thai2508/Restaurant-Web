
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cNav = $$('.center-nav-list a');
const non = $$('.non');
const navHome = $('.nav-home');
const navMenu = $('.nav-menu');
const navAbout = $('.nav-about');
const navBook = $('.nav-book');
const menu = $('.menu');
const about = $('.about');
const bookTable = $('.booktable');
const info = $$('.content-info');

const app = {

    numNav : 0,
    numIndex : 0,
    // numInfo : 0,

    handleEvens : function() {
        const _this = this;

        navHome.onclick = function() {
            _this.numNav = Number(navHome.dataset.index)
            _this.numIndex = -1;
            _this.activeNav();
            _this.removeBlock(_this.numIndex)
        }
        navMenu.onclick = function() {
            _this.numNav = Number(navMenu.dataset.index)
            _this.numIndex = Number(menu.dataset.index)
            _this.activeNav();
            _this.removeBlock(_this.numIndex)
            
        }
        navAbout.onclick = function() {
            _this.numNav = Number(navAbout.dataset.index)
            _this.numIndex = Number(about.dataset.index)           
            _this.activeNav();
            _this.removeBlock(_this.numIndex)
        }
        navBook.onclick = function() {
            _this.numNav = Number(navBook.dataset.index)
            _this.numIndex = Number(bookTable.dataset.index)
            _this.activeNav();
            _this.removeBlock(_this.numIndex)
        }

    },

    slideRun : () => {
        // let numInfo = 1;
        // let length = info.length;
        // const time = setInterval(()=> {  
        //     for (let i=0; i<length; i++){
        //         info[i].style = `transform: translateX(${-numInfo * 100}%);`
        //     }
        //     numInfo++;
        //     if (numInfo === length) 
        //         numInfo = 0;                          
        // },4000)
           
        
    },

    addIndexNav : () => {
        const navLength = cNav.length;
        for (let i=0; i<navLength; i++){       
            cNav[i].setAttribute("data-index", `${i}`)
        }
    },
    addIndex : () => {
        const nonLength = non.length;
        for (let i=0; i<nonLength; i++){       
            non[i].setAttribute("data-index", `${i}`)
        }
    },      
    removeBlock : (num) => {
        const nonLength = non.length;
        for (let i=0; i<nonLength; i++){       
            if (i !== num){
                non[i].classList.add('c-0')
            }
            if (num === -1 || i===num) {
                non[i].classList.remove('c-0')
            }
        }
    },
    activeNav : function() {
        // const navLength = cNav.length;
        // console.log(this.numNav)
        // for (let i=0; i<navLength; i++){
        //     if (this.numNav === i) {
        //         cNav[i].classList.add('nav-active')
        //     }
        //     else {
        //         cNav[i].classList.remove('nav-active')
        //     }
        // }
        const nav = [...cNav]
        nav.forEach((m,index) => {
            if(this.numNav === index){
                $(".c-nav.nav-active").classList.remove("nav-active")
                m.classList.add("nav-active")
                return
            }
        })
    },

    start : function() {
        this.slideRun();

        this.addIndex();

        this.addIndexNav();

        this.handleEvens();
    }

}

app.start();

