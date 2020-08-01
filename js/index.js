const shareBtn = document.querySelector("#share-btn");

shareBtn.addEventListener("click", showSocials);

let open = false;

function showSocials(e) {
  if (!open) {
    shareBtn.children[0].style.display = "flex";
    shareBtn.children[0].style.cursor = "default";
    open = true;
  } else {
    open = false;
    shareBtn.children[0].style.display = "none";
  }

  e.preventDefault();
}
