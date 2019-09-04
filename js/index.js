// Your code goes here
document.querySelectorAll('.nav-link').forEach(elem => {
    elem.addEventListener('mouseenter', event => {
        elem.style.transform = 'scale(1.2)';
        event.preventDefault();
    });

    elem.addEventListener('mouseleave', event => {
        elem.style.transform = 'scale(1.0)';
    });
});


document.querySelectorAll('.btn').forEach(elem => {
    elem.addEventListener("click", function () {
        alert("Thanks for signing up!");
    });
});

document.querySelectorAll('.destination').forEach(elem => {
    elem.addEventListener("click", function (e) {
        e.stopPropagation();
        alert("Stop the propagation");
    })
})

window.addEventListener("resize", function () {
    alert('You resized the window!');
});

window.addEventListener('load', event => {
    alert('The page was loaded');
})

window.addEventListener('keyup', function () {
    alert('You unpressed a key.');
})

window.addEventListener('keydown', function () {
    alert('You pressed a key.');
})

window.addEventListener('click', event => {
    let x = event.clientX;
    let y = event.clientY;
    alert(`You clicked at position X:${x} Y:${y}`);
});

document.getElementsByTagName('p').forEach(elem => {
    elem.addEventListener('focus', event => {
        elem.style.backgroundColor = 'blue';
    })
})

window.addEventListener('close', event => {
    alert('The page is closing');
});