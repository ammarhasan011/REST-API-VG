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
    //defaultPrevented funkar ej
    const searchid = document.querySelector("input").value;
    console.log(searchid);



    fetch(`http://localhost:3000/api/products/${searchid}`)
        .then(res => res.json())
        .then(data => {

            // console.log(data);
            const contanier = document.querySelector('#formid');
            contanier.innerHTML = data.name + "<br>" + data.id + "<br>" + data.price + "<br>" + data.size + "<br>" + data.year;
        })
        .catch(err => console.log(err))

});

////////////////////////////////////////////////////////post a product
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

const formput = document.querySelector('#formput');
const buttonput = document.querySelector('#buttonput');


buttonput.addEventListener('click', (event) => {
    event.preventDefault();


    const id = formput.querySelector('#id').value;
    const newname = formput.querySelector('#newname').value;
    const newprice = formput.querySelector('#newprice').value;
    const newsize = formput.querySelector('#newsize').value;
    const newyear = formput.querySelector('#newyear').value;


    fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            name: newname,
            price: newprice,
            size: newsize,
            year: newyear,

        }),
        headers: {
            'Content-Type': 'application/json',
        },

    })
        .then((response) => {
            //kolla om respons är okej 
            if (response.ok) {
                console.log('Product updated');
            } else {
                console.error('Product didnt updating');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

////////////////////////////////////////////////////////delete
var formdelete = document.getElementById("formdelete");

formdelete.addEventListener('submit', event => {
    event.preventDefault();

    const deleteid = formdelete.querySelector('#input').value;
    console.log(deleteid);


    fetch(`http://localhost:3000/api/products/${deleteid}`)//, {
        //   method: 'DELETE'
        // })
        .then(res => res.json())
        .then(data => {
            const deletecContanier = document.querySelector('#formdelete');
            deletecContanier.innerHTML = "This product is deleted <br><br>" + data.name + "<br>" + data.id + "</br>" + data.price + "<br>" + data.size + "<br>" + data.year;
        })
});