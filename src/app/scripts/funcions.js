export function yellowSubmarine(id){
  let element = document.getElementById(id)
  element.style.color = "yellow"
}

export function changeSize(id,height,width){
  const taula = document.getElementById(id)
  taula.style.height = height
  taula.style.width = width
}
