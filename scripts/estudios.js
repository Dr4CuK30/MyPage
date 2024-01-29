var estudios = [
  {
    titulo: "Angular: De cero a experto (Edición 2021)",
    lugar: "Udemy",
    url: "assets/images/educacion/UdemyLogo.png",
    descripcion:
      "Componentes, directivas, servicios, mapas, gráficas, JWT, autenticación, despliegues, mongo, Git, GitHub y mucho más.",
    type: "Web",
    style: "danger",
    fecha: "Julio 2021",
    diploma:
      "https://www.udemy.com/certificate/UC-ee6558cb-d02f-4e0e-9ae4-934de4393265/",
  },
  {
    titulo: "Diplomado Habilidades de Programación",
    lugar: "Universidad Nacional de Colombia",
    url: "assets/images/educacion/DiplomadoUnal.png",
    descripcion:
      "Programa de conocimiento académico en habilidades de programación MISIÓN TIC 2022.",
    type: "Programación",
    style: "warning",
    fecha: "Diciembre 2020",
    diploma:
      "https://drive.google.com/file/d/1bskxXEEWKczhu7vd2HU0GqgmFStfpfOt/view?usp=sharing",
  },
  {
    titulo: "Curso Profesional de Javascript",
    lugar: "Platzi",
    url: "assets/images/educacion/JavascriptPro.png",
    descripcion:
      "Curso dedicado a la profundización de conocimientos en Javascript y Typescript y aplicación de buenas practicas en dichos lenguajes.",
    type: "Programación",
    style: "warning",
    fecha: "Marzo 2021",
    diploma:
      "https://drive.google.com/file/d/1e7rp6vf6_BlALveryfJAb1M4hlibMjYn/view?usp=sharing",
  },
  {
    titulo: "Ingeniería de Sistemas",
    lugar: "Universidad Distrital Francisco Jose de Caldas",
    url: "assets/images/educacion/Distrital.png",
    descripcion: `Pregrado de la facultad de ingeniería, actualmente en 5 semestre y miembro activo de ACM como tutor del grupo de trabajo GIWEB.`,
    type: "Ingeniería",
    style: "primary",
    fecha: "Cursando actualmente",
  },
  {
    titulo: "Angular (Intermediate) Certificate",
    lugar: "HackerRank",
    url: "assets/images/educacion/Angular-Hack.png",
    descripcion: `It covers topics like Routing, NgModules, Observables for data transmission and event handling, Dependency Injections, and APIs.`,
    type: "Web",
    style: "danger",
    fecha: "Junio 2021",
    diploma: "https://www.hackerrank.com/certificates/4907ea1e8da3",
  },
];

function htmlGenerator() {
  var html = ``;
  for (let estudio of estudios) {
    html += `
        <li class="glide__slide">
            <div class="card bg-p">
                <img class="card-img-top" src="${estudio.url}" alt="${estudio.titulo}">
                <div class="card-body">
                    <h4 class="card-title mt-2" style="font-weight: bold">${estudio.titulo}</h4>
                    <h5 class="card-subtitle text-muted">${estudio.lugar}</h5>
                    <hr>
                    <div style="display: flex">
                        <span style="font-size: 14px"><i class="fas fa-calendar-times me-1"></i>${estudio.fecha}</span>
                        <span class="ms-auto badge bg-${estudio.style}">${estudio.type}</span>
                    </div>
                    <p class="card-text mt-2">${estudio.descripcion}</p>
                `;
    if (estudio.diploma) {
      html += `<div class="text-center">
            <a href="${estudio.diploma}" target="_blank" class="btn btn-diploma">Ver Certificado</a>
        </div>`;
    }
    html += `</div>
                    </div>
                </li>`;
  }
  return html;
}

function loadEstudios() {
  const estudios_div = document.getElementById("estudios");
  estudios_div.innerHTML = htmlGenerator();
}

loadEstudios();
