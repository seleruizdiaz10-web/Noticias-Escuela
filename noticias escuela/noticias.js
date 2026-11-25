import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const opcionesBarra = [
  [{ font: [] }, { size: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ align: [] }],
  ["clean"]
];

const quill = new Quill("#editor-container", {
  theme: "snow",
  modules: { toolbar: opcionesBarra },
  placeholder: "Escribí el cuerpo de la noticia aquí..."
});

const form = document.getElementById("form-noticia");
const btnSubir = document.getElementById("btn-subir");
const IMAGEN_POR_DEFECTO = "images/LOGO2.webp";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const subtitulo = document.getElementById("subtitulo").value.trim();
  const fecha = document.getElementById("fecha").value;
  const textoPlano = quill.getText().trim();
  const comunicadoHTML = quill.getSemanticHTML();

  if (!titulo || !subtitulo || !fecha || textoPlano.length === 0) {
    alert("Por favor, completá todos los campos obligatorios y el comunicado.");
    return;
  }

  btnSubir.disabled = true;
  btnSubir.textContent = "Subiendo...";

  try {
    await addDoc(collection(db, "noticias"), {
      titulo,
      subtitulo,
      fecha,
      comunicado: comunicadoHTML,
      imagenUrl: IMAGEN_POR_DEFECTO,
      creadoEn: serverTimestamp()
    });

    alert("¡Noticia publicada con éxito!");
    form.reset();
    quill.setContents([]);
  } catch (error) {
    console.error("Error al subir la noticia:", error);
    alert("Ocurrió un error al guardar la noticia. Revisá la consola o las reglas de Firestore.");
  } finally {
    btnSubir.disabled = false;
    btnSubir.textContent = "Subir";
  }
});