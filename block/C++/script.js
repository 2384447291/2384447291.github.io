// 获取本地项目开始
function getProjects() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "projects.json", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                reject("Failed to load projects.json");
            }
        };
        xhr.send();
    });
}

function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="box tilt">
            <img draggable="false" src="${project.image}" alt="" style="width: 400px; height: auto;" /> <!-- 调整图片大小 -->
            <div class="content">
                <div class="tag">
                    <h3>${project.name}</h3>
                </div>
                <div class="desc">
                    <p>${project.desc}</p>
                    <div class="btns">
                        <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                    </div>
                </div>
            </div>
        </div>`
    });
    projectsContainer.innerHTML = projectsHTML;

    // vanilla tilt.js
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 20,
    });
    // vanilla tilt.js  

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'bottom',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* 滚动项目 */
    srtop.reveal('.work .box',{interval: 200}); 
}

getProjects().then(data => {
    showProjects(data);
}).catch(error => {
    console.error(error);
});
// 获取本地项目结束

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
