
/* ==========================================
   SHARED KASITU THEME SYSTEM
   Uses the same localStorage key as Home.
========================================== */

const PROJECT_THEME_KEY = "kasitu-theme";
const projectThemeToggle =
    document.getElementById("project-theme-toggle");

function applyProjectTheme(theme) {

    const safeTheme =
        theme === "light" ? "light" : "dark";

    document.documentElement.setAttribute(
        "data-theme",
        safeTheme
    );

    if (projectThemeToggle) {
        projectThemeToggle.textContent =
            safeTheme === "light" ? "☀️" : "🌙";
    }

}

function loadProjectTheme() {

    const savedTheme =
        localStorage.getItem(PROJECT_THEME_KEY) || "dark";

    applyProjectTheme(savedTheme);

}

if (projectThemeToggle) {

    projectThemeToggle.addEventListener("click", () => {

        const current =
            document.documentElement.getAttribute("data-theme") || "dark";

        const next =
            current === "dark" ? "light" : "dark";

        applyProjectTheme(next);
        localStorage.setItem(PROJECT_THEME_KEY, next);

    });

}

loadProjectTheme();

 /* ==========================================
   KASITU WEBS
   REUSABLE PROJECT VIEWER
========================================== */


/* ==========================================
   PROJECT DATABASE
========================================== */

const projects = {

    mumsy: {

        title: "Mumsy Braids Studio",

        category: "BOOKING SYSTEM",

        type: "Booking Management System",

        description:
            "A professional booking platform designed for Mumsy Braids Studio, allowing customers to explore services, select options, choose dates and times, submit their booking information and pay online.",

        url:
            "https://mumsybraidsstudio.co.za/",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Firebase",
            "PayStack",
            "Twilio"
        ],

        features: [
            "Online booking",
            "Service selection",
            "Date and time selection",
            "Customer information",
            "Booking management",
            "Payment/deposit workflow"
        ]

    },


    kamatla: {

        title: "KAMATLA Holdings",

        category: "Corporate",

        type: "Corporate Website & Brand Identity",

        description:
            "KAMATLA Holdings is a diversified holdings group with seven divisions: agriculture, logistics, construction, engineering, mining, funeral care and tyre services. We designed its brand identity and built a corporate website that presents every division, the group's mission and an enquiry form where customers choose the division they need.",

        url:
            "https://holdings-lfqb.onrender.com/",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        features: [
            "Seven divisions presented clearly",
            "Division-based enquiry form",
            "Click-to-call and email contact details",
            "Brand identity and logo",
            "Responsive design"
        ]

    },


    "kamatla-brand": {

        title: "KAMATLA Holdings Brand Identity",

        category: "Branding",

        type: "Logo & Brand Identity",

        description:
            "A complete brand identity for KAMATLA Holdings: a monogram logo, wordmark and six division icons for agriculture, logistics, construction, engineering, mining and funeral services, paired with the tagline Building Resources, Connecting, Empowering Communities.",

        url:
            "",

        technologies: [
            "Logo design",
            "Brand identity",
            "Print-ready files"
        ],

        features: [
            "Monogram logo",
            "Wordmark and colour palette",
            "Six division icons",
            "Brand tagline",
            "Digital and print versions"
        ]

    }

};


/* ==========================================
   GET PROJECT FROM URL
========================================== */

const params =
    new URLSearchParams(window.location.search);


const projectId =
    params.get("id");


/* ==========================================
   ELEMENTS
========================================== */

const title =
    document.getElementById("project-title");

const category =
    document.getElementById("project-category");

const description =
    document.getElementById("project-description");

const technologies =
    document.getElementById("project-tech");

const type =
    document.getElementById("detail-type");

const technologyDetail =
    document.getElementById("detail-technologies");

const features =
    document.getElementById("project-features");

const frame =
    document.getElementById("project-frame");

const browserUrl =
    document.getElementById("browser-url");

const openProject =
    document.getElementById("open-project");

const openProjectBottom =
    document.getElementById("open-project-bottom");

const loader =
    document.getElementById("iframe-loader");

const year =
    document.getElementById("year");


/* ==========================================
   FOOTER YEAR
========================================== */

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ==========================================
   CHECK PROJECT
========================================== */

if (!projectId || !projects[projectId]) {

    showProjectError();

} else {

    loadProject(
        projects[projectId]
    );

}


/* ==========================================
   LOAD PROJECT
========================================== */

function loadProject(project) {


    /* PAGE TITLE */

    document.title =
        `${project.title} | KASITU Webs`;


    /* HEADER */

    title.textContent =
        project.title;


    category.textContent =
        project.category;


    description.textContent =
        project.description;


    /* PROJECT TYPE */

    type.textContent =
        project.type;


    /* TECHNOLOGIES */

    technologyDetail.textContent =
        project.technologies.join(", ");


    technologies.innerHTML = "";


    project.technologies.forEach(
        tech => {

            const tag =
                document.createElement("span");

            tag.textContent =
                tech;

            technologies.appendChild(tag);

        }
    );


    /* FEATURES */

    features.innerHTML = "";


    project.features.forEach(
        feature => {

            const item =
                document.createElement("div");

            item.className =
                "feature-item";

            item.innerHTML = `
                <i class="fas fa-check"></i>
                ${feature}
            `;

            features.appendChild(item);

        }
    );


    /* PROJECT URL */

    openProject.href =
        project.url;


    openProjectBottom.href =
        project.url;


    browserUrl.textContent =
        project.url || "KAMATLA Holdings";


    /* LOAD LIVE WEBSITE */

    if (project.url) {
        frame.src = project.url;
    } else {
        frame.srcdoc = '<body style="margin:0;display:grid;place-items:center;height:100vh;background:#fff"><img src="../images/kamatla-holdings.webp" alt="KAMATLA Holdings" style="max-width:70%;max-height:92%"></body>';
        browserUrl.textContent = "KAMATLA Holdings";
        openProject.removeAttribute("href");
        openProjectBottom.removeAttribute("href");
    }


    /* SAVE PROJECT */

    localStorage.setItem(
        "lastProject",
        projectId
    );

}


/* ==========================================
   IFRAME LOADED
========================================== */

frame.addEventListener(
    "load",
    () => {

        loader.classList.add(
            "hidden"
        );

    }
);


/* ==========================================
   PROJECT ERROR
========================================== */

function showProjectError() {

    document.querySelector(
        ".project-page"
    ).innerHTML = `

        <section
            class="project-header">

            <span class="project-category">
                PROJECT NOT FOUND
            </span>

            <h1>
                Project Unavailable
            </h1>

            <p class="project-description">

                The project you are looking for
                could not be found.

            </p>

            <div class="project-actions">

                <a
                    href="../index.html#portfolio"
                    class="primary-btn">

                    <i class="fas fa-arrow-left"></i>

                    Back to Portfolio

                </a>

            </div>

        </section>

    `;

}
