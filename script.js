document.getElementById("myForm").addEventListener("submit", addCards)
document.getElementById("wish_container").addEventListener("submit", addCards)


// function handleFormSubmit(event) {

//     event.preventDefault();

//     // const dest = document.getElementById("dest").value;
//     // const dest = document.getElementById("dest").value;
//     // const dest = document.getElementById("dest").value;
//     // const dest = document.getElementById("dest").value;
//     const form = event.target;
//     const dest = form.dest.value;
//     const location = form.location.value;
//     const photo = form.photo.value;
//     const desc = form.desc.value;
//     resetValues();
//     console.log(dest, location, photo, desc);
// }

function addCards(event) {
    event.preventDefault();

    const card = event.target;
    const cardDest = card.dest.value;
    const cardLoca = card.location.value;
    const cardPic = card.photo.value;
    const cardDesc = card.desc.value; 

    const createCard = card.createElement("div");
    card.classList.add("card");
    card.className = "card";
    card.setAttribute("class", "card");

    // createCard.innerHTML = 
    // `<p>${cardDest}</p>
    // <p>${cardLoca}</p>
    // <img src=${cardPic}</>
    // <p>${cardDesc}</p>`;
{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}


    document.getElementById("wish_container").appendChild(createCard);
    resetValues();
    console.log(dest, location, photo, desc);
}

function resetValues() {
    document.getElementById("dest").value="";
    document.getElementById("location").value="";
    document.getElementById("photo").value="";
    document.getElementById("desc").value="";
}

function handleDelete(e) {
    const elt = e.target;
    
    if(elt.getAttribute('id') === 'delete_btn'){
        elt.parentElement.parentElement.remove();
    }
}