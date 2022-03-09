const submitBtn = document.querySelector("button");
const firstName = document.querySelector("#name")
const lastName = document.querySelector("#last-name")
const locationName = document.querySelector("#location")
const phoneNumber = document.querySelector("#phone-number")
const EmailAddress = document.querySelector("#email") 
const iamge = document.querySelector("#img")

submitBtn.addEventListener("click", function(){

    fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((json) =>  {
            console.log(json)

            const { large, medium, thumbnail } = json.results[0].picture
            iamge.src = large;

            const { first, last } = json.results[0].name
            firstName.innerHTML = first
            lastName.innerHTML = last

            const { name } = json.results[0].location.street
            locationName.innerHTML = name;

            const { phone } = json.results[0]
            phoneNumber.innerHTML = phone;

            const { email } = json.results[0]
            EmailAddress.innerHTML = email;


        }) 
        
        .catch((e) => console.log(e));        
});

