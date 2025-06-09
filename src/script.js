    const produkSelect = document.getElementById("produk");
    const mainImage = document.getElementById("main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    const imageMap = {
        kaos: "img/blank-black-t-shirt-hanger-isolated-white-background.jpg",
        topi: "img/canvas-hat-blank-fashion-sport.jpg",
        tas: "img/wiser-by-the-mile-SwWCo1k92M4-unsplash.jpg"
    };

    function updateImage(produk) {
        mainImage.src = imageMap[produk] || "img/blank-black-t-shirt-hanger-isolated-white-background.jpg";
        thumbnails.forEach(t => t.classList.remove('active'));
        document.querySelector(`.thumbnail[data-produk="${produk}"]`)?.classList.add("active");
        produkSelect.value = produk;
    }

    produkSelect.addEventListener("change", function () {
        const produk = this.value;
        updateImage(produk);
    });

    thumbnails.forEach(t => {
        t.addEventListener("click", () => {
        const produk = t.dataset.produk;
        updateImage(produk);
        });
    });

    mainImage.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = mainImage.src;
    });

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });
