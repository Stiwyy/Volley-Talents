document.addEventListener('DOMContentLoaded', () => {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    console.log('Scroll elements:', scrollElements);

    window.addEventListener('scroll', () => {
        scrollElements.forEach(el => {
            if (isOneSixthInViewport(el)) {
                el.classList.add('show');
            }
        });
    });

    function isOneSixthInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (rect.top >= 0 && rect.top <= windowHeight * (4 / 6)) || (rect.bottom >= 0 && rect.bottom <= windowHeight * (5 / 6));
    }

    const typewriterElement = document.getElementById('typewriter');
    const text = "Entfalte dein Potenzial – verwirkliche deine Volleyball-Ambitionen!";
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 40); 
        }
    }

    if (typewriterElement) {
        typewriterElement.textContent = ''; 
        type();
    } else {
        console.log('Typewriter element not found');
    }

    const modal = document.getElementById("imageModal");
    const img = document.querySelector(".preview-img");
    const modalImg = document.getElementById("imgPreview");
    const closeModal = document.querySelector(".close");

    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.classList.add("animate");
    }


    closeModal.onclick = function () {
        modal.style.display = "none";
        modalImg.classList.remove("animate");
    }

        
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalImg.classList.remove("animate");
        }
    }

});
