document.querySelector('button').addEventListener('click', search)

function search() {

    let choice = document.querySelector('input').value

    fetch(`https://www.dnd5eapi.co/api/spells/${choice}/`)
    .then(res => res.json())
    .then(data => {
    console.log(data.classes)
    
    let classesObj = data.classes
    getClasses(classesObj)



    })
    .catch(err => {
        console.log(`Error: ${err}`)
    }) 

}

function getClasses(classesObj) {
    // Clear the existing UL
    let items = Array.from(document.querySelector('#classDisplay').childNodes)
    console.log(items)
    

    items.forEach(item => {
        console.log(item)
        console.log(`removing ${item}`)

        document.querySelector('#classDisplay').removeChild(item)
    })
    


    // Add classes to display    
    classesObj.forEach(e => console.log(e.name))

    classesLiArray = classesObj.map(e => {
        let li = document.createElement('li')
        li.textContent = e.name;
        document.querySelector('#classDisplay').appendChild(li)
    })

}


