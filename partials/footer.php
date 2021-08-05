<?php require_once('./partials/footer-partial.php') ?>
<!-- #content end -->

<!-- Bootstrap core JavaScript -->
<script src="./assets/js/jquery.min.js"></script>
<script src="./assets/js/owl.js"></script>
<script src="./assets/js/bootstrap.bundle.min.js"></script>

<!-- Additional Scripts -->
<script src="./assets/js/accordions.js"></script>
<!-- <script src="./assets/js/jquery.singlePageNav.min.js"></script> -->
<script src="./assets/js/custom.js"></script>
<!-- <script src="assets/js/slick.js"></script> -->
<script>
$(function() {
    // Single Page Nav
    // $('#navbarResponsive').singlePageNav({
    //     'offset': 100,
    //     'filter': ':not(.external)'
    // });

    // On mobile, close the menu after nav-link click
    $('#navbarResponsive .navbar-nav .nav-item .nav-link').click(function() {
        $('#navbarResponsive').removeClass('show');
    });
});
</script>

<script language="text/Javascript">
cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
function clearField(t) { //declaring the array outside of the
    if (!cleared[t.id]) { // function makes it static and global
        cleared[t.id] = 1; // you could use true and false, but that's more typing
        t.value = ''; // with more chance of typos
        t.style.color = '#fff';
    }
}
</script>
<script>
$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 150
            }, 1000);
            return false;
        }
    });
});
</script>
</body>

</html>