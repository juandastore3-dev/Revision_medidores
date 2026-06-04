// =========================
// FIRMA USUARIO
// =========================

function activarFirma(idCanvas) {

    const canvas = document.getElementById(idCanvas);

    if (!canvas) {
        console.error(`No existe el canvas: ${idCanvas}`);
        return;
    }

    const ctx = canvas.getContext("2d");

    let dibujando = false;

    //Lapiz digital donde se pinta en la hoja en blanco
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    canvas.addEventListener("pointerdown", (e) => {

        dibujando = true;

        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);

    });

    canvas.addEventListener("pointermove", (e) => {

        if (!dibujando) return;

        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();

    });

    canvas.addEventListener("pointerup", () => {

        dibujando = false;
        ctx.beginPath();

    });

    canvas.addEventListener("pointerleave", () => {

        dibujando = false;
        ctx.beginPath();

    });

}

// Activar ambos canvas
activarFirma("Firma_Usuario");
activarFirma("Firma_funcionario");


// =========================
// LIMPIAR FIRMA USUARIO
// =========================

document
.getElementById("limpiarFirmaUsuario")
.addEventListener("click", () => {

    const canvas = document.getElementById("Firma_Usuario");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

});


document
.getElementById("limpiarFirmaFuncionario")
.addEventListener("click", () => {

    const canvas = document.getElementById("Firma_funcionario");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

});

const firmaUsuario =
document.getElementById("Firma_Usuario")
.toDataURL("image/png");

const firmaFuncionario =
document.getElementById("Firma_funcionario")
.toDataURL("image/png");

console.log(firmaUsuario);
console.log(firmaFuncionario);