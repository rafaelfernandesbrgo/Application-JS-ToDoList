

var ul = document.querySelector("#ul")
var input = document.querySelector("#input")
var button = document.querySelector("#button")



var itens =JSON.parse(localStorage.getItem('Itens')) || []




function render() {

    ul.innerHTML=""

    for (item of itens) {
        var li = document.createElement("li")
        var textli = document.createTextNode(item)
        li.appendChild(textli)
   
        var link =document.createElement('a')
        link.href="#"
        var linkText=document.createTextNode("Delete")
        link.appendChild(linkText)    

        var pos=itens.indexOf(item)
        link.setAttribute("onclick", "DeleteItem("+ pos +")" )


        li.appendChild(link)

        ul.appendChild(li)
    }
}

function AddItem(){
    var item =  input.value
    itens.push(item)
    input.value=""
    render()
    SaveStorage()
}

function DeleteItem(position){
    itens.splice(position,1)
    render()
    SaveStorage()
}

function SaveStorage(){
    localStorage.setItem('Itens', JSON.stringify(itens))
}

button.addEventListener("click", AddItem)


render()


