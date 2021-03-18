const lineThru = document.querySelectorAll("#ol");

for (const value of lineThru){
    value.addEventListener('click', function (event){
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.textDecoration = "line-through";
    });
} 

const opac = document.querySelectorAll("#ul");

for (const ul of opac){
    ul.addEventListener("click", function (event){
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.opacity = "0";
    });
} 

const dinos = document.querySelectorAll("#row");

for (const img of dinos){
    img.addEventListener("click", function (event) {
        console.log(event);
        const elementThatWasClicked = event.target;
        elementThatWasClicked.style.opacity = "0"
    })
}

