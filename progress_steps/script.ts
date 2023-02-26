document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const elementsContainer = container?.querySelector('.elements__container');
    const buttonsContainer = container?.querySelector('.buttons__container');
    const elements = elementsContainer?.querySelectorAll('.element');
    const previousButton = buttonsContainer?.querySelector('.previous__button');
    const nextButton = buttonsContainer?.querySelector('.next__button');
    const buttons = buttonsContainer?.querySelectorAll('.button');
    let currentPosition = 0;
    previousButton?.classList.add('disabled');
    previousButton?.setAttribute('disabled', 'true');
    buttons?.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('next__button')) {
                if (currentPosition < 3) {
                    currentPosition += 1;
                }
                if (currentPosition > 0) {
                    previousButton?.classList.remove('disabled');
                    previousButton?.removeAttribute('disabled');
                }
                if (currentPosition > 2) { 
                    nextButton?.classList.add('disabled');
                    nextButton?.setAttribute('disabled', 'true');
                }
            } else if (button.classList.contains('previous__button')) {
                if (currentPosition !== 0) {
                    currentPosition -= 1;
                } 
                if (currentPosition < 1) {
                    previousButton?.classList.add('disabled');
                    previousButton?.setAttribute('disabled', 'true');
                }
                if (currentPosition < 3) {
                    nextButton?.classList.remove('disabled');
                    nextButton?.removeAttribute('disabled');
                }
            }
        });
    });
});