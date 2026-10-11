/* Demo-only booking interaction. No data is sent to a server. */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#booking-form");
  if (!form || !window.tours) return;
  const tourSelect = document.querySelector("#booking-tour");
  const dateInput = document.querySelector("#booking-date");
  const timeSelect = document.querySelector("#booking-time");
  const guestSelect = document.querySelector("#booking-guests");
  const summaryImage = document.querySelector("#summary-image");
  const summaryTitle = document.querySelector("#summary-title");
  const summaryDescription = document.querySelector("#summary-description");
  const summaryDuration = document.querySelector("#summary-duration");
  const summaryGuests = document.querySelector("#summary-guests");
  const summaryPrice = document.querySelector("#summary-price");
  const message = document.querySelector("#booking-message");
  const params = new URLSearchParams(window.location.search);

  window.tours.forEach(tour => {
    const option = document.createElement("option");
    option.value = tour.id;
    option.textContent = `${tour.name} — ${tour.durationLabel}`;
    tourSelect.appendChild(option);
  });
  if (params.get("tour") && window.tours.some(t => t.id === params.get("tour"))) tourSelect.value = params.get("tour");

  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0,10);
  dateInput.min = localToday;

  function updateSummary() {
    const tour = window.tours.find(t => t.id === tourSelect.value);
    const guests = Number(guestSelect.value);
    summaryGuests.textContent = `${guests} ${guests === 1 ? "guest" : "guests"}`;
    if (!tour) {
      summaryImage.style.backgroundImage = "";
      summaryTitle.textContent = "Choose an experience";
      summaryDescription.textContent = "Select a tour to see its details and estimated group price.";
      summaryDuration.textContent = "—";
      summaryPrice.textContent = "—";
      return;
    }
    summaryImage.style.backgroundImage = `url("${tour.image}")`;
    summaryTitle.textContent = tour.name;
    summaryDescription.textContent = tour.tagline;
    summaryDuration.textContent = tour.durationLabel;
    summaryPrice.textContent = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(tour.price) + " ฿";
  }
  [tourSelect, guestSelect].forEach(el => el.addEventListener("change", updateSummary));
  updateSummary();

  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const tour = window.tours.find(t => t.id === tourSelect.value);
    if (!tour) return;
    const data = new FormData(form);
    const ref = "SD-DEMO-" + Math.random().toString(36).slice(2,8).toUpperCase();
    message.className = "form-message success-message";
    message.innerHTML = `<strong>Demo request reviewed — ${ref}</strong><br>${data.get("name")}, your sample request for <strong>${tour.name}</strong> on ${data.get("date")} at ${data.get("time")} has been validated in this browser. Nothing has been booked, sent, or charged.`;
    message.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});
