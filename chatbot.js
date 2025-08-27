// === Base de conocimiento ===
const baseConocimiento = {
  "facultad": {
    "descripcion": "La Facultad de Contaduría Pública y Administración (FACPYA) de la UANL es una institución educativa de prestigio que forma profesionales en contaduría, administración y tecnologías de la información.",
    "mision": "Formar profesionales en contaduría y administración con un enfoque ético y compromiso social.",
    "vision": "Ser reconocida a nivel nacional e internacional por su calidad académica."
  },
  "programas": {
    "contaduría": "La Licenciatura en Contaduría Pública forma profesionales en auditoría, contabilidad financiera y fiscal.",
    "administración": "La Licenciatura en Administración desarrolla habilidades en gestión, recursos humanos, mercadotecnia y finanzas.",
    "tecnologías": "La Licenciatura en Tecnologías de la Información prepara en programación, bases de datos, redes y seguridad informática.",
    "posgrados": "Se ofrecen maestrías y especialidades en contabilidad, administración y finanzas."
  },
  "instalaciones": {
    "biblioteca": "La Biblioteca cuenta con libros, revistas y recursos digitales.",
    "deportes": "Canchas de fútbol, basquetbol y espacios de entrenamiento.",
    "laboratorios": "Laboratorios de cómputo con tecnología de punta."
  }
};

// === Motor de respuestas ===
function responder(pregunta) {
  const q = pregunta.toLowerCase();

  // Programas
  if (q.includes("contaduria")) return baseConocimiento.programas.contaduría;
  if (q.includes("administración")) return baseConocimiento.programas.administración;
  if (q.includes("información") || q.includes("tecnología")) return baseConocimiento.programas.tecnologías;
  if (q.includes("posgrado") || q.includes("maestría")) return baseConocimiento.programas.posgrados;

  // Facultad
  if (q.includes("mision")) return baseConocimiento.facultad.mision;
  if (q.includes("visión") || q.includes("vision")) return baseConocimiento.facultad.vision;
  if (q.includes("facultad")) return baseConocimiento.facultad.descripcion;

  // Instalaciones
  if (q.includes("biblioteca")) return baseConocimiento.instalaciones.biblioteca;
  if (q.includes("deporte")) return baseConocimiento.instalaciones.deportes;
  if (q.includes("laboratorio")) return baseConocimiento.instalaciones.laboratorios;

  // Respuesta por defecto
  return "😅 Ups... eso no lo sé. Pero pregúntame sobre la FACPYA y te respondo con gusto.";
}

// === Lógica del chat ===
function enviar() {
  const input = document.getElementById("user-input");
  const pregunta = input.value.trim();
  if (pregunta === "") return;

  const respuesta = responder(pregunta);

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><b>Tú:</b> ${pregunta}</p>`;
  chatBox.innerHTML += `<p><b>FACPYA-Bot:</b> ${respuesta}</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";
}
