
// =========================
// LOADING SCREEN
// =========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.8s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 1500);
});


// =========================
// DARK / LIGHT THEME TOGGLE
// =========================
const themeBtn = document.getElementById("themeBtn");
let darkMode = true;

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    darkMode = !darkMode;

    themeBtn.innerText = darkMode ? "🌙" : "☀️";
});

// =========================
// FAQ TOGGLE
// =========================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");

        const p = item.querySelector("p");

        if (p.style.display === "block") {
            p.style.display = "none";
        } else {
            p.style.display = "block";
        }
    });
});


// =========================
// LOGIN MODAL (FAKE)
// =========================
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    alert("Simulação de login: sistema ainda em desenvolvimento.");
});

// =========================
// SCROLL REVEAL SIMPLE
// =========================
const elements = document.querySelectorAll(
    ".card, .service-card, .project-card, .feature-item, .testimonial-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
});

// =========================
// SIMPLE PARTICLES EFFECT
// =========================
const particles = document.getElementById("particles");

for (let i = 0; i < 40; i++) {
    const dot = document.createElement("div");

    dot.style.position = "absolute";
    dot.style.width = "4px";
    dot.style.height = "4px";
    dot.style.background = "#4f7cff";
    dot.style.borderRadius = "50%";
    dot.style.top = Math.random() * 100 + "%";
    dot.style.left = Math.random() * 100 + "%";
    dot.style.opacity = Math.random();

    dot.style.animation = `float ${3 + Math.random() * 5}s infinite ease-in-out`;

    particles.appendChild(dot);
}


// garante que o loader nunca fique preso
window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");

    if (!loader) return;

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.6s ease";

        setTimeout(() => {
            loader.remove();
        }, 700);

    }, 1200);
});


document.querySelectorAll(".faq-item").forEach(item => {
    const text = item.querySelector("p");

    // começa fechado sempre
    if (text) text.style.display = "none";

    item.addEventListener("click", () => {
        const isOpen = text.style.display === "block";

        // fecha todos
        document.querySelectorAll(".faq-item p").forEach(p => {
            p.style.display = "none";
        });

        // abre só o clicado
        text.style.display = isOpen ? "none" : "block";
    });
});


document.addEventListener("mouseleave", () => {
    const cursor = document.querySelector("body > div");
    if (cursor) cursor.style.opacity = "0";
});

document.addEventListener("mouseenter", () => {
    const cursor = document.querySelector("body > div");
    if (cursor) cursor.style.opacity = "1";
});


// evita duplicar efeitos se recarregar scripts
if (!window.__ADAPTOID_INIT__) {
    window.__ADAPTOID_INIT__ = true;

    console.log("Adaptoid UI carregado com sucesso");
}


const benchmarkData = {
    "RTX 4060": 78,
    "RTX 4070": 92,
    "RX 7700 XT": 88,
    "RX 7800 XT": 94,
    "RTX 4090": 100
};

function runBenchmarkDemo(gpu) {
    const score = benchmarkData[gpu] || Math.floor(Math.random() * 80 + 20);

    showDemoNotification(
        `Benchmark ${gpu}: ${score}/100 (simulado)`
    );

    return score;
}


const priceDatabase = {
    "RTX 4060": {
        "KaBuM": 1899,
        "Terabyte": 1799,
        "Pichau": 1849
    },

    "RTX 4070": {
        "KaBuM": 3599,
        "Terabyte": 3499,
        "Pichau": 3550
    },

    "RX 7800 XT": {
        "KaBuM": 3299,
        "Terabyte": 3199,
        "Pichau": 3250
    }
};

function getBestPrice(product) {
    const data = priceDatabase[product];

    if (!data) {
        showDemoNotification("Produto não encontrado (demo)");
        return;
    }

    let bestStore = "";
    let bestPrice = Infinity;

    for (let store in data) {
        if (data[store] < bestPrice) {
            bestPrice = data[store];
            bestStore = store;
        }
    }

    showDemoNotification(
        `Melhor preço: ${product} → ${bestStore} R$ ${bestPrice} (demo)`
    );

    return { bestStore, bestPrice };
}


const gpuPower = {
    "RTX 4060": 70,
    "RTX 4070": 85,
    "RX 7700 XT": 80,
    "RX 7800 XT": 88,
    "RTX 4090": 100
};

function runGameBenchmark(game, quality) {
    const gpu = document.getElementById("gpuSelect").value;

    let base = gpuPower[gpu] || 60;

    let multiplier = quality === "high" ? 0.7 : 1.0;

    let fps = Math.floor(base * multiplier + Math.random() * 10);

    createNotification(
        `${game} (${quality}) → ~${fps} FPS com ${gpu} (simulado)`
    );
}


function createNotification(text) {
    const el = document.createElement("div");

    el.innerText = text;

    el.style.position = "fixed";
    el.style.bottom = "20px";
    el.style.right = "20px";
    el.style.background = "rgba(10,12,25,0.95)";
    el.style.color = "#fff";
    el.style.padding = "12px 16px";
    el.style.border = "1px solid #4f7cff";
    el.style.borderRadius = "10px";
    el.style.zIndex = "99999";
    el.style.transition = "0.3s";
    el.style.opacity = "0";

    document.body.appendChild(el);

    setTimeout(() => el.style.opacity = "1", 100);

    setTimeout(() => {
        el.style.opacity = "0";
        setTimeout(() => el.remove(), 300);
    }, 2500);
}

