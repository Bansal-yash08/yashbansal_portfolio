const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projects.forEach((project) => {
      const categories = project.dataset.category || "";
      project.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

const copyEmail = document.querySelector("#copyEmail");

copyEmail?.addEventListener("click", async () => {
  const email = "yash08bansal@gmail.com";
  try {
    await navigator.clipboard.writeText(email);
    copyEmail.textContent = "Email Copied";
    window.setTimeout(() => {
      copyEmail.textContent = "Copy Email";
    }, 1600);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

const imageModal = document.querySelector("#imageModal");
const imageModalImg = document.querySelector("#imageModalImg");
const imageModalTitle = document.querySelector("#imageModalTitle");
const imageModalClose = document.querySelector(".image-modal__close");
const imageTriggers = document.querySelectorAll(".image-trigger");

function openImageModal(src, title, alt) {
  if (!imageModal || !imageModalImg || !imageModalTitle) return;
  imageModalImg.src = src;
  imageModalImg.alt = alt || title || "Project image";
  imageModalTitle.textContent = title || "Project image";
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  imageModalClose?.focus();
}

function closeImageModal() {
  if (!imageModal || !imageModalImg) return;
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  imageModalImg.src = "";
}

imageTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const img = trigger.querySelector("img");
    openImageModal(trigger.dataset.fullImage || img?.src, trigger.dataset.imageTitle, img?.alt);
  });
});

imageModalClose?.addEventListener("click", closeImageModal);

imageModal?.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal?.classList.contains("open")) {
    closeImageModal();
  }
});
