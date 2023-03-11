const submit = document.querySelector(".submit")
const valores = document.querySelectorAll(".btn")
const container = document.querySelector(".container")
const thankYou = document.querySelector(".thank-you")
const rating = document.querySelector("span")

valores.forEach(function(element) {
    element.addEventListener('click', function () {
        const itemAtivoAtual = document.querySelector(".select")
        if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("select")
        }
        element.classList.add("select")
    })
});

valores.forEach(function(element) {
    element.addEventListener('click', function() {
        const itemAtivoAtual = document.querySelector(".select")
        rating.innerHTML = itemAtivoAtual.innerHTML
    })
})

submit.addEventListener('click', function() {
    container.classList.add('hidden')
    thankYou.classList.remove('hidden')
})
