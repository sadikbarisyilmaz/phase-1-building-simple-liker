// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
const hearts = document.querySelectorAll(".like-glyph")
const modalMessage = document.querySelector("#modal-message")

hearts.forEach(hearth => {
  hearth.innerHTML = EMPTY_HEART
  hearth.addEventListener("click", () => mimicServerCall()
  .then(() => {
    if(hearth.innerHTML == EMPTY_HEART){
      hearth.innerHTML = FULL_HEART
      hearth.setAttribute("class", "like-glyph activated-heart")
    }else{
      hearth.innerHTML = EMPTY_HEART
      hearth.setAttribute("class", "like-glyph")
    }
  })
  .catch(err => {
    modalMessage.innerHTML = err
    modal.setAttribute("class", "")
    setTimeout(() => modal.setAttribute("class", "hidden"), 3000)
    console.log(err)
  }))
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
