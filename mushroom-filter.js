const cards = document.querySelectorAll(".mushroom-guide .card")
const seasonFilter = document.querySelector("#season")
const edibleFilter = document.querySelector("#edible")
const noMatches = document.querySelector(".mushroom-guide .no-matches")

const currentFilters = {
  season: "all",
  edible: "all",
}

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`
  card.style.viewTransitionName = `card-${mushroomId}`
})

seasonFilter.addEventListener("change", updateFilter)
edibleFilter.addEventListener("change", updateFilter)

/**
 *
 * @param {Event} event
 */
function updateFilter(event) {
  const filterType = event.target.name
  currentFilters[filterType] = event.target.value

  if (!document.startViewTransition()) {
    filterCards()
    return
  }

  document.startViewTransition(() => filterCards())
}

function filterCards() {
  let hasVisibleCards = false
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season
    const edible = card.querySelector("[data-edible]").dataset.edible

    const matchesSeason = currentFilters.season === season
    const matchesEdible = currentFilters.edible === edible

    if (
      (matchesEdible || currentFilters.edible === "all") &&
      (matchesSeason || currentFilters.season === "all")
    ) {
      card.hidden = false
      hasVisibleCards = true
    } else {
      card.hidden = true
    }

    if (hasVisibleCards) {
      noMatches.hidden = true
    } else {
      noMatches.hidden = false
    }
  })
}

function enableFiltering() {
  seasonFilter.hidden = false
  edibleFilter.hidden = false
}

enableFiltering()
