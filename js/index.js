const shareBtn = document.querySelector("#share-btn");
const info = document.querySelector(".info-person");
shareBtn.addEventListener("click", showSocials);

let open = false;

function showSocials(e) {
  if (!open) {
    shareBtn.children[0].style.display = "flex";
    shareBtn.children[0].style.cursor = "default";
    shareBtn.visibility = "hidden";
    info.style.display = "none";
    open = true;
  } else {
    if (
      e.target.classList.contains("share-btn") ||
      e.target.classList.contains("share-movil")
    ) {
      open = false;
      shareBtn.children[0].style.display = "none";
      info.style.display = "flex";
    }
  }

  e.preventDefault();
}
