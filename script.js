const Modal = {

    modal_overlay: document
                        .querySelector('.modal-overlay')
                        .classList,

    open(){
        this.modal_overlay.add('active')
    },
    close(){
        this.modal_overlay.remove('active')
    }
}