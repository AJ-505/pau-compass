document.addEventListener("DOMContentLoaded", function() {
    show_home(); // Call your function as soon as the HTML is parsed
});

let [home, sibas, e_learning, student_portal, sst, smc] = [document.getElementById("home"),
     document.getElementById("sibas"),
     document.getElementById("e-learning"),
     document.getElementById("student-portal"),
     document.getElementById("sst"),
     document.getElementById("smc")
    ];

function show_smc() {
    smc.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    sst.style.display = "none";
}

function show_sst() {
    sst.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    smc.style.display = "none";
}

function show_student_portal() {
    student_portal.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    smc.style.display = "none";
    sst.style.display = "none";
}

function show_e_learning() {
    e_learning.style.display = "block";
    home.style.display = "none";
    sibas.style.display = "none";
    smc.style.display = "none";
    student_portal.style.display = "none";
    sst.style.display = "none";
}

function show_sibas() {
    sibas.style.display = "block";
    home.style.display = "none";
    smc.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    sst.style.display = "none";
}

function show_home() {
    home.style.display = "block";
    smc.style.display = "none";
    sibas.style.display = "none";
    e_learning.style.display = "none";
    student_portal.style.display = "none";
    sst.style.display = "none";
}
