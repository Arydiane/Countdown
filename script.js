function openModal() {
    const modal = document.getElementById('modal-window');
    modal.classList.add('active');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'close' || e.target.id == 'modal-window' ){
            modal.classList.remove('active');
        } 
    })
}