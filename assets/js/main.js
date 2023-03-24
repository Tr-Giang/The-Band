function sliderAnimation() {
    const slider1 = document.getElementById('slider-box-1');
    slider1.style.animation = 'slider 9s linear infinite forwards';

    const slider2 = document.getElementById('slider-box-2');

    setTimeout(() => {
        slider2.style.animation = 'slider 9s linear infinite forwards';
    }, 3000);

    const slider3 = document.getElementById('slider-box-3');

    setTimeout(() => {
        slider3.style.animation = 'slider 9s linear infinite forwards';
    }, 6000);
}

function discolorationText() {
    const authorNode = document.querySelector('.author');
    var angles = 0;

    setInterval(() => {
        authorNode.style.filter = `hue-rotate(${angles}deg)`;
        angles += 40;
        if (angles > 360) angles = 0;
    }, 500);

}

function handleBtn() {
    const btnElements = document.querySelectorAll('[data-menu]');
    const fatherElements = document.querySelectorAll('[data-father]');
    const linkItems = document.querySelectorAll('.nav-item>a');
    btnElements.forEach((btnElement, index) => {
        let menuID = btnElement.dataset.menu;
        const menu = document.querySelector(`[data-father="${menuID}"]`);

        btnElement.onclick = () => {
            if (!menu.classList.contains('active')) {
                menu.classList.add('active');
            }
            else {
                if (menu.querySelector('.active')) {
                    menu.classList.remove('active');
                    menu.querySelector('.active').classList.remove('active');
                } else {
                    menu.classList.remove('active');

                }
            }
        };
    });
    linkItems.forEach((linkItem) => {
        linkItem.onclick = () => {
            fatherElements.forEach((item) => {
                item.classList.remove('active');
            });
        };
    });

}

sliderAnimation();
discolorationText();
handleBtn();
