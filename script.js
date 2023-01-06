const form = document.querySelector('tvform');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    //att inte html uppdaterr sig
});

const formData = new FormData(form);


for (item of formData) {
    console.log(item[0], item[1]);
}

fetch('http://localhost:3000/api/products', {
    method: "POST",
    body: formData,
})
    .then(res => res.json())
    .then(data => console.log(data))
    .then(res => console.log(res));
