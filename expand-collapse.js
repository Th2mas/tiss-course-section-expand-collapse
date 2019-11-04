appendExpandCollapseButtons();

function appendExpandCollapseButtons() {
  const headers = document.getElementsByClassName("subscriptionGroupHead");
  for (let header of headers) {
    header.appendChild(expandCollapseElement());
  }
}

function expandCollapseElement() {
  const a = document.createElement("a");
  a.onclick = expandCollapse;
  a.innerText = "Collapse";

  return a;
}

function expandCollapse() {
  if (this.innerText === "Expand") {
    expand(this);
    this.innerText = "Collapse";
  } else {
    collapse(this);
    this.innerText = "Expand";
  }
}

function collapse(elem) {
  courseSection(elem).style.display = "none";
}

function expand(elem) {
  courseSection(elem).style.display = "block";
}

function courseSection(elem) {
  return elem.parentNode.nextSibling;
}
