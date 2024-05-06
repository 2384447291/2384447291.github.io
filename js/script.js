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





//   中英翻译
var languages = {
    'English': {
        'id_home': 'Home',
        'id_experience': 'Experience',
        'id_work': 'Projects',
        'id_blocks': 'Blog',
        'id_switchBtn': 'English',
        'id_home_description_h3': 'Welcome to my ',
        'id_home_description_spanh3': 'personal website',    
        'id_home_description_p': 'i am into',
        'typingTexts': [
            "robot development", 
            "Embedded software development", 
            "Embedded hardware design", 
            "Machine Learning", 
            "Mechanical design", 
            "Robot move and manipulation"
        ],
        'id_slip_1' : 'Mechanical',
        'id_slip_2' : 'Electronic',
        'id_slip_3' : 'Algorithm',
        'id_slip_4' : 'Innovation',

        'id_experience-text' : 'Experience',
        'id_experience_title_1': 'Southern University of Science and Technology',
        'id_experience_time_1': 'first semester of my freshman year (F/1)',
        'id_experience_content_1_1': '- Entering university for the first time, I quickly integrated into campus life and found myself adapting well.',
        'id_experience_content_1_2': '- Thanks to my quick adaptation to the university learning pace, my GPA ranked in the top 20% of the entire school during my freshman year.',

        'id_experience_title_2': 'Robomaster',
        'id_experience_time_2': 'second semester of my freshman year (S/1)',
        'id_experience_content_2_1': '- At the end of the first semester, I was fortunate to learn about RoboMaster, the national university-level robotics competition. I was immediately captivated by it, which also led me to choose robotics engineering as my major.',
        'id_experience_content_2_2': '- At the same time, I joined the university\'s RoboMaster team, ARTINX. Within six months, thanks to the team\'s belief and teaching, I went from being a complete novice to mastering electrical control and hardware design. Eventually, I took charge of controlling one of the main robots. We competed in the final national competition as a team and achieved satisfactory results, making it to the top 16 in the country.',

        'id_experience_title_3': 'Artinx',
        'id_experience_time_3': 'First semester of my sophomore year (F/2)',
        'id_experience_content_3_1': '- Due to the team\'s excellent performance last year, many senior members chose to retire after achieving their goals. For the sake of the team, I felt it was necessary for me to stay. More importantly, I felt that I didn\'t perform my best last year, which let the team down. To prove myself or to make amends, I decided to continue for another year.',
        'id_experience_content_3_2': '- Due to my lack of foundation, I diligently studied various subjects, including C++ programming, circuit design, data structures, and the basics of robotics. Additionally, I read and comprehended all existing electrical control codes within the team that year. To strengthen my foundation, I also took many courses outside the Major of robotics engineering during those two semesters.',
        'id_experience_content_3_3': '- However, due to the departure of key team members and technological setbacks, we were unable to achieve the desired results and did not advance to the national competition.',

        'id_experience_title_4': 'The happiest project',
        'id_experience_time_4': 'First semester of my senior year (S/2)',
        'id_experience_content_4_1': '- in the second semester of my second year, due to taking multiple courses, I had a pile-up of course projects. Considering time constraints, I plan to collaborate with another student specializing in mechanical design (a teammate from ARTINX) to complete a large-scale project that meets all course requirements.',
        'id_experience_content_4_2': '- After dividing tasks such as mechanical design, circuit control, and algorithm simulation with another classmate, we successfully completed a hexapod robot within one month. The robot is capable of autonomous walking and maintaining its body level in various environments. Finally, we designed a poster, wrote a technical document, created an introduction video, and even filmed a short play featuring the robot as the main character.',
        'id_experience_content_4_3': '- This project received unanimous praise from all course instructors and was regarded as the most accomplished and challenging project.',

        'id_experience_title_5': 'Artinx (Comeback)',
        'id_experience_time_5': 'First semester of my junior year (F/3)',
        'id_experience_content_5_1': '- In the third semester, despite facing pressure to pursue further studies, I chose to continue dedicating myself fully for another year (we called it all in). This decision stemmed from both the team\'s need for me and my two years of experience. I undertook the significant responsibility of being the team\'s head of electrical control, striving to live up to this role. I expanded my knowledge by studying modern control theory, STM32 system architecture, and computer operating systems. Additionally, in preparation for the new year\'s electrical control training, I completed over 100,000 words of documentation and created more than 400 PowerPoint slides during the summer break. These materials covered embedded systems, communication protocols, basic C++ syntax, electromechanical systems, and more.',

        'id_experience_title_6': 'Artinx (The perfect finale)',
        'id_experience_time_6': 'Second semester of my junior year (S/3)',
        'id_experience_content_6_1': '- Looking back, it was an intense period where I barely slept, getting only 5 to 6 hours a night, working tirelessly until exhaustion set in. I want to express my gratitude to my teammates and fate itself. In that year\'s national competition, ARTINX once again reached its peak, securing the 11th place nationwide.',
        'id_experience_content_6_2': '- Reflecting on my three years of experience, I participated in over 10 large-scale competitions, overseeing the circuit design and overall control of multiple robots. I was honored with 3 national-level awards and 4 provincial-level awards, gaining invaluable engineering experience and forging friendships with like-minded engineers. I am grateful to the ARTINX team and to RoboMaster.',

        'id_experience_title_7': 'IrisTac (first experience with scientific research)',
        'id_experience_time_7': 'First semester of my senior year (F/4)',
        'id_experience_content_7_1': '- After concluding my RoboMaster journey, my accumulated engineering experience garnered recognition from professors, allowing me the privilege of swiftly entering the laboratory to participate in research projects.',
        'id_experience_content_7_2': '- I am grateful to my teachers and doctoral peers for their guidance, which enabled me to quickly grasp the research process and become involved in the tactile sensor project in the lab. Research often hinges on innovative ideas, and after delving into a paper with my doctoral colleague for over a month, we identified a novel approach to enhance existing tactile sensors.',
        'id_experience_content_7_3': '- Drawing on my previous engineering experience, I adeptly crafted the sensor body. Under the guidance of my doctoral colleague, we swiftly iterated on the sensor body twice, encompassing both hardware and casing design.',
        'id_experience_content_7_4': '- Through corresponding experiments and algorithm design, we obtained some results. We documented the entire process into an academic paper, which was honored to be accepted at the international conference EECR.',

        'id_experience_title_8': 'The end of my university',
        'id_experience_time_8': 'Second semester of my senior year (S/4)',
        'id_experience_content_8_1': '- After four years of university study, I am about to graduate successfully. This period of time has not only earned me recognition from the school, making me a recipient of the Outstanding Graduate Award at the university level, but also enabled me to forge friendships with a group of like-minded engineering peers.',
        'id_experience_content_8_2': '- The experiences of these four years have been truly remarkable, so I plan to create a webpage to document it all.',
        'id_experience_content_8_3': '- At the same time, I want to express my gratitude for your companionship up to this moment.',

        'id_work-text' : 'Project',

        'id_project_title_1': 'IrisTac VBTS',
        'id_project_desc_1': 'an innovative vision-based tactile sensor',
        
        'id_project_title_2': 'Mobile-Hexapod-Robot',
        'id_project_desc_2': 'A hexapod robot capable of free movement and maintaining its body level on inclined surfaces',
        
        'id_project_title_3': 'Robomaster',
        'id_project_desc_3': 'Participated in three years of RoboMaster competition, engaged in electrical control work, and led the design of electromechanical systems for multiple robots.',
        
        'id_project_title_4': 'Integrated electromechanical training',
        'id_project_desc_4': 'In the third year, I served as the electrical control leader in the team and summarized my three years of experience into a large document.',
        
        'id_project_title_5': '"Engineering" robot',
        'id_project_desc_5': 'I independently designed the electromechanical systems for three robots, including a pneumatic-electric hybrid-driven gantry and a pneumatic-electric hybrid-driven robotic arm.',

        "id_blog-text" : 'Blog',

        "id_blog-desc" : 'Here is a summary of some of my experience.',

        'id_blog-title_1': 'Introduction to Basic Electrical Control Work and a Detailed Explanation of the Team\'s Code Framework',
        'id_blog-desc_1': 'A Comprehensive Guide to Programming, Embedded Systems, and Mechatronic Systems',
        'id_blog-title_2': 'Training on basic C++ syntax and programming fundamentals.',
        'id_blog-desc_2': 'The content includes C++ keywords, an introduction to programming, memory management in C++, and an introduction to embedded systems.',

        'id_end_1': "SLJ's Portfolio",
        'id_end_2': 'Thank you for visiting my personal portfolio website.',
        'id_end_link_1': 'quick links',
        'id_end_link_2': 'home',
        'id_end_link_3': 'experience',
        'id_end_link_4': 'project',
        'id_end_link_5': 'block',
        'id_end_3': 'contact info',
    },
    'Chinese': {
        'id_home': '主页',
        'id_experience': '经历',
        'id_work': '项目',
        'id_blocks': '博客',
        'id_switchBtn': '中文',
        'id_home_description_h3': '欢迎来到我的 ',
        'id_home_description_spanh3': '个人网站',    
        'id_home_description_p': '我参与过',
        'typingTexts': [
            "机器人开发", 
            "嵌入式软件开发", 
            "嵌入式硬件设计", 
            "机器学习", 
            "机械设计", 
            "机器人移动和操作"
        ],
        'id_slip_1' : '机械',
        'id_slip_2' : '电控',
        'id_slip_3' : '算法',
        'id_slip_4' : '创新',
        'id_experience-text' : '经历',

        'id_experience_title_1': '入学:南方科技大学',
        'id_experience_time_1': '第一学年上半学期 (1/上)',
        'id_experience_content_1_1': '- 第一次踏入大学校园时，我迅速融入了校园生活，并没有因为从应试教育到大学教育的转变而感到手足无措，反而适应得很好。',
        'id_experience_content_1_2': '- 由于我快速适应了大学的学习节奏，我的平均绩点在我大一期间全校排名前20%。',

        'id_experience_title_2': 'Robomaster',
        'id_experience_time_2': '第一学年下半学期 (1/下)',
        'id_experience_content_2_1': '- 第一学期快结束时，我有幸了解到RoboMaster，这是一个国家级的大学生机器人比赛。我被其中的赛制和工程师精神所吸引，这也导致我选择了机器人工程作为我的专业。',
        'id_experience_content_2_2': '- 与此同时，我有幸加入了南方科技大学的RoboMaster团队ARTINX。在中途加入的六个月内，队伍里的学长和前辈给予我充分的指导与鼓励,我从一个完全的新手逐渐熟悉了电气控制和硬件设计以及队伍里机器人的调试。最终，感谢队伍的信任,让我负责比赛中一个主要的机器人的电控工作。我们的团队一路坚持走到了全国总决赛的舞台，并取得了令人满意的成绩，跻身全国16强。',

        'id_experience_title_3': 'Artinx',
        'id_experience_time_3': '第二学年上半学期 (2/上)',
        'id_experience_content_3_1': '- 基于去年团队的出色表现，许多高年级成员在实现全国大赛目标后选择退役。对于我我说，由于去年的中途加入，我没有赶上队里的体系化培训，我觉得自己有必要留下来，一为了自身成长，二也为了不负去年学长的指导，我决定再继续打一年比赛。',
        'id_experience_content_3_2': '- 我深知自己基础不足，于是我努力学习各种课程，包括C++编程、电路设计、数据结构和机器人基础知识。此外，我还阅读并理解了团队内现有的所有电气控制代码。为了加强我的基础，我还在这两个学期中选修了许多与机器人工程专业无关的课程。',
        'id_experience_content_3_3': '- 然而，知识的积累并不能很快的转化为队伍的能力，甚至过多的额外课程也压缩了我对队伍的投入，更由于关键团队成员的离开和技术断代，我们未能取得期望的成绩，也未能晋级到全国比赛。',

        'id_experience_title_4': '最快乐的项目',
        'id_experience_time_4': '第二学年下半学期 (2/下)',
        'id_experience_content_4_1': '- 在我大二的下半学期，由于参加了多门课程，临近期末的时候，我需要完成许多课程项目。考虑到时间限制，我计划与另一位擅长机械设计的同学（ARTINX的队友）合作，完成一个满足所有课程要求的项目。',
        'id_experience_content_4_2': '- 在与另一位同学分配了包括机械设计、电路控制和算法模拟等工作后，我们在一个月内成功完成了一个六足机器人。该机器人能够在各种环境中自主行走并保持身体水平。最后，我们设计了海报，撰写了技术文件，制作了介绍视频，甚至拍摄了以机器人为主角的短片。',
        'id_experience_content_4_3': '- 这个项目得到了所有课程教师的一致好评，被认为是完成度最高和难度最大的课程项目。',

        'id_experience_title_5': 'Artinx (卷土重来)',
        'id_experience_time_5': '第三学年上半学期 (3/上)',
        'id_experience_content_5_1': '- 在第三学期，尽管面临着许多外界的压力，我打算全身心地再投入一年（我们称之为ALL IN）。由于我是队里资历最老的队员之一，所以承担了电控负责人的重要责任。为了努力做好这个角色，我学习了许多底层的知识来扩展我的知识:现代控制理论、STM32系统架构、计算机操作系统等。此外，为了新一年的电控培训，我在暑假期间完成了超过10万字的文档，并制作了400多张PPT。这些材料涵盖了嵌入式系统、通信协议、基本C++语法、机电系统等内容。',

        'id_experience_title_6': 'Artinx (最好的结局)',
        'id_experience_time_6': '第三学年下半学期 (3/下)',
        'id_experience_content_6_1': '- 我要感谢我的队友和命运，在这一年的比赛中，ARTINX再次重回了巅峰，从大一下的全国16晋升到11名，我拿到了本科期间第二个全国一等奖（2023年全国机器人竞赛一等奖）及ROBOMASTER机甲大师多项奖项，也应邀在DJ青年工程师大会上展示项目，让我站在更高的平台上接触到了更优秀的人，让我了解到未来更多的可能性。回顾这一整年，痛并快乐着，这就是年轻应该有的样子：去奋斗，去收获属于我的精彩。',
        'id_experience_content_6_2': '- 总结我的三年比赛经历，参加了10多场大型比赛，负责了多个机器人的电路设计和整体控制，荣获了3个国家级奖项和4个省级奖项，获得了宝贵的工程经验，最重要的是与志同道合的工程师结下了友谊。我对ARTINX团队和RoboMaster比赛深表感激。',

        'id_experience_title_7': 'IrisTac (初次科研体验)',
        'id_experience_time_7': '第四学年上半学期 (4/上)',
        'id_experience_content_7_1': '- 结束RoboMaster比赛生涯后，我的工程经验得到了教授们的认可，这也使我有幸迅速进入实验室参与研究项目。',
        'id_experience_content_7_2': '- 感谢我的老师和博士学长的指导，他们帮助我能够迅速掌握科研流程，并参与了实验室的触觉传感器项目。科研最重要的一环是创新的想法，经过与我的博士学长的共同调研一个多月文献后，我们发现了一种改进现有触觉传感器的新角度。',
        'id_experience_content_7_3': '- 得益于我之前的工程经验，我熟练地制作了传感器主体，将之前的想法具体实施。在我的博士学长的指导下，我们迅速对传感器主体进行了两次迭代，迭代内容包括了传感器的硬件和外壳设计。',
        'id_experience_content_7_4': '- 通过相应的实验和算法设计，我们得到了一些结果。我们将整个科研过程转化成了一篇学术论文，并有幸地被国际会议EECR接受。',

        'id_experience_title_8': '大学结束',
        'id_experience_time_8': '第四学年下半学期 (4/下)',
        'id_experience_content_8_1': '- 四年的大学学习即将圆满结束。这段时间我不仅赢得了学校的认可(获选成为校级优秀毕业生)，还学到了宝贵的工程经验与学科知识。更重要的是，让我与一群志同道合的工程师结下了友谊。',
        'id_experience_content_8_2': '- 这四年的经历真的很难忘，所以我打算创建这样一个网页来记录这一切。',
        'id_experience_content_8_3': '- 同时，也感谢你们一路看到这里。',

        'id_work-text' : '项目',

        'id_project_title_1': 'IrisTac VBTS（基于视觉的触觉传感器）',
        'id_project_desc_1': '一种创新的基于视觉的触觉传感器',
        
        'id_project_title_2': '移动六足机器人',
        'id_project_desc_2': '一种能够自由移动并在倾斜面上保持身体水平的六足机器人',
        
        'id_project_title_3': 'Robomaster机甲大师比赛',
        'id_project_desc_3': '我参加了三年的Robomaster机甲大师比赛，从事电控工作，并负责了多个机器人的机电系统设计。',
        
        'id_project_title_4': '电控培训',
        'id_project_desc_4': '第三年，我作为队里的电控负责人，将我三年的工程经验总结成多份文件。',
        
        'id_project_title_5': '“工程”机器人',
        'id_project_desc_5': '“工程”机器人是Robomaster机甲大师比赛中的一种机器人，我独立设计了这款机器人的电器系统，包括一个气动-电动混合驱动的龙门架和一个气动-电动混合驱动的机械臂。',

        "id_blog-text" : '博客',

        "id_blog-desc" : '以下是我的一些经验总结',

        'id_blog-title_1': '电控工作基础及队伍代码框架详解',
        'id_blog-desc_1': '编程、嵌入式系统和机电系统的综合指南',
        'id_blog-title_2': '基础 C++ 语法和编程基础培训。',
        'id_blog-desc_2': '内容包括 C++ 关键字总结、编程入门、C++ 数据类型、内存管理以及嵌入式系统入门。',

        'id_end_1': 'SLJ的作品集',
        'id_end_2': '感谢您访问我的个人作品集网站。',
        'id_end_link_1': '快速链接',
        'id_end_link_2': '首页',
        'id_end_link_3': '经历',
        'id_end_link_4': '项目',
        'id_end_link_5': '博客',
        'id_end_3': '联系信息',
    }
};

var currentLanguage = 'English';
function viewFunction() {
    currentLanguage = (currentLanguage === 'English') ? 'Chinese' : 'English';
    // 循环遍历每个属性并更新对应的 DOM 元素
    for (var key in languages[currentLanguage]) {
        if (languages[currentLanguage].hasOwnProperty(key)) {
            var element = document.getElementById(key);
            if (element) {
                element.textContent = languages[currentLanguage][key];
            }
        }
    }
    // 销毁旧的 Typed 实例并重新创建
    if (typed) {
        typed.destroy();
    }
    typed = new Typed(".typing-text", {
        strings: languages[currentLanguage]['typingTexts'],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500
    });
}
//   中英翻译



