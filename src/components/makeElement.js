export function makeElement(tagName, attributes = [], child = []) {
    let tag = document.createElement(tagName);
  
    attributes.forEach((obj) => {
      for (let [key, value] of Object.entries(obj)) {
        tag.setAttribute(key, value);
      }
    });
  
    child.forEach((ch) => {
      if (typeof ch === "string") {
        tag.innerHTML = ch;
      } else {
        tag.append(ch);
      }
    });
    return tag;
  }