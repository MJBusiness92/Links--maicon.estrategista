function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // PEGAR A TAG DA IMAGEM
  const img = document.querySelector("#profile img")

  // ESTA FUNÇÃO SUBSTITUI A IMAGEM
  if (html.classList.contains("light")) {
    // SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
    img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    //  SE TIVER LIGHT MODE MANTER A IMAGEM NORMAL
    img.setAttribute("src", "./assets/avatar.png")
  }
    // ABAIXO UM EXEMPLO DE FUNÇÃO QUE PODEMOS FAZER
    // if(html.classList.contains('light')) {
    //  html.classList.remove('light')
    // } else {
    //  html.classList.add('light')
  }

  // ABAIXO SEGUNDO EXEMPLO DE CONDICIONAL QUE PODEMOS FAZER
  // html.classList.toggle('light')

  // FUNÇÃO PARA MUDAR O IMAGEM DO AVATAR NO LIGHT MODE
  // }