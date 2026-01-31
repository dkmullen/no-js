function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
    return;
  }
  document.addEventListener("DOMContentLoaded", fn);
}
ready(function () {
  loadHTML("nav-include", "../includes/nav-header.html");
});

async function loadHTML(id, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  document.getElementById(id).innerHTML = await res.text();
}

document.querySelectorAll(".grid-div").forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element.classList[0]);
  });
});
