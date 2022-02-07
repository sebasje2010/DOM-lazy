const isIntersecting=(entry=>{
    return entry.isIntersecting //devuelve true si esta en la pantalla
})

const loadImage=entry=>{
    const container=entry.target //contenedor (div)
    const imagen=container.querySelector('img')
    const url=imagen.dataset.src;
    imagen.src=url
    loadedImages++
    printLog()
    observer.unobserve(container)
}

const observer=new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage)

})

export const registerImage=(imagen)=>{
    //intersectionObservador 
    observer.observe(imagen);
}