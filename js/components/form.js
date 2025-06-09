const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn")
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);    

    const data = {
        nombre: formData.get("nombre"),
        email: formData.get("email"),
        mensaje: formData.get("mensaje")
    };

    try {
        const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        submitBtn.textContent = "¡ Gracias !";
        form.reset();
    } else {
        submitBtn.textContent = "Ocurrió un error.";
    }
    } catch (err) {
        console.error(err);
        status.textContent = "No se pudo enviar el mensaje.";
    }});