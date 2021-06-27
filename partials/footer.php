<!-- Footer Starts Here -->
<footer>
    <div class="container" id="contactus">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12 footer-item footer-left">
                <img src="./assets/images/logo.svg" alt="Two Mads Media" class="footer-logo">
                </p>
                <ul class="social-icons footer-social-links">
                    <li class="social-links facebook">
                        <a href="https://www.facebook.com/Twomads_media">
                            <i class="fa fa-facebook"></i>
                            <span class="sr-only">TwoMada Media Facebook</span>
                        </a>
                    </li>
                    <li class="social-links instagram">
                        <a href="https://www.instagram.com/twomads_media/">
                            <i class="fa fa-instagram"></i>
                            <span class="sr-only">TwoMada MediaInstagram</span>
                        </a>
                    </li>
                    <li class="social-links linkedin">
                        <a href="https://www.linkedin.com/twomads_media/">
                            <i class="fa fa-linkedin"></i>
                            <span class="sr-only">TwoMada Media Linkedin</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-5 offset-md-1 col-sm-6 col-xs-12 footer-item footer-right">
                <h4>Contact us at</h4>
                <ul class="menu-list footer-contact-us">
                    <li><a href="mailto:connect@twomadsmedia.com"><i class="fa fa-envelope-o"
                                aria-label="connect@twomadsmedia.com"></i>connect@twomadsmedia.com</a></li>
                    <li><a href="tel:9637374782" aria-label="9 6 3 7 3 7 4 7 8 2"><i
                                class="fa fa-mobile"></i>9637374782</a></li>
                    <li><a href="tel:9699906857" aria-label="9 6 9 9 9 0 6 8 5 7"><i
                                class="fa fa-mobile"></i>9699906857</a></li>
                </ul>
            </div>
            <!-- <div class="col-md-3 footer-item">
                <h4>Additional Pages</h4>
                <ul class="menu-list">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">How We Work</a></li>
                    <li><a href="#">Quick Support</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div> -->
            <!-- <div class="col-md-3 footer-item last-item">
                <h4>Contact Us</h4>
                <div class="contact-form">
                    <form id="contact footer-contact" action="" method="post">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <fieldset>
                                    <input name="name" type="text" class="form-control" id="name"
                                        placeholder="Full Name" required="">
                                </fieldset>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <fieldset>
                                    <input name="email" type="text" class="form-control" id="email"
                                        pattern="[^ @]*@[^ @]*" placeholder="E-Mail Address" required="">
                                </fieldset>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <textarea name="message" rows="6" class="form-control" id="message"
                                        placeholder="Your Message" required=""></textarea>
                                </fieldset>
                            </div>
                            <div class="col-lg-12">
                                <fieldset>
                                    <button type="submit" id="form-submit" class="filled-button">Send Message</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div> -->
        </div>
    </div>
</footer>

<div class="sub-footer">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p>Copyright &copy; <script>
                    document.write(new Date().getFullYear())
                    </script> Two Mads Media</p>
            </div>
        </div>
    </div>
</div>
</div>
<!-- #content end -->

<!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="assets/js/owl.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Additional Scripts -->
<script src="assets/js/accordions.js"></script>
<script src="assets/js/jquery.singlePageNav.min.js"></script>
<script src="assets/js/custom.js"></script>
<!-- <script src="assets/js/slick.js"></script> -->
<script>
$(function() {
    // Single Page Nav
    $('#navbarResponsive').singlePageNav({
        'offset': 100,
        'filter': ':not(.external)'
    });

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

</body>

</html>