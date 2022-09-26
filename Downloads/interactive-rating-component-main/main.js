const ratings = document.querySelectorAll('.rating');
const radioButtons = document.querySelectorAll('input[name=radio-rating]');
const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const thankYouMsg = document.querySelector('.thank-you-msg');
const selectedRating = document.getElementById('selectedRating');

const handleSubmission = (event) => {
    event.preventDefault();
    form.classList.add('hidden');
    thankYouMsg.classList.remove('hidden');
}

const removeStyling = () => {
    ratings.forEach(rating => {
        rating.classList.remove('selected')
    })
}

const handleSelection = () => {
    radioButtons.forEach(btn => {
        btn.addEventListener('click', ()=> {
            radioButtons.forEach(btn => btn.classList.remove('selected'))
            btn.classList.add('selected')
            selectedRating.innerText = btn.value
        })
    })
}

window.addEventListener('load', (e) => { handleSelection(e) })
submitBtn.addEventListener('click', handleSubmission)