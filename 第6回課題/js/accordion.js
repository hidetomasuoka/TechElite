$(document).ready(function() {
    $('.accordion_button').on('click', function() {
        console.log("Accordion button clicked");
        // Only toggle the hidden elements within the time_schedule_container
        $(this).closest('.time_schedule_container').find('.hidden').toggleClass('show');
        // Toggle a class on the container to control margin
        $('.time_schedule_container').toggleClass('accordion-open');
    });
});
