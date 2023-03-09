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
    var angles = 0;

    setInterval(() => {
        link.style.filter = `hue-rotate(${angles}deg)`;
        angles += 40;
        if (angles > 360) angles = 0;
    }, 500);

}

sliderAnimation();
discolorationText();
