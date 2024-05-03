$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if(window.scrollY>60){
            document.querySelector('#scroll-top').classList.add('active');
        }else{
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function(){
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if(top>offset && top<offset+height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },500, 'linear')
    })
});


// <!-- 打字特效（从外部导入的变量类型Typed） -->
    var typed = new Typed(".typing-text", {
        strings: ["Full-Stack development", "Embedded software development", "Embedded hardware design", "Machine Learning", "Mechanical design", "Robot mobility and manipulation"],
        loop: true,
        typeSpeed: 50,
		backSpeed: 25,
		backDelay: 500,
      });
// <!-- 打字特效 -->


// <!-- 纽扣特效 -->
      VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
      });
// <!-- 纽扣特效 -->


/* ===== 延迟出现动画 ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
    showSkills(data);
});

/* SCROLL HOME */
srtop.reveal('.home .content h3',{delay: 200}); 
srtop.reveal('.home .content p',{delay: 200}); 

srtop.reveal('.home .image',{delay: 400}); 
srtop.reveal('.home .linkedin',{interval: 600}); 


/* SCROLL PROJECTS */
srtop.reveal('.work .box',{interval: 200}); 

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline',{delay: 400});
srtop.reveal('.experience .timeline .container',{interval: 400}); 
/* ===== 延迟出现动画 ===== */


/* ===== 滚动文字 ===== */
document.addEventListener('DOMContentLoaded', function() {
    const leftTrack = document.querySelector('.track.right');
    const rightTrack = document.querySelector('.track.left');
    let currentTranslateXLeft = -100;
    let currentTranslateXRight = 100;
  
    window.addEventListener('wheel', function(event) {
      event.preventDefault();  // 阻止默认滚动行为
  
      // 左侧文字移动
      currentTranslateXLeft += event.deltaY * 0.08;
      currentTranslateXLeft = Math.min(Math.max(currentTranslateXLeft, -100), 100);
      leftTrack.style.transform = `translateX(${currentTranslateXLeft}%)`;
  
      // 右侧文字移动
      currentTranslateXRight -= event.deltaY * 0.08;
      currentTranslateXRight = Math.min(Math.max(currentTranslateXRight, -100), 100);
      rightTrack.style.transform = `translateX(${currentTranslateXRight}%)`;
    });
  });
  /* ===== 滚动文字 ===== */
  