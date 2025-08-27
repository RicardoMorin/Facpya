const baseConocimiento = {
  "facultad": {
    "descripcion": "La Facultad de Contaduría Pública y Administración (FACPYA) de la UANL es una de las más grandes y prestigiosas del país, ubicada en Ciudad Universitaria, San Nicolás de los Garza, N.L. Forma profesionales en contaduría, administración, tecnologías de la información, negocios y mercadotecnia.",
    "mision": "Formar profesionales altamente capacitados en negocios, administración y contaduría, con un enfoque ético, innovador y compromiso social.",
    "vision": "Ser reconocida a nivel nacional e internacional como la mejor institución en negocios, por su calidad académica, investigación y vinculación con la sociedad.",
    "historia": "FACPYA tiene sus orígenes en los años 50 y se consolidó oficialmente en 1973. Desde entonces ha formado a miles de profesionales en áreas administrativas y contables, siendo la facultad con mayor matrícula de la UANL."
  },
  "programas": {
    "contaduria": "La Licenciatura en Contaduría Pública forma expertos en auditoría, contabilidad fiscal, finanzas y control interno. Sus egresados suelen trabajar en despachos contables, empresas privadas, organismos públicos y el SAT.",
    "administracion": "La Licenciatura en Administración desarrolla líderes en gestión de empresas, recursos humanos, mercadotecnia, finanzas y operaciones.",
    "lati": "La Licenciatura en Tecnologías de Información (LTI) mezcla administración y tecnología: sistemas ERP, bases de datos, redes y digitalización de procesos.",
    "negocios": "La Licenciatura en Negocios Internacionales (LNI) prepara especialistas en comercio exterior, aduanas, logística internacional y tratados de libre comercio.",
    "posgrados": "Ofrece maestrías en Administración, Finanzas, Auditoría y Comercio Internacional, además de Doctorados en Filosofía con especialidad en Administración y en Contaduría."
  },
  "instalaciones": {
    "edificio": "El edificio principal cuenta con 6 pisos, aulas modernas, auditorios, áreas de estudio, el famoso lobby y el mural institucional.",
    "biblioteca": "La Biblioteca de FACPYA es una de las más completas en negocios de la UANL, con libros, revistas, bases de datos y recursos digitales.",
    "laboratorios": "Cuenta con laboratorios de cómputo, finanzas y simuladores de negocios, además de espacios especializados para LATI.",
    "deportes": "Los estudiantes pueden participar en equipos representativos de fútbol, básquetbol, voleibol y tochito, además de actividades recreativas.",
    "cafeterias": "Tiene varias cafeterías y comedor estudiantil, puntos de reunión clásicos para socializar o estudiar."
  },
  "vidaEstudiantil": {
    "eventos": "Entre los eventos más importantes están la Semana del Contador, la Semana del Administrador, congresos internacionales de negocios y el FACPYA Fest.",
    "sociedades": "La Sociedad de Alumnos (SAFACPYA) organiza actividades, torneos y congresos. También existen grupos como AIESEC, clubes de finanzas, logística y mercadotecnia.",
    "bolsaTrabajo": "FACPYA tiene una activa bolsa de trabajo y convenios con empresas como Deloitte, KPMG, PwC, EY, FEMSA, Heineken y CEMEX."
  },
  "curiosidades": {
    "estudiantes": "Es la facultad con mayor matrícula de la UANL, con más de 12,000 alumnos.",
    "lobby": "El lobby es tan famoso que se volvió punto de encuentro y hasta tiene memes propios.",
    "estereotipos": "Contaduría: calculadora en mano. Administración: futuros jefes. Negocios: todos quieren aduanas. LATI: los formales con sistemas. Mercadotecnia: los creativos."
  }
};

// === Motor de respuestas ===
function responder(pregunta) {
  const q = pregunta.toLowerCase();

  // Familias de palabras clave
  const contaduriaKeys = ["contaduria", "contaduría", "contador", "contadores", "contabilidad", "contable", "Contador"];
  const adminKeys = ["administracion", "administración", "administrador", "administradores", "gestion"];
  const latiKeys = ["lati", "tecnologia", "tecnologías", "informacion", "informática", "sistemas", "ti"];
  const negociosKeys = ["negocios", "internacional", "comercio", "aduanas", "logistica"];
  const mercaKeys = ["mercadotecnia", "marketing", "publicidad", "branding", "ventas"];
  const posgradoKeys = ["posgrado", "posgrados", "maestria", "maestrías", "doctorado", "doctorados", "especialidad", "especialidades"];

  // Buscador genérico de coincidencias
  function match(keys) {
    return keys.some(word => q.includes(word));
  }

  // Programas
  if (match(contaduriaKeys)) return baseConocimiento.programas.contaduria;
  if (match(adminKeys)) return baseConocimiento.programas.administracion;
  if (match(latiKeys)) return baseConocimiento.programas.lati;
  if (match(negociosKeys)) return baseConocimiento.programas.negocios;
  if (match(mercaKeys)) return baseConocimiento.programas.mercadotecnia;
  if (match(posgradoKeys)) return baseConocimiento.programas.posgrados;

  // Facultad
  if (q.includes("historia")) return baseConocimiento.facultad.historia;
  if (q.includes("mision")) return baseConocimiento.facultad.mision;
  if (q.includes("vision") || q.includes("visión")) return baseConocimiento.facultad.vision;
  if (q.includes("facultad") || q.includes("facpya")) return baseConocimiento.facultad.descripcion;

  // Instalaciones
  if (q.includes("edificio")) return baseConocimiento.instalaciones.edificio;
  if (q.includes("biblioteca")) return baseConocimiento.instalaciones.biblioteca;
  if (q.includes("laboratorio")) return baseConocimiento.instalaciones.laboratorios;
  if (q.includes("deporte")) return baseConocimiento.instalaciones.deportes;
  if (q.includes("cafeteria") || q.includes("cafetería")) return baseConocimiento.instalaciones.cafeterias;

  // Vida estudiantil
  if (q.includes("evento") || q.includes("fest") || q.includes("semana")) return baseConocimiento.vidaEstudiantil.eventos;
  if (q.includes("sociedad") || q.includes("alumno") || q.includes("grupo")) return baseConocimiento.vidaEstudiantil.sociedades;
  if (q.includes("bolsa") || q.includes("trabajo") || q.includes("empleo")) return baseConocimiento.vidaEstudiantil.bolsaTrabajo;

  // Curiosidades
  if (q.includes("curiosidad") || q.includes("dato")) return baseConocimiento.curiosidades.estudiantes;
  if (q.includes("lobby")) return baseConocimiento.curiosidades.lobby;
  if (q.includes("estereotipo")) return baseConocimiento.curiosidades.estereotipos;

  // Respuesta por defecto
  return "😅 Ups... eso no lo sé. Pero pregúntame sobre la FACPYA (carreras, instalaciones, historia, vida estudiantil, etc.) y con gusto te respondo.";
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
