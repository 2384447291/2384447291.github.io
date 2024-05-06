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
        'id_content_title': '"Engineering" Robot',
        'id_content_content_1': "In the RoboMaster competition, the engineering robot is a crucial robot. Its main function is to transport objects. This robot needs to achieve a large working space extension within a limited volume while ensuring that its end effector can accurately complete the picking task. Moreover, it needs to accurately place the picked items into the six-degree-of-freedom target basket.",
        'id_content_content_2': "The challenge of engineering robots lies in circuit design, such as arranging enough drivers in limited space and protecting wires under high degrees of freedom. Additionally, due to the high degrees of freedom, it's necessary to design automation to assist operators in completing tasks effectively.",
        'id_content_content_3': "During my three years of participation in the competition, I primarily handled this robot, including circuit design and control code development. Over the past three years, our team has produced a total of four engineering robots, comprising two gantries with pneumatic-electric hybrid drives and two 7-axis robotic arms.",
        'id_content_content_4': "For all four robots, my specific tasks included overall design (PCB design, wire layout), programming (driver sensor low-level driving, robot controller, automation process design, human-machine interaction design), and subsequent maintenance.",
        'id_content_content_5': "The entire workflow: First, design the corresponding configuration based on the rules of the year (including the number of rotating joints and moving joints), then select motors according to the corresponding joint requirements (torque, speed, load), and write corresponding drivers. Next, conduct kinematics and dynamics simulations of the envisioned configuration and deploy the corresponding algorithms to embedded solutions. After the robot manufacturing is completed, design the circuit layout for the robot. After completing the basic functions, communicate with the operator and conduct repeated tests to determine the optimal automation and control schemes.",
        'id_content_content_6': "The entire workflow:",
        'id_content_content_7': "For the 7-axis robotic arm, a T265 camera was integrated to obtain camera coordinate transformations. By mapping the robotic arm coordinates to the camera coordinates, effective human-machine interaction was achieved. Additionally, visual recognition was utilized to identify the pose of the target basket, assisting in operations.",
        'id_Tec_head': "Technology stack:",
        'id_Tec_content': "Robotics Toolbox (Matlab programming), Embedded Development (STM32 series software support, Keil, FreeMASTER, CubeMonitor, CubeMX), T265 Driver (Basic ROS Development), PCB Design (Iceda), Conventional Robot Overall Drive (Upper-Lower Computer Communication, Robot Operating System), Conventional Robot Hardware System Design (Wiring, Circuit Boards), Conventional Robot System Control Algorithms (PID, LQR, Kalman Filtering, Modern Control Theory, Classical Control Theory).",
        'id_Abl_head': "Ability:",
        'id_Abl_content': "Robotics (Robot Kinematics, Robot Dynamics); Robotic Arm Design; Overall Robot Design",
        'id_Ach_head': "Achievements:",
        'id_Ach_content': "Invited to present the project at the DJI Young Engineers Summit, winner of the first prize in the 2023 National Robotics Competition, ROBOMASTER Multiple Awards.",
        'id_content_view_vedio': "View video",
        'id_content_BTH': "Back to Home"
    },
    'Chinese': {
        'id_switchBtn': '中文',
        'id_content_title': '“工程”机器人',
        'id_content_content_1': "在RoboMaster比赛中，工程机器人是一种关键机器人，其主要功能是运输物体。这种机器人需要在有限的尺寸下实现大的工作空间扩展，同时确保其末端执行器能精确完成拾取任务。此外，它需要精确地将拾取的物品放置到六自由度的目标篮中。",
        'id_content_content_2': "工程机器人的挑战在于电路设计，如何在有限的空间内安排足够的驱动器，并在高自由度的运动下保护线路。此外，由于机器人的高自由度，有必要设计合理的自动化流程以协助操作员有效完成任务。",
        'id_content_content_3': "在过去的三年中，我们团队共生产了四台工程机器人，包括两台带有气动-电动混合驱动的龙门和两台7轴机械臂，我主要负责这四台机器人的电控工作，包括电路设计和控制代码编写。",
        'id_content_content_4': "对于所有四台机器人，我的具体任务包括整体设计（PCB设计、线路布局）、编程（驱动传感器低级驱动、机器人控制器、自动化过程设计、人机交互设计）以及后续维护。",
        'id_content_content_5': "整个工作流程：首先，根据当年的规则设计相应的配置（包括旋转关节和移动关节的数量），然后根据相应的关节要求选择电机（扭矩、速度、负载），并编写相应的驱动程序。接下来，对设想的配置进行运动学和动力学仿真，并将相应的算法部署到嵌入式解决方案中。在机器人制造完成后，设计机器人的电路布局。完成基本功能后，与操作员沟通并进行反复测试，以确定最佳的自动化和控制方案。",
        'id_content_content_6': "整个工作流程：",
        'id_content_content_7': "对于7轴机械臂，集成了T265摄像头以获取摄像头坐标变换。通过将机器人坐标映射到摄像头坐标，实现了有效的人机交互。此外，利用视觉识别来识别目标篮的姿态，协助操作。",
        'id_Tec_head': "技术栈：",
        'id_Tec_content': "机器人工具箱（Matlab编程）、嵌入式开发（STM32系列软件及其开发套件：Keil、FreeMASTER、CubeMonitor、CubeMX）、T265驱动（基础ROS开发）、PCB设计（Iceda）、常规机器人整体驱动（上下位机通信、机器人操作系统）、常规机器人硬件系统设计（布线、电路板）、常规机器人控制算法（PID、LQR、卡尔曼滤波、现代控制理论、经典控制理论）。",
        'id_Abl_head': "能力：",
        'id_Abl_content': "机器人技术（机器人运动学、动力学）；机械臂设计；整体机器人设计",
        'id_Ach_head': "成就：",
        'id_Ach_content': "应邀在DJI青年工程师大会上展示项目，2023年全国机器人竞赛一等奖，ROBOMASTER机甲大师多项奖项",
        'id_content_view_vedio': "观看视频",
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



