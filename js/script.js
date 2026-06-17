// "Book Now" button in navbar → contact page
const bookBtn = document.getElementById("bookBtn");
if (bookBtn) {
  bookBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

// "Book Appointment" button in hero → contact page
const appointmentBtn = document.getElementById("appointmentBtn");
if (appointmentBtn) {
  appointmentBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
  });
}

// Contact form submission
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Appointment request submitted! Our team will contact you within 24 hours.");
    form.reset();
  });
}

// Quick-book card on home page
const quickCard = document.querySelector(".appointment-card");
if (quickCard) {
  const quickBtn = quickCard.querySelector("button");
  if (quickBtn) {
    quickBtn.addEventListener("click", () => {
      alert("✅ Request received! We'll follow up shortly.");
    });
  }
}

// Highlight active nav link based on current page
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll("nav a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("active");
  }
});