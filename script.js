const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    //att inte html uppdaterr sig


    const formData = new FormData(form);

    const res = Object.fromEntries(formData)

    const payload = JSON.stringify(res)

    console.log(payload)

    //visar i konsolen
    for (item of formData) {
        console.log(item[0], item[1]);
    };



    fetch('http://localhost:3000/api/products', {
        method: "POST",
        body: payload,
        headers: {
            'Content-Type': "application/json"
        }
    })


}); 
