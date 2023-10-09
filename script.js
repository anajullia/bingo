const fileirab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const fileirai = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
const fileiran = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const fileirag = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
const fileirao = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];

function sortear(){
    let sorteadob1 = Math.floor(Math.random() * fileirab.length);
    let sorteadoi1 = Math.floor(Math.random() * fileirai.length);
    let sorteadon1 = Math.floor(Math.random() * fileiran.length);
    let sorteadog1 = Math.floor(Math.random() * fileirag.length);
    let sorteadoo1 = Math.floor(Math.random() * fileirao.length);
    
    let sorteadob2 = Math.floor(Math.random() * fileirab.length);
    let sorteadoi2 = Math.floor(Math.random() * fileirai.length);
    let sorteadon2 = Math.floor(Math.random() * fileiran.length);
    let sorteadog2 = Math.floor(Math.random() * fileirag.length);
    let sorteadoo2 = Math.floor(Math.random() * fileirao.length);

    let sorteadob3 = Math.floor(Math.random() * fileirab.length);
    let sorteadoi3 = Math.floor(Math.random() * fileirai.length);
    let sorteadog3 = Math.floor(Math.random() * fileirag.length);
    let sorteadoo3 = Math.floor(Math.random() * fileirao.length);

    let sorteadob4 = Math.floor(Math.random() * fileirab.length);
    let sorteadoi4 = Math.floor(Math.random() * fileirai.length);
    let sorteadon4 = Math.floor(Math.random() * fileiran.length);
    let sorteadog4 = Math.floor(Math.random() * fileirag.length);
    let sorteadoo4 = Math.floor(Math.random() * fileirao.length);

    let sorteadob5 = Math.floor(Math.random() * fileirab.length);
    let sorteadoi5 = Math.floor(Math.random() * fileirai.length);
    let sorteadon5 = Math.floor(Math.random() * fileiran.length);
    let sorteadog5 = Math.floor(Math.random() * fileirag.length);
    let sorteadoo5 = Math.floor(Math.random() * fileirao.length);

    document.getElementById("b1").innerHTML = fileirab[sorteadob1];
    document.getElementById("i1").innerHTML = fileirai[sorteadoi1];
    document.getElementById("n1").innerHTML = fileiran[sorteadon1];
    document.getElementById("g1").innerHTML = fileirag[sorteadog1];
    document.getElementById("o1").innerHTML = fileirao[sorteadoo1];

    document.getElementById("b2").innerHTML = fileirab[sorteadob2];
    document.getElementById("i2").innerHTML = fileirai[sorteadoi2];
    document.getElementById("n2").innerHTML = fileiran[sorteadon2];
    document.getElementById("g2").innerHTML = fileirag[sorteadog2];
    document.getElementById("o2").innerHTML = fileirao[sorteadoo2];

    document.getElementById("b3").innerHTML = fileirab[sorteadob3];
    document.getElementById("i3").innerHTML = fileirai[sorteadoi3];
    document.getElementById("g3").innerHTML = fileirag[sorteadog3];
    document.getElementById("o3").innerHTML = fileirao[sorteadoo3];

    document.getElementById("b4").innerHTML = fileirab[sorteadob4];
    document.getElementById("i4").innerHTML = fileirai[sorteadoi4];
    document.getElementById("n4").innerHTML = fileiran[sorteadon4];
    document.getElementById("g4").innerHTML = fileirag[sorteadog4];
    document.getElementById("o4").innerHTML = fileirao[sorteadoo4];

    document.getElementById("b5").innerHTML = fileirab[sorteadob5];
    document.getElementById("i5").innerHTML = fileirai[sorteadoi5];
    document.getElementById("n5").innerHTML = fileiran[sorteadon5];
    document.getElementById("g5").innerHTML = fileirag[sorteadog5];
    document.getElementById("o5").innerHTML = fileirao[sorteadoo5];
}

function resetar(){
    document.getElementsByClassName("celula").innerHTML=" ";
}

function marcar(){
    
}
