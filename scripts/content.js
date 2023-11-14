const article = document.querySelector("article");

if (article) {
  const text = article.textContent; // textContent is a DOM API method.
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp); // matchAll() is a Javascript API method
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200); // Math is a javascript object but not an API method
  const badge = document.createElement("p"); // we can create an element using the createElement() method (this is a DOM API)
  badge.classList.add("color-secondary-text", "type--caption"); // classList is a read-only property that returns a live DOMTokenList collection of the "class" attributes of the element. This can be used to manipulate the class list. classList is read-only but using add(), remove(), replace(), or toggle() can allow editing.
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge); // the ?? is the nullish coalesching operator and will resolve as date if date is not null or undefined and heading if it is null or undefined. insertAdjacentElement() is a DOM API method. It takes two arguments 1) position, 2) element to be inserted. Position can be "beforebegin", "afterbegin", "beforeend", or "afterend"
}
