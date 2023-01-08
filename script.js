////////////////////////////////////////////////////////get products
fetch('http://localhost:3000/api/products')
    .then(response => response.json())
    .then(data => {
        let list = '<ul>';
        data.forEach(item => {
            list +=
                `<li>${item.name},<br>
                    ${item.id},<br>
                    ${item.price},<br>
                    ${item.size},<br>
                    ${item.year}<br><br>
                </li>`;
        });
        list += '</ul>';

        // Annropar listan
        document.getElementById('products-from-api').innerHTML = list;
    });
////////////////////////////////////////////////////////get id



var formid = document.getElementById("formid");


formid.addEventListener('submit', event => {
    event.preventDefault();
    // if (formid) {
    //     formid.addEventListener('submit', event => {
    //         event.preventDefault();
    //     })

    const searchid = formid.querySelector("input").value;

    fetch('http://localhost:3000/api/products/${id}', {
        method: 'get'
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => {
            const item = data.find(item => item.id == searchid);
            const contanier = document.querySelector('#formid');
            contanier.innerHTML = product;
        })

});












////////////////////////////////////////////////////////post
//const form = document.querySelector('form');
var formpost = document.getElementById("formpost");


formpost.addEventListener('submit', (e) => {
    e.preventDefault();
    //att inte html uppdaterr sig


    const formData = new FormData(formpost);
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
        // .then(res => res.json())
        // .then(data => console.log(data))
    })
        .catch(err => console.log(err))


});
////////////////////////////////////////////////////////put
// Hämta formuläret
var formput = document.getElementById('update-form');
let url = "http://localhost:3000/api/products/update-form"

// Lyssna på submit-eventet
formput.addEventListener('submit', (e) => {
    e.preventDefault();

    // Skapa ett objekt med de nya värdena

    var payload = {
        id: form.elements.id.value,
        name: form.elements.newname.value,
        price: form.elements.newprice.value,
        size: form.elements.newsize.value,
        year: form.elements.newyear.value
    };

    let option = {
        //method: "PATCH",
        method: "PUT",
        body: JSON.stringify(payload)
    }


    // Skicka en PATCH-begäran med fetch()
    fetch(url, option)
        //  {
        //     method: "PATCH",
        //     body: JSON.stringify(payload),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        .then(response => console.log(response.status))



    // .then(response => {
    //     if (response.ok) {
    //         // Uppdateringen lyckades
    //         console.log('Produkten uppdaterades');
    //     } else {
    //         // Uppdateringen misslyckades
    //         console.error('Misslyckades att uppdatera produkten');
    //     }
    // })
    // .catch(error => {
    //     // Ett fel uppstod
    //     console.error('Ett fel uppstod:', error);
    // });
});

////////////////////////////////////////////////////////delete
// const deleteproduct = async (id) => {
//     const response = await fetch(`http://localhost:3000/api/products/${id}`, {
//         method: 'DELETE'
//     });
//     const data = await response.json();
//     return data;
// }
// //const id = { id.value };
// deleteproduct(id).then(data => {
//     console.log(data);
// });
