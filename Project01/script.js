const buttons = document.querySelectorAll(".class")
const body = document.querySelector("body")

buttons.forEach(function(buttons){
   buttons.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if (e.target === red) {
        body.style.backgroundColor = "red"
    }
    if (e.target === yellow) {
        body.style.backgroundColor = "yellow"
    }
    if (e.target === green) {
        body.style.backgroundColor = "rgb(102, 255, 0)"
    }
    if (e.target === blue) {
        body.style.backgroundColor = e.target.id
    }
    if (e.target === white) {
        body.style.backgroundColor = e.target.id
    }
   })
})
