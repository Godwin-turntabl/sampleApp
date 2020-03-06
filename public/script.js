new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
}).init();


const body = document.querySelector('body');
body.onload = function() {
    setName()

}

function setName() {
    if (!localStorage.getItem('name') || localStorage.getItem('name') == null) {
        let name = prompt("Please enter your name")
        if (!name || name == null) {
            setName()
        } else {
            localStorage.setItem('name', name);
            document.querySelector('#header').textContent = `Welcome, ${localStorage.getItem('name')}`
            console.log(localStorage.getItem('name'))
        }
    } else {
        document.querySelector("#header").textContent = `Welcome, ${localStorage.getItem('name')}`
    }

}

let name = document.querySelector('#name').value;
document.querySelector("#submit").onclick = function(event) {
    event.preventDefault();
    console.log(event)

    event.toElement.form.name.disabled = true;
    console.log(event)
    alert(`GOd is good to  `)

}