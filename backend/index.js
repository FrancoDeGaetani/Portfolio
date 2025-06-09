
import cors from "cors";
import sendMail from "./email.js";
import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).send("Faltan campos");
    }

    try {
        await sendMail({ nombre, email, mensaje });
        res.status(200).send("Mensaje enviado");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al enviar mensaje");
    }
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
