const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];
const cardElem = document.getElementById('card-team');
const getCard = () =>{
  for(let i = 0; i < teamMembers.length; i++){
    const thisTeamMember = teamMembers[i];
    let cardMarkup = renderCard(thisTeamMember.name, thisTeamMember.role, thisTeamMember.email, thisTeamMember.img);
    console.log(cardMarkup);
    
    cardElem.insertAdjacentHTML('beforeend', cardMarkup);
  }
}
getCard();


function renderCard (nome, ruolo, email, img){
  return `

            <div class="col-sm-12 col-md-4 col-lg-4 mb-3 mb-sm-0">
            <div class="card m-2 border-0">
              <div class="row g-0 align-items-center rounded-0" id = "bg-color-custom">
                <div class="col-md-4">
                  <img src="${img}" class="img-fluid rounded-start" alt="foto team">
                </div>
                <div class="col-md-8">
                  <div class="card-body align-self-center" id="bg-color-custom">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text">${ruolo}</p>
                    <p class="card-text">${email}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>


`
}

// /* <div class="card mb-3">
//   <div class="row g-0">
//   <div class="col-md-4">
//     <img src="${img}" class="img-fluid rounded-start" alt="...">
//   </div>
//   <div class="col-md-8">
//     <div class="card-body">
//       <h5 class="card-title">${nome}</h5>
//       <p class="card-text">${ruolo}</p>
//       <p class="card-text">${email}</p>
//     </div>
//   </div>
// </div>
// </div> */
