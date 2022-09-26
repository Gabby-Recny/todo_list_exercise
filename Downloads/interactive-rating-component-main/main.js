//Add click styling to selected radio button
//Only one should be submitted
// Inside thank you message, show rating

//Query selectors
const ratings = document.querySelectorAll('.rating');
const radioButtons = document.querySelectorAll('input[name=radio-rating]');
const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const thankYouMsg = document.querySelector('.thank-you-msg');
const selectedRating = document.getElementById('selectedRating');

const handleSelection = (event) => {
    event.target.classList.add('selected')
    selectedRating.innerText = event.target.value

}

const handleSubmission = (event) => {
    event.preventDefault();
    form.classList.add('hidden');
    thankYouMsg.classList.remove('hidden');
}


// Event listeners
window.addEventListener('load', (e) => {
    radioButtons.forEach(input => {
        input.addEventListener('click', (e) => {
            e.target.classList.remove('selected')
            handleSelection(e)
        })
    })
})

submitBtn.addEventListener('click', (e) => {
    handleSubmission(e)
})