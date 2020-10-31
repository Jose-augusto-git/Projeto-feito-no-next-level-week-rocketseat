//tipos de dados
//String "" 
// Number 01
//Object {}
//Boolean true or false
// Array []


//create map
const map = L.map('mapid').setView([-27.2193463,-49.6494425], 15)

//create and tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon

const icon =  L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58, 68], 
    iconAnchor: [29,68],
})

//create and  add marker
//L.marker([-27.2193463,-49.6494425], {icon}).addTo(map)
 //   .bindPopup(popup)


let marker;

//create and  add marker

map.on('click', (event) => {
  //  console.log(event)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remover icon 

    marker && map.removeLayer(marker)

    //add icon Layer

    marker = L.marker([lat, lng], {icon})
    .addTo(map)

})

// adicionar o campo de fotos

function addPhotoField(){
   // console.log('esta OK')


   //pegar o container de fotos #images

   const container = document.querySelector('#images')

   //pegar o container para dublicar .new-upload

    const fieldsContainer = document.querySelectorAll('.new-upload')

   //realizar o clone da ultima imagem adicionadas

   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

   //verificar se o campo esta vazio se estiver não adicionar no container de imagens

   const input = newFieldContainer.children[0]
   if(input.value == ""){
       return
   }

   //limpar o campo antes de adicionar

   input.value = ""

   //adicionar o clone ao container de #imagens

    container.appendChild(newFieldContainer)

    

}
//deleta os campos
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo para

    span.parentNode.remove()
}

//selecionar sim ou não

function toggleSelect(event){
    //retirar a class.active (dos botões)

    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })//.forEach(button => button.classList.remove('active'))

    //colocar a class .active nesse botão clicado

    const button= event.currentTarget
    button.classList.add('active')
    
    // atualizar o meu input hidden com o valor selecionado

    const input =  document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
    
    //verificar se sim ou não

}
function validate(event){
    //validar se lat e lng estao preenchidos
    //const needsLatAndLng = true;
    if(needsLatAndLng){
        event.preventDefault()
        alert('você esqueceu de marca a localização')
    }
    
}

