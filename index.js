function show_site(name) {
    const iframes = document.querySelectorAll("iframe");
    let target_frame = document.getElementById(name);
    iframes.forEach(iframe => {
        iframe.style.display = "none";
    })
    target_frame.style.display = "block";
}

function show_smc() {
    show_site("smc");
}

function show_sst() {
    show_site("sst");
}

function show_tic() {
    show_site("tic");
}

function show_e_learning() {
    show_site("e-learning");
}

function show_sibas() {
    show_site("sibas");
}

function show_home() {
    show_site("home");
}

function show_library() {
    show_site("library");
}

function show_cafeteria() {
    show_site("cafeteria");
}