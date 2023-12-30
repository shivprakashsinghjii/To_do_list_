const input = document.querySelector("input");
const btn = document.querySelector(".addTask > button");

input.addEventListener("focus", () => {
    document.body.style.zoom = "100%";
});

input.addEventListener("blur", () => {
    document.body.style.zoom = null;
});

btn.addEventListener("click", addList);
input.addEventListener("keyup", (e) => e.keyCode === 13 && addList(e));

function addList(e) {
  const notCompleted = document.querySelector(".notCompleted");
  const completed = document.querySelector(".Completed");

  const newLi = document.createElement("li");
  const checkBtn = createButton('<i class="fa fa-check"></i>');
  const delBtn = createButton('<i class="fa fa-trash"></i>');

  if (input.value !== "") {
    newLi.textContent = input.value;
    input.value = "";
    notCompleted.appendChild(newLi);
    appendChildren(newLi, [checkBtn, delBtn]);

    checkBtn.addEventListener("click", () => {
      notCompleted.removeChild(newLi);
      completed.appendChild(newLi);
      checkBtn.style.display = "none";
    });

    delBtn.addEventListener("click", () => newLi.remove());
  }
}

function createButton(innerHtml) {
  const button = document.createElement("button");
  button.innerHTML = innerHtml;
  return button;
}

function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}
