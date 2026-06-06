document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-box input");
    const filterButtons = document.querySelectorAll(".filter-chip");
    const productCards = document.querySelectorAll(".product-card");

    const phoneNumber = "5233330280"; //

    // ==================================================
    // FILTRO POR BUSCADOR
    // ==================================================
    function filterProducts() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const activeFilter = document.querySelector(".filter-chip.active")?.textContent.trim().toLowerCase() || "todos";

        productCards.forEach((card) => {
            const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
            const description = card.querySelector("p")?.textContent.toLowerCase() || "";
            const badge = card.querySelector(".badge")?.textContent.toLowerCase().toLowerCase() || "";
            const category = card.dataset.category?.toLowerCase() || "";

            const matchesSearch =
                title.includes(searchTerm) ||
                description.includes(searchTerm) ||
                badge.includes(searchTerm);

            const matchesFilter =
                activeFilter === "todos" || category === activeFilter;

            card.style.display = matchesSearch && matchesFilter ? "block" : "none";
        });
    }

    // ==================================================
    // BUSCADOR
    // ==================================================
    if (searchInput) {
        searchInput.addEventListener("input", filterProducts);
    }

    // ==================================================
    // BOTONES DE FILTRO
    // ==================================================
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            filterProducts();
        });
    });

    // ==================================================
    // BOTÓN COTIZAR POR WHATSAPP EN CADA TARJETA
    // ==================================================
    productCards.forEach((card) => {
        const btn = card.querySelector("a");
        if (!btn) return;

        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const productName = card.querySelector("h3")?.textContent.trim() || "Producto";
            const productCategory = card.dataset.category?.trim() || "Catálogo";
            const message = `Hola, quiero cotizar estos productos:\n\nCategoría: ${productCategory}`;

            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank", "noopener,noreferrer");
        });
    });

    // ==================================================
    // BOTÓN HEADER COTIZA EN LÍNEA
    // ==================================================
    const headerBtn = document.querySelector(".btn-header");
    if (headerBtn) {
        headerBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const message = "Hola, quiero cotizar sus productos.";
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank", "noopener,noreferrer");
        });
    }

    // ==================================================
    // EFECTO SUAVE AL CARGAR
    // ==================================================
    productCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 120 * index);
    });

    // Ejecutar filtro inicial
    filterProducts();
});