/* CRAFT COUNTER: actual dates documented in the Gallery. */
const activityDates = [
  {
    "date": "2026-11-09",
    "craft": "Markers"
  },
  {
    "date": "2026-11-07",
    "craft": "Markers"
  },
  {
    "date": "2026-10-02",
    "craft": "Fineliners"
  },
  {
    "date": "2026-10-01",
    "craft": "Fineliners"
  }
];

const craftButtons = document.querySelectorAll(".craft-button");
const dayCount = document.querySelector("#day-count");
const countLabel = document.querySelector("#count-label");

function updateCounter(craft) {
  const matchingDates = activityDates
    .filter(entry => craft === "All crafts" || entry.craft === craft)
    .map(entry => entry.date);
  const days = new Set(matchingDates).size;
  dayCount.textContent = days;
  countLabel.textContent = craft === "All crafts"
    ? "days I have enjoyed creating"
    : "days spent on " + craft.toLowerCase();
}
craftButtons.forEach(button => {
  button.addEventListener("click", () => {
    craftButtons.forEach(item => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    updateCounter(button.dataset.craft);
  });
});
if (dayCount) updateCounter("All crafts");

/* GALLERY: craft and project filters work together. */
const craftFilter = document.querySelector("#craft-filter");
const projectFilter = document.querySelector("#project-filter");
const galleryEntries = document.querySelectorAll(".journal-entry");

function filterGallery() {
  let visibleCount = 0;
  galleryEntries.forEach(entry => {
    const matchesCraft = craftFilter.value === "All" || entry.dataset.craft === craftFilter.value;
    const matchesProject = projectFilter.value === "All" || entry.dataset.project === projectFilter.value;
    entry.hidden = !(matchesCraft && matchesProject);
    if (!entry.hidden) visibleCount++;
  });
  document.querySelectorAll(".month-group").forEach(group => {
    group.hidden = !group.querySelector(".journal-entry:not([hidden])");
  });
  document.querySelector("#filter-status").textContent = visibleCount + " photos shown";
  document.querySelector("#empty-gallery").hidden = visibleCount !== 0;
}
if (craftFilter) {
  craftFilter.addEventListener("change", filterGallery);
  projectFilter.addEventListener("change", filterGallery);
  filterGallery();
}

/* LIGHTBOX: view a larger photo. Escape and Close both dismiss it. */
const lightbox = document.querySelector("#photo-lightbox");
document.querySelectorAll(".photo-button").forEach(button => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    document.querySelector("#lightbox-image").src = image.src;
    document.querySelector("#lightbox-image").alt = image.alt;
    document.querySelector("#lightbox-caption").textContent = button.dataset.caption;
    lightbox.showModal();
  });
});
if (lightbox) {
  document.querySelector("#close-lightbox").addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) lightbox.close();
  });
}

/* GOOGLE MAP: choose one of the five inspiration places. */
document.querySelectorAll(".place-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".place-button").forEach(item => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");
    const map = document.querySelector("#inspiration-map");
    map.src = "https://www.google.com/maps?q=" + encodeURIComponent(button.dataset.location) + "&output=embed";
    map.title = "Google Map of " + button.textContent;
    document.querySelector("#map-caption").textContent = "Showing " + button.textContent + ".";
  });
});

/* FAQ ACCORDION: each button controls its own answer. */
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    document.getElementById(button.getAttribute("aria-controls")).hidden = isOpen;
    button.querySelector("span").textContent = isOpen ? "+" : "−";
  });
});

/* ADD ENTRY: preview only, in the current tab.
   This form does not upload a file or change the public Gallery. */
const entryForm = document.querySelector("#entry-form");
if (entryForm) {
  const photoInput = document.querySelector("#entry-photo");
  const projectInput = document.querySelector("#entry-project");
  const newProject = document.querySelector("#new-project-name");
  const photoPreview = document.querySelector("#selected-photo");
  const result = document.querySelector("#entry-preview");
  const message = document.querySelector("#form-message");
  let photoUrl = "";

  // Use the visitor's local calendar date rather than the UTC date.
  const today = new Date();
  const localDate = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");
  document.querySelector("#entry-date").value = localDate;

  photoInput.addEventListener("change", () => {
    if (photoUrl) URL.revokeObjectURL(photoUrl);
    photoUrl = "";
    photoPreview.hidden = true;
    result.hidden = true;
    const file = photoInput.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      photoInput.value = "";
      message.textContent = "Please choose an image file.";
      return;
    }
    photoUrl = URL.createObjectURL(file);
    photoPreview.src = photoUrl;
    photoPreview.hidden = false;
    message.textContent = "";
  });

  projectInput.addEventListener("change", () => {
    const creatingProject = projectInput.value === "new";
    document.querySelector("#new-project-field").hidden = !creatingProject;
    newProject.required = creatingProject;
    if (!creatingProject) newProject.value = "";
  });

  entryForm.addEventListener("submit", event => {
    event.preventDefault();
    const title = document.querySelector("#entry-title").value.trim();
    if (!title || !photoUrl) {
      message.textContent = "Add a photo, an activity title, and a date to preview your entry.";
      return;
    }
    if (newProject.required && !newProject.value.trim()) {
      message.textContent = "Give your new project a name.";
      newProject.focus();
      return;
    }
    document.querySelector("#preview-photo").src = photoUrl;
    document.querySelector("#preview-photo").alt = "Selected photo for " + title;
    document.querySelector("#preview-title").textContent = title;
    const date = document.querySelector("#entry-date").value;
    document.querySelector("#preview-date").textContent = new Date(date + "T12:00:00").toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
    const craft = document.querySelector("#entry-craft").value;
    const project = projectInput.value === "new" ? newProject.value.trim() : projectInput.value;
    const notes = document.querySelector("#entry-notes").value.trim();
    [["#preview-craft", craft], ["#preview-project", project], ["#preview-notes", notes]].forEach(([selector, value]) => {
      const element = document.querySelector(selector);
      element.textContent = value;
      element.hidden = !value;
    });
    result.hidden = false;
    message.textContent = "Your preview is ready. It stays in this tab.";
    result.scrollIntoView({ behavior: "auto", block: "nearest" });
  });

  entryForm.addEventListener("reset", () => {
    if (photoUrl) URL.revokeObjectURL(photoUrl);
    photoUrl = "";
    photoPreview.hidden = true;
    result.hidden = true;
    document.querySelector("#new-project-field").hidden = true;
    newProject.required = false;
    setTimeout(() => { document.querySelector("#entry-date").value = localDate; }, 0);
    message.textContent = "";
  });
}
