function inputRequired() {
    var allInput = document.querySelectorAll('.ui-input');
    allInput.forEach(function(element) {
        var input = element.querySelector('input');
        if(input.required) {
            input.parentNode.classList.add('required');
        }
        if (input.disabled) {
            input.parentNode.classList.add('disabled');
        }
    })
}

function outputUpdate() {
    var slider = document.getElementById('slider1');
    var output = document.getElementById('output');
    output.innerHTML = slider.value;
    document.addEventListener('change', function() {
        output.innerHTML = slider.value;
    })
}

document.addEventListener('DOMContentLoaded', function () {
    inputRequired();
    outputUpdate();
});