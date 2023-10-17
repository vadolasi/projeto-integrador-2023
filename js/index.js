AOS.init()

window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").classList.add("navbar-scrolled")
    } else {
        document.getElementById("navbar").classList.remove("navbar-scrolled")
    }
}
