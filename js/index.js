const shareBtn = document.querySelector("#share-btn");
const info = document.querySelector(".info-person");
shareBtn.addEventListener("click", showSocials);

let open = false;

function showSocials(e) {
  if (!open) {
    shareBtn.children[0].style.display = "flex";
    shareBtn.children[0].style.cursor = "default";
    info.classList.add("hide-info");
    open = true;
  } else {
    if (
      e.target.classList.contains("share-btn") ||
      e.target.classList.contains("share-movil")
    ) {
      shareBtn.children[0].style.display = "none";
      info.classList.remove("hide-info");
      open = false;
    }
  }

  e.preventDefault();
}
