export function yellowSubmarine(id){
  let element = document.getElementById(id)
  element.style.color = "yellow"
}

export function changeSize(id,height,width){
  const taula = document.getElementById(id)
  taula.style.height = height
  taula.style.width = width
}
export function augmentaPrimeraLletra(classe) {
  const elements = document.getElementsByClassName(classe);

  for(let i = 0; i < elements.length; i++){
    const element = elements[i]

    const text = element.textContent
    element.innerHTML = `<span style="font-size: 2rem; font-weight: bold;">${text[0]}</span>${text.slice(1)}`;
  }
}
export function countWords(idParagraf, idResultat) {
  const paragraf = document.getElementById(idParagraf);
  const resultat = document.getElementById(idResultat);

  const paraules = paragraf.textContent.trim().split(/\s+/);

  resultat.textContent = `Nombre de paraules: ${paraules.length}`;
}

