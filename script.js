function toggleMode() {
  const profile = document.querySelector("#profile img")
  const html = document.documentElement
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    profile.setAttribute("src", "./Projeto_Assets/Theme=Light mode.png")
    profile.setAttribute("alt", "FORTO DE PERFIL LIGHT")
  } else {
    profile.setAttribute("src", "./Projeto_Assets/Theme=Dark mode.png")
    profile.setAttribute("alt", "FORTO DE PERFIL DARK")
  }
}
