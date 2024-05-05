// 禁止开发者模式
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

var languages = {
    'English': {
        'id_switchBtn': 'English',
        'id_View_Vedio': "View Video",
        'id_content_title': "Integrated electromechanical training",
        'id_content_content_1': "In the third year, I took on the role of electrical control team leader. In order to conduct training for new members and to organize my thoughts, I compiled the knowledge and experience I had accumulated over the past three years into a document exceeding 100,000 words, and created a PowerPoint presentation spanning over 400 slides. The entire training lasted for a period of two months.",
        'id_content_content_2': "The training content includes electromechanical system design, STM32 programming, embedded systems architecture, basic syntax of C++, fundamental electromechanical system knowledge, and in-depth explanation of the team's code framework. The detailed documents and PowerPoint presentations are available on the blog of this website.",
        'id_Blog': "Blog",
        'id_Abl_head': "Ability:",
        'id_Abl_content': "Document organization skills",
        'id_content_BTH': "Back to Home"
    },
    'Chinese': {
        'id_switchBtn': '中文',
        'id_View_Vedio': "观看视频",
        'id_content_title': "综合电机系统培训",
        'id_content_content_1': "在第三年，我担任了电控团队的领队。为了对新成员进行培训并整理我的思路，我将过去三年积累的知识和经验整理成一份超过100,000字的文件，并创建了一个包含400多张幻灯片的PowerPoint演示。整个培训持续了两个月。",
        'id_content_content_2': "培训内容包括电机系统设计、STM32编程、嵌入式系统架构、C++基本语法、基础电机系统知识，以及对团队代码框架的深入解释。详细的文件和PowerPoint演示文稿可在本网站的博客上查看。",
        'id_Blog': "博客",
        'id_Abl_head': "能力：",
        'id_Abl_content': "文档组织技能",
        'id_content_BTH': "返回首页"
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
}
//   中英翻译




