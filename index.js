let [home, sibas, e_learning, student_portal, sst, smc, library, cafeteria] = [document.getElementById("home"),
     document.getElementById("sibas"),
     document.getElementById("e-learning"),
     document.getElementById("student-portal"),
     document.getElementById("sst"),
     document.getElementById("smc"), 
     document.getElementById("library"),
     document.getElementById("cafeteria")
    ];

function show_smc() {
    smc.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    sst.style.display = "none";
    library.style.display = "none";
    cafeteria.style.display = "none";
}

function show_sst() {
    sst.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    smc.style.display = "none";
    library.style.display = "none";
    cafeteria.style.display = "none";
}

function show_student_portal() {
    student_portal.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    smc.style.display = "none";
    sst.style.display = "none";
    library.style.display = "none";
    cafeteria.style.display = "none";
}

function show_e_learning() {
    e_learning.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    smc.style.display = "none";
    student_portal.style.display = "none";
    sst.style.display = "none";
    library.style.display = "none";
    cafeteria.style.display = "none";
}

function show_sibas() {
    sibas.style.display = "block";
    home.style.display = "none";
    smc.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    sst.style.display = "none";
    library.style.display = "none";
    cafeteria.style.display = "none";
}

function show_home() {
    home.style.display = "block";
    smc.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    sst.style.display = "none";
    library.style.display = "none";
    cafeteria.style.display = "none";
}

function show_library() {
    library.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    smc.style.display = "none";
    sst.style.display = "none";
    cafeteria.style.display = "none";
}

function show_cafeteria() {
    cafeteria.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    smc.style.display = "none";
    sst.style.display = "none";
    library.style.display = "none";
}