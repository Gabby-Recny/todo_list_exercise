//Add click styling to selected radio button
//Only one should be submitted
//On submit, hide survey and show thank you message
// Inside thank you message, show rating

//Query selectors
const ratings = document.querySelectorAll('.rating');
const radioButtons = document.querySelectorAll('input[name=radio-rating]');
const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const thankYouMsg = document.querySelector('.thank-you-msg');

const handleSubmission = (event) => {
    event.preventDefault()
    form.classList.add('hidden');
    thankYouMsg.classList.remove('hidden');
}






// Event listeners
submitBtn.addEventListener('click', (e) => {
    handleSubmission(e)
})