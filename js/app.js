document.addEventListener("DOMContentLoaded", function() {

    const bars = document.querySelectorAll('.progress_bar');


    bars.forEach(function(bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })

    //slider

    $('.slider').slick({
        arrows: false,
        autoplay: true
    });

    //print

    document.querySelector("#print").addEventListener("click", function() {
        window.print();
    });



});
