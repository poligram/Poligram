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
    <div class="col"><h6 data-toggle="tooltip" title="Me">Created by:</h6></div>
    <div class="col"><h6 data-toggle="tooltip" title="Things/People that helped me create this">Acknowledgements:</h6></div>
    <div class="col"><h6 data-toggle="tooltip" title="Other links">Other Links:</h6></div>
</div>

<div class="row font-weight-bold text-center" id="footer-titles">
    <div class="col"><a href="https://github.com/poligram"><h6 data-toggle="tooltip" title="My github">Poligram</h6></a></div>
    <div class="col"><a href="https://www.w3schools.com"><h6 data-toggle="tooltip" title="Helping with some of the bootstrap/jQuery code">w3schools</h6></a></div>
    <div class="col"><a href="https://www.rateyourpets.com/login.php"><h6 data-toggle="tooltip" title="Website to rate pets">Rate Your Pets</h6></a></div>
</div>

<div class="row font-weight-bold text-center" id="footer-titles">
    <div class="col"><a href=""><h6></h6></a></div>
    <div class="col"><a href=""><h6></h6></a></div>
    <div class="col"><a href="https://benjibow.github.io/clooney/"><h6 data-toggle="tooltip" title="So stupid">ClooneyHub</h6></a></div>
</div>
</div>`

$(document).ready(function() {
    $("#TopBarNav").html(header);
    $("#FooterInPage").html(footer);
    $('[data-toggle="tooltip"]').tooltip();
});