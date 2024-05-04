function registerHonesty(isHonest) {
    const result = document.getElementById("result-honesty");
    if (isHonest) {
        result.innerHTML = "Gracias por ser honesto/a.";
    } else {
        result.innerHTML = "Agradecemos tu sinceridad.";
    }
}

function validateName() {
    const input = document.getElementById("nombre");
    input.value = input.value.toUpperCase().replace(/[^a-zA-Z ]/g, '');
}

function showInfo() {
    const facultad = document.getElementById("facultad").value;
    const container = document.getElementById("info-container");

    let employmentLink = "";
    let salaryInfo = "";
    let newsLink = "";

    // Define los enlaces y salarios basados en la facultad seleccionada
    switch (facultad) {
        case "Derecho":
            employmentLink = "https://co.linkedin.com/jobs/derecho-empleos";
            salaryInfo = "Salario promedio: COP 4,000,000 - COP 7,000,000";
            newsLink = "https://www.bbc.com/mundo/articles/cd15pl2z76ko";
            break;
        case "Biología Ambiental":
            employmentLink = "https://www.google.com/search?q=empleos+de+biología+ambiental";
            salaryInfo = "Salario promedio: COP 3,000,000 - COP 5,000,000";
            newsLink = "https://medioambiente.uexternado.edu.co/la-corrupcion-en-el-sector-ambiental-como-medio-de-degradacion-del-patrimonio-natural-colombiano/";
            break;
        case "Ingeniería Civil":
            employmentLink = "https://co.linkedin.com/jobs/ingeniero-civil-empleos";
            salaryInfo = "Salario promedio: COP 3,000,000 - COP 6,000,000";
            newsLink = "https://caracol.com.co/emisora/2021/06/11/ibague/1623427051_661926.html";
            break;
        case "Ingeniería Electrónica":
            employmentLink = "https://www.google.com/search?q=empleos+relacionados+con+ingeniería+electrónica";
            salaryInfo = "Salario promedio: COP 3,500,000 - COP 6,500,000";
            newsLink = "https://urosario.edu.co/periodico-nova-et-vetera/nuestra-u/la-industria-de-la-electronica-se-enfrentara-una-crisis-de-escasez-de-ingenieros/";
            break;
        case "Ingeniería Industrial":
            employmentLink = "https://www.google.com/search?q=trabajos+relacionados+con+ingeniería+industrial";
            salaryInfo = "Salario promedio: COP 3,500,000 - COP 6,500,000";
            newsLink = "https://www.abc.es/economia/20151005/abci-ingenieros-escandalo-volkswagen-201510051829.html";
            break;
        case "Ingeniería Mecánica":
            employmentLink = "https://www.google.com/search?q=trabajos+relacionados+con+ingeniería+mecánica";
            salaryInfo = "Salario promedio: COP 3,500,000 - COP 6,500,000";
            newsLink = "https://www.elespectador.com/ambiente/francisco-posada-el-caleno-que-detono-el-escandalo-de-volkswagen-article-603678/";
            break;
        case "Ingeniería de Sistemas":
            employmentLink = "https://www.google.com/search?q=trabajos+relacionados+con+ingeniería+en+sistemas";
            salaryInfo = "Salario promedio: COP 4,000,000 - COP 7,000,000";
            newsLink = "https://www.elmundo.es/tecnologia/2020/02/27/5e56e29a21efa0822f8b4715.html";
            break;
        case "Administración de Empresas":
            employmentLink = "https://co.linkedin.com/jobs/administrador-de-empresa-empleos";
            salaryInfo = "Salario promedio: COP 3,000,000 - COP 6,000,000";
            newsLink = "https://www.imf.org/es/Blogs/Articles/2017/09/21/corruption-in-latin-america-taking-stock";
            break;
        case "Arquitectura":
            employmentLink = "https://www.google.com/search?q=trabajos+relacionados+con+arquitectura";
            salaryInfo = "Salario promedio: COP 3,500,000 - COP 7,000,000";
            newsLink = "https://www.lanacion.com.py/pais_edicion_impresa/2023/05/26/por-indicios-de-corrupcion-allanan-arquitectura-una/";
            break;
        case "Comunicación Social y Periodismo":
            employmentLink = "https://co.linkedin.com/jobs/comunicador-empleos";
            salaryInfo = "Salario promedio: COP 2,000,000 - COP 4,500,000";
            newsLink = "https://www.hayderecho.com/2015/01/28/crisis-y-corrupcion-tambien-en-los-medios-de-comunicacion/";
            break;
        case "Diseño":
            employmentLink = "https://co.linkedin.com/jobs/dise%C3%B1ador-gr%C3%A1fico-empleos";
            salaryInfo = "Salario promedio: COP 2,000,000 - COP 4,500,000";
            newsLink = "https://repositorio.uniandes.edu.co/server/api/core/bitstreams/266823ef-ff72-4956-9fa9-e59f0e164e75/content";
            break;
        case "Psicología":
            employmentLink = "https://www.google.com/search?q=trabajos+relacionados+con+psicología";
            salaryInfo = "Salario promedio: COP 3,000,000 - COP 5,500,000";
            newsLink = "https://scielo.isciii.es/scielo.php?pid=S0212-97282020000200016&script=sci_arttext&tlng=es";
            break;
    }

    const adminSalaryLink = "https://www.comfama.com/finanzas/educacion-financiera/como-administrar-bien-el-sueldo/";

    container.innerHTML = `
        <h3>Información sobre tu Facultad</h3>
        <ul>
            <li><a href="${employmentLink}" target="_blank">Empleos relacionados</a></li>
            <li>${salaryInfo}</li>
            <li><a href="${adminSalaryLink}" target="_blank">Cómo administrar tu sueldo</a></li>
            <li><a href="${newsLink}" target="_blank">Noticias sobre corrupción</a></li>
        </ul>
    `;
}

function toggleCamera(activate) {
    const cameraContainer = document.getElementById("camera-container");
    const video = document.getElementById("video");

    if (activate) {
        cameraContainer.style.display = "block";

        if (!stream) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(mediaStream => {
                    stream = mediaStream;
                    video.srcObject = stream;
                })
                .catch(error => {
                    console.error("Error al activar la cámara:", error);
                });
        }
    } else {
        cameraContainer.style.display = "none";

        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
        }
    }
}

function takePhoto() {
    const video = document.getElementById("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const photoContainer = document.getElementById("photo-result");
    const nombre = document.getElementById("nombre").value.toUpperCase();

    photoContainer.innerHTML = `<h3>LA DECISION DE CAMBIAR AL MUNDO ES TUYA, ${nombre}</h3>`;
    photoContainer.appendChild(canvas);
}

function noCameraMessage() {
    const nombre = document.getElementById("nombre").value.toUpperCase();
    const photoContainer = document.getElementById("photo-result");

    photoContainer.innerHTML = `<h3>${nombre}, LA HONESTIDAD ES FUNDAMENTAL PARA CONSTRUIR UNA SOCIEDAD JUSTA Y EQUITATIVA. AYUDA A PREVENIR LA CORRUPCIÓN Y PROMUEVE CONFIANZA EN LAS INSTITUCIONES Y ENTRE LAS PERSONAS.</h3>`;
}
