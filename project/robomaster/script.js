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
        'id_content_title': "Robomaster",
        'id_content_content_1': "RoboMaster, a national university-level robotics competition, is jointly organized by the Communist Youth League Central Committee, the National Student Union, and the Shenzhen Municipal People's Government, with DJI as the host. It is a leading-edge robotics competition. The RoboMaster University Series (RMU), initiated by DJI, is one of the events under the National College Student Robotics Competition. It serves as a platform for global technology enthusiasts to engage in robotics competition and academic exchange.",
        'id_content_content_2': "During my three years of 'working life' in the team, I have developed a variety of skills:",
        'id_content_content_3': "1.Proficiency in PCB design, with the ability to read electronic component datasheets and PCB schematics fluently.",
        'id_content_content_4': "2.Mastery of common equipment such as logic analyzers, oscilloscopes, and multimeters for testing purposes.",
        'id_content_content_5': "3.Proficient in using software like Altium Designer for circuit design and embedded system development.",
        'id_content_content_6': "4.In-depth understanding of embedded systems, particularly on the STM32 platform and its development software including Freemaster, STM32CubeMX, and STM32CubeMonitor. I have extensive experience in STM32 development, covering GPIO, DMA, CAN, UART, timers, and more.",
        'id_content_content_7': "5.Familiarity with basic electromechanical development knowledge, such as UART, CAN communication protocols, motor types, sensor types, and their drivers.",
        'id_content_content_8': "6.Completed multiple electromechanical integrated system designs, including six-axis robots, pneumatic-electric hybrid gantry systems, launch mechanisms, and mobile chassis.",
        'id_content_content_9': "7.Understanding robot operating systems, familiar with a set of internally developed robot operating systems within the team, including upper-lower computer communication, program scheduling, memory allocation, and simple reflection based on interrupt mechanisms.",
        'id_content_content_10': "8.Familiar with robot development processes, proficient in robot development debugging (LQR, PID, Kalman filtering, etc.).",
        'id_content_content_11': "9.Familiar with robot modeling (robot dynamics based on MATLAB toolboxes, robot kinematics development).",
        'id_content_content_12': "10.Familiar with robot systems, capable of selecting suitable robot configurations and appropriate drivers (motor load verification), and choosing sensor types based on operational conditions.",
        'id_content_content_13': "11.Capable of approaching robotics problems from the perspective of both modern control theory (time-domain, state equations, LQR, Kalman filtering) and traditional control theory(frequency-domain, MATLAB-assisted debugging of PID, characteristic roots).",
        'id_View_Vedio': "View Video",
        'id_Tec_head': "Technology stack:",
        'id_Tec_content': "As Talked above",
        'id_Abl_head': "Ability:",
        'id_Abl_content': "As Talked above",
        'id_Ach_head': "Achievements:",
        'id_Ach_content': "Participate in over 10 large-scale competitions, overseeing the circuit design and overall control of multiple robots. I was honored with 3 national-level awards and 4 provincial-level awards",
        'id_content_BTH': "Back to Home"
    },
    'Chinese': {
        'id_switchBtn': '中文',
        'id_content_title': "Robomaster机甲大师",
        'id_content_content_1': "Robomaster机甲大师是一项全国性的大学生机器人竞赛，由共青团中央、全国学联、深圳市人民政府联合主办，DJI大疆创新发起并承办，这是一个前沿的机器人竞赛。大疆发起的RoboMaster机甲大师高校系列赛(RMU)是全国大学生机器人竞赛下的一项赛事，为全球技术爱好者提供了一个参与机器人竞赛和学术交流的平台。",
        'id_content_content_2': "在团队的三年'工作生活'中，我学会了多种技能：",
        'id_content_content_3': "1.精通PCB设计，能流利阅读电子元件Datasheet和PCB原理图。",
        'id_content_content_4': "2.掌握常用设备如逻辑分析仪、示波器和万用表进行测试。",
        'id_content_content_5': "3.熟练使用嘉立创等软件进行电路设计和嵌入式系统开发。",
        'id_content_content_6': "4.深入了解嵌入式系统，特别是STM32平台及其开发软件，包括Freemaster, STM32CubeMX和STM32CubeMonitor。在STM32开发上有广泛经验，涵盖GPIO, DMA, CAN, UART, 定时器等。",
        'id_content_content_7': "5.熟悉基本的机电开发知识，如UART、CAN等通信协议、电机类型、传感器类型及其驱动。",
        'id_content_content_8': "6.完成了多个机电一体化系统设计，包括七轴机械臂、气电混合龙门系统、发射机构和移动底盘。",
        'id_content_content_9': "7.了解机器人操作系统，熟悉团队内部开发的一套机器人操作系统，该系统包括上下位机通信、程序调度、内存分配和基于中断机制的简单反射。",
        'id_content_content_10': "8.熟悉机器人开发流程，掌握机器人开发调试算法（LQR, PID, 卡尔曼滤波等）。",
        'id_content_content_11': "9.掌握机器人建模（基于MATLAB工具箱的机器人动力学，机器人运动学开发）。",
        'id_content_content_12': "10.熟悉机器人系统，能够选择合适的机器人构型和适当的驱动器（电机负载验证），并根据工况条件选择传感器类型。",
        'id_content_content_13': "11.能够从现代控制理论（时域、状态方程、LQR、卡尔曼滤波）和传统控制理论（频域、MATLAB辅助的PID调试、特征根分析）的角度处理机器人问题。",
        'id_View_Vedio': "观看视频",
        'id_Tec_head': "技术栈：",
        'id_Tec_content': "如上所述",
        'id_Abl_head': "能力：",
        'id_Abl_content': "如上所述",
        'id_Ach_head': "成就：",
        'id_Ach_content': "参加了10多场大型机器人比赛，负责多款机器人的电路设计和总体控制。荣获了3项国家级奖项和4项省级奖项",
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



