let usersArray = [
    
];


async function veriGetir() {

 const gelenData = await 
    fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

        if (gelenData.ok) {

                  const gelenJson = await gelenData.json();

                     console.log(gelenJson);

        console.log(usersArray);
        // Gelen kullanıcıları dizimize aktarıyoruz
        usersArray = gelenJson;
        console.log("gelen veri : " +usersArray);
        kullanicilariEkranaYaz();
        }

}

function kullanicilariEkranaYaz() {
         var kullanicilar = document.getElementById("kullanicilar");
        usersArray.forEach((item) => {
            const li = document.createElement("li");
              li.textContent = item.username +" - " + item.email;
              kullanicilar.appendChild(li);
        })

}

veriGetir();