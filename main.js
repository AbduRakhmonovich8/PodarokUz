"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////
// for animate sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  rootMargin: "40px",
  threshold: 0.8,
});
const rAll = document.querySelectorAll(".r_hide");
rAll.forEach(function (section) {
  section.classList.add("section__hidden");
  sectionObserver.observe(section);
});




const revealSectionl = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hiddenl");
  observer.unobserve(entry.target);
};
const sectionObserverl = new IntersectionObserver(revealSectionl, {
  root: null,
  rootMargin: "40px",
  threshold: 0.8,
});
const lAll = document.querySelectorAll(".l_hide");
lAll.forEach(function (section) {
  section.classList.add("section__hiddenl");
  sectionObserverl.observe(section);
});

const revealSectionu = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hiddenu");
  observer.unobserve(entry.target);
};
const sectionObserveru = new IntersectionObserver(revealSectionu, {
  root: null,
  rootMargin: "40px",
  threshold: 0.8,
});
const uAll = document.querySelectorAll(".u_hide");
uAll.forEach(function (section) {
  section.classList.add("section__hiddenu");
  sectionObserveru.observe(section);
});
