
//--------Corpo Primeira e Segunda Parte: Troca de pets ao selecionar

const pets = document.querySelectorAll(".fichaDoPet")
const nome = document.getElementById("nomeDoPet")
const descricao = document.getElementById("descricaoDoPet")
const fotoGrande = document.getElementById("fotoDoPet")

for(let i = 0; i < pets.length; i++){
    const pet = pets[i]
    const miniatura = pet.querySelector("img")
    miniatura.addEventListener("click", () => {
        nome.textContent = pet.querySelector("h2").textContent
        descricao.textContent = pet.querySelector(".descricao").textContent
        fotoGrande.src = miniatura.src
    })
}