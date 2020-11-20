// getting the modal container
const modalContainer = document.querySelector('#modal-container');

// exporting the show modal function
export default function(size) {
    showModal(size);
};

// creating the modal according to size
function showModal(size) {
    // show class
    modalContainer.classList.add('show');
    
    // modal html
    modalContainer.innerHTML = `
    <div class="modal ${size}">
        <div class="modal-header">
            <h3>Modal title</h3>
        </div>
        <hr>
        <div class="modal-text">
            <p>...</p>
        </div>
        
        <hr>
        
        <div class="modal-buttons">
            <button class="actionButton">Close</button>
            <button class="actionButton">Save</button>
    </div>`;
    
    // calling close functions
    closeOnButtonClick();
    closeOnEsc();
}

// closing modal with buttons
function closeOnButtonClick() {
    const actionButtons = document.querySelectorAll('.actionButton');
    actionButtons.forEach(actionButton => {
        actionButton.addEventListener('click', closeModal)
    });
    
}

// closing modal with keyboard escape
function closeOnEsc() {
    document.body.addEventListener('keydown', (e) => {
        console.log(e)
        if (e.key == "Escape") {
            closeModal();
        } 
    });
}

// taking away the class show 
// and emptying the modal container
export function closeModal() {
    modalContainer.classList.remove('show');
    modalContainer.innerHTML = '';
}