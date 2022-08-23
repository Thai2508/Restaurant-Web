
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cNav = $$('.c-nav');
const non = $$('.non');
const navHome = $('.nav-home');
const navMenu = $('.nav-menu');
const navAbout = $('.nav-about');
const navBook = $('.nav-book');
const home = $('.header');
const menu = $('.menu');
const about = $('.about');
const bookTable = $('.booktable');
const info = $$('.content-info');
const circle = $$('.circle');
const item = $$('.name-item');
const box = $$('.box-text');

const app = {

    numArrow : 0,
    arr : [],

    handleEvens : function() {
        const _this = this;

        // Event when click nav
        cNav.forEach((m,index) => m.addEventListener("click",() => {
            $(".nav-active").classList.remove("nav-active")
            m.classList.add("nav-active")
            let arr = [home,menu,about,bookTable]
            let num = Number(arr[index].dataset.index);
            // _this.active();
            _this.removeBlock(num)
        }))

        // Event when click menu
        item.forEach((m) => m.addEventListener("click",() => {
            $('.item--active').classList.remove('item--active')
            m.classList.add('item--active')
            _this.arr = []
            _this.items.forEach(n => {
                if (n.type === m.innerText) {
                    _this.arr.push(n)
                }
            })
            if (m.innerText === 'All')    
                _this.arr = _this.items
            _this.renderMenuItems()
        }))

        // Event when click btn prev or next of Rates
        $('.prev-arrow').onclick = () => {
            _this.arrow('prev');
        }
        $('.next-arrow').onclick = () => {
            _this.arrow('next');
        }

    },

    arrow : (string) => {
        if (string === 'prev')
            app.numArrow--;
        else app.numArrow++;

        if (app.numArrow < 0)
            app.numArrow = box.length - 1;
        if (app.numArrow >= box.length)
            app.numArrow = 0;

        box.forEach(m => {
            m.style = `transform: translateX(${-app.numArrow * 100}%);`
        })     
    },

    items : [
        {
            type : 'Pizza',
            nameItem : 'Delicious Pizza',
            img : './assets/imgs/item-pizza-1.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$20'
        },
        {
            type : 'Burger',
            nameItem : 'Delicious Burger',
            img : './assets/imgs/item-burger-1.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$11'
        },
        {
            type : 'Pizza',
            nameItem : 'Delicious Pizza',
            img : './assets/imgs/item-pizza-2.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$17'
        },
        {
            type : 'Pasta',
            nameItem : 'Delicious Pasta',
            img : './assets/imgs/item-pasta-1.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$18'
        },
        {
            type : 'Fries',
            nameItem : 'Delicious Fries',
            img : './assets/imgs/item-fries.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$10'
        },
        {
            type : 'Pizza',
            nameItem : 'Delicious Pizza',
            img : './assets/imgs/item-pizza-3.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$15'
        },
        {
            type : 'Burger',
            nameItem : 'Delicious Burger',
            img : './assets/imgs/item-burger-2.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$12'
        },
        {
            type : 'Burger',
            nameItem : 'Delicious Burger',
            img : './assets/imgs/item-burger-3.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$14'
        },
        {
            type : 'Pasta',
            nameItem : 'Delicious Pasta',
            img : './assets/imgs/item-pizza-1.png',
            description : 'Veniam debitis quaerat officiis quasi cupiditate quo,quisquam velit,magnam voluptatem repellendus sed eaque',
            price : '$13'
        },
    ],

    renderMenuItems() {
        if (this.arr.length <= 0)
            this.arr = this.items
        // console.log(this.arr)
        const html = this.arr.map((m) => {
            return `
            <div class=" col l-4 m-6 c-12">
                <div class="item">
                    <div class="item-img">
                        <img src="${m.img}" alt="${m.type}">
                    </div>
                    <div class="item-content">
                        <strong>${m.nameItem}</strong>
                        <p>${m.description}</p>
                        <div class="oder">
                            <p>${m.price}</p>
                            <span><ion-icon name="cart" ></ion-icon></span>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        $('.foods').innerHTML = html.join('');
    },
 
    nextSlide : () => {
        let num = 1;      
        let length = info.length;
        const time = setInterval(()=> { 
            let dot = num-1;
            if (dot < 0)
                dot = length-1
            if (num >= length)
                num = 0;           
            for (let i=0; i<length; i++)
                info[i].style = `transform: translateX(${-num * 100}%);`
            circle[dot].classList.remove('dot--color');
            circle[num].classList.add('dot--color');                             
            num++;
        },4000)   
    },

    addDataIndex : () => {
        const arr = [non];
        for (let count = 0; count<arr.length; count++){
            let arrSub = arr[count];
            let arrlength = arrSub.length;
            for (let i=0; i<arrlength; i++){       
                arrSub[i].setAttribute("data-index", `${i}`)
            }
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
    
    // active : function() {
    //     // const navLength = cNav.length;
    //     // console.log(this.numNav)
    //     // for (let i=0; i<navLength; i++){
    //     //     if (this.numNav === i) {
    //     //         cNav[i].classList.add('nav-active')
    //     //     }
    //     //     else {
    //     //         cNav[i].classList.remove('nav-active')
    //     //     }
    //     // }
    //     const nav = [...cNav]
    //     nav.forEach((m,index) => {
    //         if(this.numNav === index){
    //             $(".nav-active").classList.remove("nav-active")
    //             m.classList.add("nav-active")
    //             return
    //         }
    //     })
    // },

    start : function() {

        // Render HTML menuItem
        this.renderMenuItems()

        // Add data index 
        this.addDataIndex();

        // Aotu Slider
        this.nextSlide();

        // 
        this.handleEvens();

        // Fix height of bookTable img 
        const h = $('.book-input').offsetHeight
        $('.table img').style.height = `${h-14}px`
    }

}

app.start();

