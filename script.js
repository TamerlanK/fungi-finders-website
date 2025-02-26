const navToggle = document.querySelector('[aria-controls="primary-nav"]')
const primaryNav = document.getElementById("primary-nav")

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true" || false

  navToggle.setAttribute("aria-expanded", !expanded)
  primaryNav.hidden = expanded
})

const resizeObserver = new ResizeObserver((entries) => {
  document.body.classList.add("resizing")

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing")
  })
})

resizeObserver.observe(document.body)
