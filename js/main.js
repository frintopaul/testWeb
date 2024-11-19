function toggleClasses() {
    $(".testi_bx_outer").each(function() {
        if ($(this).hasClass("odd")) {
            $(this).removeClass("odd").addClass("even");
        } else if ($(this).hasClass("even")) {
            $(this).removeClass("even").addClass("odd");
        }
    });
}
// toggleClasses();
// setInterval(toggleClasses, 5000);