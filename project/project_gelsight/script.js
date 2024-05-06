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
        'id_View_Papper': "View Paper",
        'id_content_title': "IrisTac",
        'id_content_content_1': "IrisTac has proposed a novel tactile sensor design, which utilizes a multicolored LED ring to simulate various lighting environments. This design employs a single sensor platform to control variables and investigate the impact of lighting conditions on surface reconstruction of objects.",
        'id_content_content_2': "In this study, I was involved in the entire process from initial research and idea implementation to experimental validation and paper writing. Starting with limited knowledge, I conducted extensive literature review to gradually identify innovative points. Subsequently, I was responsible for building the sensor, which involved hardware selection, enclosure modeling, and algorithm design. Finally, experiments were designed and conducted to validate the findings.",
        'id_content_BTH': "Back to Home",
        'id_Tec_head': "Technology stack:",
        'id_Tec_content': "Building the electromechanical system of the sensor: PCB design (Iceda), sensor enclosure design (Fusion360), basic image processing (OpenCV), machine learning algorithm (photometric stereo algorithm).",
        'id_Abl_head': "Ability:",
        'id_Abl_content': "Basic knowledge of tactile sensors; Ability to read and analyze paper; Understanding the standard research process",
        'id_Ach_head': "Achievements:",
        'id_Ach_content': "Publishing a paper at an international conference as a secondary author"
    },
    'Chinese': {
        'id_switchBtn': '中文',
        'id_View_Papper': "查看论文",
        'id_content_title': "IrisTac",
        'id_content_content_1': "IrisTac 提出了一种新颖的触觉传感器设计，该设计利用可调光源亮度配比的LED来环模拟不同的照明环境。通过这种设计，就可以采用同一传感器平台来控制变量进而研究在视触传感器的话题下，照明条件对物体表面重建的影响。",
        'id_content_content_2': "在这项研究中，我参与了从初期调研到想法实施再到实验验证和论文撰写的整个过程。从一无所知开始，我进行了大量的文献回顾，接着在学长的指导下发现创新点。随后，我负责构建传感器本体，包括硬件选择、外壳建模和算法设计。最后，设计并进行了实验以验证理论结果。",
        'id_content_BTH': "返回首页",
        'id_Tec_head': "技术栈：",
        'id_Tec_content': "构建传感器的机电系统：PCB设计（Iceda），传感器外壳设计（Fusion360），基本图像处理（OpenCV），机器学习算法（光度立体算法）。",
        'id_Abl_head': "能力：",
        'id_Abl_content': "触觉传感器的基本知识；阅读和分析论文的能力；了解标准科研流程",
        'id_Ach_head': "成就：",
        'id_Ach_content': "作为第二作者在国际会议上发表论文"
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
