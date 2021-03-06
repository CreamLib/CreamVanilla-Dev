function inputRequired() {
    var allInput = document.querySelectorAll('.ui-input');
    allInput.forEach(function (element) {
        var input = element.querySelector('input');
        if (input.required) {
            input.parentNode.classList.add('required');
        }
        if (input.disabled) {
            input.parentNode.classList.add('disabled');
        }
    })
}

function controlSlider() {
    var allSlider = document.querySelectorAll('.ui-slider');
    allSlider.forEach(function (element) {
        outputUpdate(element);

        if (element.classList.contains("bubble")) {
            setPositionBubble(element);
            document.addEventListener('input', function() {setPositionBubble(element)});
            window.addEventListener('resize', function() {setPositionBubble(element);});
        }
    })
}

function outputUpdate(element) {
    var slider = element.querySelector("input[type='range']");
    var output = element.querySelector(".output");
    
    output.innerHTML = slider.value;
    document.addEventListener('input', function () {
        output.innerHTML = slider.value;
    })
}

function accordion() {
    var allAccordion = document.querySelectorAll('.ui-accordion');
    allAccordion.forEach(function (element) {
        element.querySelectorAll('.ui-accordion-group').forEach(function (e) {
            var button = e.querySelector('.panel-heading');
            var panel = e.querySelector('.panel-collapse');
            button.addEventListener('click', function() {
                if(button.getAttribute('aria-expanded') === 'false') {
                    button.setAttribute('aria-expanded', 'true');
                    panel.setAttribute('aria-hidden', 'false');
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    panel.style.transition = "all 1s";
                } else {
                    button.setAttribute('aria-expanded', 'false');
                    panel.setAttribute('aria-hidden', 'true');
                    panel.style.maxHeight = null;
                }
            });
        })
    })
}

function setPositionBubble(element) {
    var slider = element.querySelector("input[type='range']");
    var output = element.querySelector(".output");
    var min = slider.getAttribute('min');
    var max = slider.getAttribute('max');
    var offset = 0;
    var newPoint = 0;
    var width = slider.getBoundingClientRect().width;
    var point = (slider.value - min) / (max - min);

    if (point < 0.5) {
        offset = point * 2 * -12 + 12;
    } else if (point > 0.5) {
        offset = (point - 0.5) * 2 * -12;
    }
    newPoint = width * point;
    output.style.left = newPoint + offset + 'px';
}

document.addEventListener('DOMContentLoaded', function () {
    controlSlider();
    inputRequired();
    accordion();
});