document.addEventListener("DOMContentLoaded", ()=>{

    // 위쪽 방향을 향하여 자동 슬라이드
    const $slide = document.getElementById('slide');
    
    const toTop = ()=>{
        $slide.style.top = "-300px";
        $slide.style.transition = "top 1s";

        /* 콜백함수(시간이 필요한 실행문이라도 먼저 실행하도록 하고, 즉시 실행되는 실행문을 기다리도록 한다.) */
        /* setInterval 기다리고 지정된 시간 뒤에 실행 */
        setTimeout(append, 1100);
    };
    const append = ()=>{
        //슬라이드 영역의 첫 번째 자식이 영역의 안쪽에서 맨 끝으로 이동한다.(append)
        $slide.append($slide.firstElementChild);
        $slide.style.top = "0px";
        $slide.style.transition = "none";
    }

    /* 콜백함수(지체시간 간격을 두고 지속적으로 함수를 호출한다.) */
    setInterval(toTop, 2500);
/********************************************************************************/
    const notigallH2 = document.querySelectorAll('#notigall h2');
    const notice = document.querySelector('#notice ol');
    const gallery = document.querySelector('#gallery div');


    const sh = (i)=> {
        const txt = i.innerText;
        notigallH2[0].classList.remove('hit');
        notigallH2[1].classList.remove('hit');
        i.classList.add('hit');
        switch(txt) {
            case "공지사항" :  
                notice.style.display = 'block'; 
                gallery.style.display = 'none';   
                break;
            case "갤러리" :
                notice.style.display = 'none'; 
                gallery.style.display = 'flex';
        };
        
    };







    notigallH2.forEach(i =>{
        
        i.children[0].addEventListener("click", ()=>{sh(i)});
    });


/*******************************************************************************/
    const black = document.getElementById('black');
    const btn = document.querySelector('#popup button');
    const noticeLi = document.querySelectorAll('#notice ol li');

    const popup = (j)=> {
        if(j == "열기") {
            black.classList.add('show');
        } else {
            black.classList.remove('show');
        };
        
    };

    noticeLi.forEach(i => {
        i.children[0].addEventListener("click", ()=> {popup("열기");});
    });

    btn.addEventListener("click", ()=> {popup("닫기");} );


});//////////////////////전체 끝