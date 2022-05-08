const teste = window.document.querySelector('h1');

function Idselector(id){ 
    const titulo = document.getElementById(id)
    return titulo
}


  function changeBoxColor(newColor, id){
      const boxs = document.getElementById(id)
      boxs.style.backgroundColor = newColor;
  }

  function changeBox1Color(newColor){
    const boxs = document.getElementById("box1")
    boxs.style.backgroundColor = newColor;
}