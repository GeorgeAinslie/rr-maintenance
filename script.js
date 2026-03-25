document.getElementById("year").textContent = new Date().getFullYear();

const params = new URLSearchParams(window.location.search);
if (params.get("sent") === "1") {
  const contact = document.getElementById("contact");
  if (contact) {
    const note = document.createElement("div");
    note.style.margin = "0 0 14px";
    note.style.padding = "12px 14px";
    note.style.border = "1px solid rgba(255,255,255,.25)";
    note.style.borderRadius = "14px";
    note.style.background = "rgba(255,255,255,.10)";
    note.textContent = "Thanks — we’ve received your enquiry and will get back to you shortly.";
    contact.querySelector(".container").prepend(note);
  }
}
