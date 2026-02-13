const body          = document.body
const availableLang = ["BR", "EN"]

// Toggle theme
function toggleTheme(){
    body.classList.toggle("dark-mode")

    const isDark = body.classList.contains("dark-mode")
    localStorage.setItem("theme", isDark ? "dark" : "light")

    const icons = document.querySelectorAll(".toggle-theme-icon")
    icons.forEach(icon => {icon.classList.toggle("inactive")})
}


// Toggle language
const toggleLangIcon = document.querySelectorAll(".toggle-lang-icon")

const toggleLangBox = document.querySelectorAll(".toggle-lang")
toggleLangBox.forEach(box => {
    box.addEventListener("click", () => {
        const nextLangIcon  = box.querySelector(".toggle-lang-icon:not(.inactive)")
        const nextLang      = nextLangIcon.dataset.nextLang

        if(availableLang.includes(nextLang)){toggleLanguage(nextLang)}
    })
})

function toggleLanguage(lang){
    toggleLangIcon.forEach(icon => {icon.classList.toggle("inactive", icon.dataset.nextLang === lang)})

    localStorage.setItem("lang", lang)
    loadLanguage(lang)
}

async function loadLanguage(lang){
    const res = await fetch(`lang/${lang}.json`)
    const data = await res.json()

    const translateContent = document.querySelectorAll("[data-i18n]")

    translateContent.forEach(item => {
        const key = item.dataset.i18n
        const value = data[key]
 
        if(value !== undefined){item.innerHTML = value}
    })
}


// Section click highlight effect
const cardNavIcons = document.querySelectorAll(".page-nav")
cardNavIcons.forEach(item => {
    item.addEventListener("click", () => {
        const selectedSection = document.getElementById(item.dataset.id)

        selectedSection.classList.add("highlight-border")

        setTimeout(() => {selectedSection.classList.remove("highlight-border")}, 2000)
    })
})


// Local Storage
const savedTheme = localStorage.getItem("theme") || "light"
if(savedTheme == "dark"){toggleTheme()}

const toggleThemeIcon = document.querySelectorAll(".toggle-theme")
toggleThemeIcon.forEach(icon => {icon.addEventListener("click", () => {toggleTheme()})})


const savedLang = localStorage.getItem("lang") || "BR"
if(availableLang.includes(savedLang)){toggleLanguage(savedLang)}