//Add common content

const header = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<a class="navbar-brand" href="">Poligram</a>

<ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" id="TopBar-Nav-Home" href="">Home</a>
    </li>
</ul>
</nav>`

const footer = `<div class="container-fluid bg-dark text-light">
<div class="row font-weight-bolder text-center" id="footer-titles">
    <div class="col text-left"><h6>Created by:</h6></div>
    <div class="col"><h6>Acknowledgements:</h6></div>
    <div class="col"><h6>Other Links:</h6></div>
</div>

<div class="row font-weight-bold text-center" id="footer-titles">
    <div class="col text-left"><a href="https://github.com/poligram"><h6>Poligram</h6></a></div>
    <div class="col"><a href="https://www.w3schools.com"><h6>w3schools</h6></a></div>
    <div class="col"><a href=""><h6></h6></a></div>
</div>
</div>`

$(document).ready(function() {
    $("#TopBarNav").html(header);
    $("#FooterInPage").html(footer);
});