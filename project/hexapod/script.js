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
        'id_content_link':'github link',
        'id_content_title': "Mobile-Hexapod-Robot",
        'id_content_content_1': "This project is for a mobile hexapod robot, which achieves basic movements (forward, backward, left, right & rotation) and automatic posture adjustment function (self-stabilization on inclined surfaces). And the entire project is open-source.",
        'id_Tec_head': "Technology stack:",
        'id_Tec_content': "Motor driver programming, electromechanical system design (Python), kinematic simulation (Matlab)",
        'id_Abl_head': "Ability:",
        'id_Abl_content': "Hexapod robot gait, robot modeling",
        'id_content_BTH': "Back to Home"
    },
    'Chinese': {
        'id_switchBtn': '中文',
        'id_View_Vedio': "查看视频",
        'id_content_title': "移动六足机器人",
        'id_content_link':'github链接',
        'id_content_content_1': "这个项目主要涉及了一个移动六足机器人，它能实现基本的移动（前进、后退、左转、右转及旋转）和姿态调整功能（在倾斜面上保持机身水平），整个项目是开源的。",
        'id_Tec_head': "技术栈：",
        'id_Tec_content': "电机驱动编写，机电系统设计（Python），六足机器人运动仿真（Matlab）",
        'id_Abl_head': "能力：",
        'id_Abl_content': "六足机器人步态，机器人建模",
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




