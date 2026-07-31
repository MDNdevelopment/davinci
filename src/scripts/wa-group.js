const group = document.querySelector(".dv-wa-group");

if (group) {
  const toggle = group.querySelector(".dv-wa--toggle");
  toggle.addEventListener("click", () => {
    const open = group.dataset.open === "true";
    group.dataset.open = open ? "false" : "true";
    toggle.setAttribute("aria-expanded", open ? "false" : "true");
  });
  document.addEventListener("click", (e) => {
    if (!group.contains(e.target) && group.dataset.open === "true") {
      group.dataset.open = "false";
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}
