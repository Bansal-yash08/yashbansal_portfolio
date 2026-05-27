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
