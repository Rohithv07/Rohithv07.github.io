const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // effect for button click on active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-btn');
            currentButton[0].className = currentButton[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        });
    }
    // active class sections
    allSections.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        if (id) {
            // removing the selected from the other button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            // we need to hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

PageTransitions();