document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var elementsContainer = container === null || container === void 0 ? void 0 : container.querySelector('.elements__container');
    var buttonsContainer = container === null || container === void 0 ? void 0 : container.querySelector('.buttons__container');
    var elements = elementsContainer === null || elementsContainer === void 0 ? void 0 : elementsContainer.querySelectorAll('.element');
    var previousButton = buttonsContainer === null || buttonsContainer === void 0 ? void 0 : buttonsContainer.querySelector('.previous__button');
    var nextButton = buttonsContainer === null || buttonsContainer === void 0 ? void 0 : buttonsContainer.querySelector('.next__button');
    var buttons = buttonsContainer === null || buttonsContainer === void 0 ? void 0 : buttonsContainer.querySelectorAll('.button');
    var progress = elementsContainer === null || elementsContainer === void 0 ? void 0 : elementsContainer.querySelector('.progress');
    var currentPosition = 0;
    var progressPosition = 0;
    previousButton === null || previousButton === void 0 ? void 0 : previousButton.classList.add('disabled');
    previousButton === null || previousButton === void 0 ? void 0 : previousButton.setAttribute('disabled', 'true');
    buttons === null || buttons === void 0 ? void 0 : buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('next__button')) {
                if (currentPosition < 3) {
                    currentPosition += 1;
                    var element = elements === null || elements === void 0 ? void 0 : elements.item(currentPosition);
                    if (element !== undefined) {
                        element.style.borderColor = 'blue';
                        progressPosition += 33;
                        progress.style.width = "".concat(progressPosition, "%");
                    }
                }
                if (currentPosition > 0) {
                    previousButton === null || previousButton === void 0 ? void 0 : previousButton.classList.remove('disabled');
                    previousButton === null || previousButton === void 0 ? void 0 : previousButton.removeAttribute('disabled');
                }
                if (currentPosition > 2) {
                    nextButton === null || nextButton === void 0 ? void 0 : nextButton.classList.add('disabled');
                    nextButton === null || nextButton === void 0 ? void 0 : nextButton.setAttribute('disabled', 'true');
                }
            }
            else if (button.classList.contains('previous__button')) {
                if (currentPosition !== 0) {
                    currentPosition -= 1;
                    var element = elements === null || elements === void 0 ? void 0 : elements.item(currentPosition + 1);
                    if (element !== undefined) {
                        element.style.borderColor = 'lightgrey';
                        progressPosition -= 33;
                        progress.style.width = "".concat(progressPosition, "%");
                    }
                }
                if (currentPosition < 1) {
                    previousButton === null || previousButton === void 0 ? void 0 : previousButton.classList.add('disabled');
                    previousButton === null || previousButton === void 0 ? void 0 : previousButton.setAttribute('disabled', 'true');
                }
                if (currentPosition < 3) {
                    nextButton === null || nextButton === void 0 ? void 0 : nextButton.classList.remove('disabled');
                    nextButton === null || nextButton === void 0 ? void 0 : nextButton.removeAttribute('disabled');
                }
            }
        });
    });
});
