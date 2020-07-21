// Writing by JIRAYU NINLAPUN
// v1.0 - Vanilla JavaScript

// GET Cursor items

let cInner = document.getElementById("c-inner"),
  cOuter = document.getElementById("c-outer");

//   GET Mousemove event
document.getElementsByTagName("body")[0].addEventListener("mousemove", (e) => {
  (cInner.style.left = e.clientX + "px"),
    (cInner.style.top = e.clientY + "px"),
    (cOuter.style.left = e.clientX + "px"),
    (cOuter.style.top = e.clientY + "px");
});

// Add class when CURSOR is Acive

const ActiveStatus = (target) => {
  target.addEventListener("mouseover", () => {
    cInner.classList.add("active"), cOuter.classList.add("active");
  }),
    target.addEventListener("mouseout", () => {
      cInner.classList.remove("active"), cOuter.classList.remove("active");
    });
}

// Find all DOM elements that have class name "target"

for (
    let Elem = document.querySelectorAll(".target"), Index = Elem.length - 1;
    Index >= 0;
    Index--
  ) {
    ActiveStatus(Elem[Index]);
  }

// Initial = Inactive when DOM Started

Inactive();
