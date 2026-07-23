function filterAll() {
    document.getElementById("galeriaItem1").style.display = "block";
    document.getElementById("galeriaItem2").style.display = "block";
    document.getElementById("galeriaItem3").style.display = "block";
    document.getElementById("galeriaItem4").style.display = "block";
    document.getElementById("galeriaItem5").style.display = "block";
}

function filterPeru() {
    document.getElementById("galeriaItem1").style.display = "block";
    document.getElementById("galeriaItem2").style.display = "block";
    document.getElementById("galeriaItem3").style.display = "none";
    document.getElementById("galeriaItem4").style.display = "none";
    document.getElementById("galeriaItem5").style.display = "none";
}

function filterExtranjero() {
    document.getElementById("galeriaItem1").style.display = "none";
    document.getElementById("galeriaItem2").style.display = "none";
    document.getElementById("galeriaItem3").style.display = "block";
    document.getElementById("galeriaItem4").style.display = "none";
    document.getElementById("galeriaItem5").style.display = "none";
}

function filterCultura() {
    document.getElementById("galeriaItem1").style.display = "none";
    document.getElementById("galeriaItem2").style.display = "none";
    document.getElementById("galeriaItem3").style.display = "none";
    document.getElementById("galeriaItem4").style.display = "block";
    document.getElementById("galeriaItem5").style.display = "block";
}