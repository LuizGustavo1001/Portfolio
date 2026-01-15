const body = document.body
const availableLang = ["BR", "EN"]

// Verify last theme
const savedTheme = localStorage.getItem("theme")
if(savedTheme == "dark"){toggleTheme()}


// Default language
if(! localStorage.getItem("lang")){
    const defaultLang = navigator.language
    if(defaultLang == "pt-BR"){
        localStorage.setItem("lang", "BR")
    }else{
        localStorage.setItem("lang", "EN")
    }
}

// Toggle theme
const toggleThemeIcon = document.querySelectorAll(".toggle-theme")
toggleThemeIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        toggleTheme()
    })
})

function toggleTheme(){
    body.classList.toggle("dark-mode")

    const isDark = body.classList.contains("dark-mode")
    localStorage.setItem("theme", isDark ? "dark" : "light")

    const toggleItems = document.querySelectorAll(".toggle-theme-icon")
    toggleItems.forEach(icon => {icon.classList.toggle("inactive")})
}


// Toggle language
const savedLang = localStorage.getItem("lang")
if(availableLang.includes(savedLang)){
    loadLanguage(savedLang)
}

const toggleLangIcon = document.querySelectorAll(".toggle-lang")
toggleLangIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        const lang = icon.innerHTML
        if(availableLang.includes(lang)){
            if(lang == "EN"){
                loadLanguage("BR")
                localStorage.setItem("lang", "BR")
            }else{
                loadLanguage("EN")
                localStorage.setItem("lang", "EN")
            }
        }    
    })
})

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