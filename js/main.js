document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector("nav");
  const contactInfo = document.querySelector(".contact-info");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      this.classList.toggle("active");

      if (nav) {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
      }

      if (contactInfo) {
        contactInfo.style.display =
          contactInfo.style.display === "flex" ? "none" : "flex";
      }
    });
  }

  // Testimonial Carousel
  const testimonials = document.querySelectorAll(".testimonial");
  const indicators = document.querySelectorAll(".indicators span");
  const prevBtn = document.querySelector(".carousel-controls .prev");
  const nextBtn = document.querySelector(".carousel-controls .next");

  if (testimonials.length > 0) {
    let currentIndex = 0;

    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = "none";
      }
    });

    // Function to show a specific testimonial
    const showTestimonial = (index) => {
      testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? "block" : "none";
      });

      indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
      });

      currentIndex = index;
    };

    // Event listeners for carousel controls
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = testimonials.length - 1;
        }
        showTestimonial(newIndex);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= testimonials.length) {
          newIndex = 0;
        }
        showTestimonial(newIndex);
      });
    }

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        showTestimonial(index);
      });
    });

    // Auto-rotate testimonials
    setInterval(() => {
      let newIndex = currentIndex + 1;
      if (newIndex >= testimonials.length) {
        newIndex = 0;
      }
      showTestimonial(newIndex);
    }, 7000);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for fixed header
          behavior: "smooth",
        });
      }
    });
  });

  // Form Submission Handler
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Mostrar indicador de carga
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Enviando...';
      submitButton.disabled = true;

      // Recopilar datos del formulario para EmailJS
      const templateParams = {
        from_name: document.getElementById("name").value,
        reply_to: document.getElementById("email").value,
        phone_number: document.getElementById("phone").value,
        service_needed: document.getElementById("service").value,
        message: document.getElementById("message").value,
        to_email: "luisbolivar515@gmail.com",
      };

      // Enviar correo electrónico usando EmailJS
      emailjs.send("service_93ox926", "template_99h3fs5", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);

          // Restablecer formulario
          contactForm.reset();

          // Mostrar mensaje de éxito
          const successMessage = document.createElement("div");
          successMessage.className = "success-message";
          successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>¡Gracias por contactarnos!</h3>
            <p>Hemos recibido su solicitud y nos pondremos en contacto con usted a la brevedad.</p>
          `;

          // Reemplazar formulario con mensaje de éxito
          contactForm.innerHTML = "";
          contactForm.appendChild(successMessage);

          // Estilos del mensaje de éxito
          successMessage.style.textAlign = "center";
          successMessage.style.padding = "2rem";
          successMessage.style.color = "var(--primary-dark-blue)";

          const icon = successMessage.querySelector("i");
          if (icon) {
            icon.style.fontSize = "3rem";
            icon.style.color = "var(--accent-green)";
            icon.style.marginBottom = "1rem";
          }
        },
        function (error) {
          console.log("FAILED...", error);

          // Restaurar botón de envío
          submitButton.innerHTML = originalButtonText;
          submitButton.disabled = false;

          // Mostrar mensaje de error
          alert(
            "Lo sentimos, hubo un problema al enviar su mensaje. Por favor, intente nuevamente o contáctenos directamente por teléfono."
          );
        }
      );
    });
  }

  // Header scroll effect
  const header = document.querySelector("header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.style.padding = "0.5rem 0";
        header.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.padding = "1rem 0";
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      }
    });
  }

  // Reveal animations on scroll
  const revealElements = document.querySelectorAll(
    ".service-card, .benefit-card, .about-content, .testimonial"
  );

  if (revealElements.length > 0) {
    const revealElement = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(revealElement, options);

    revealElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      observer.observe(element);
    });
  }
});
