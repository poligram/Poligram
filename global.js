const header = `<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<a class="navbar-brand" href="">Poligram</a>

<ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" id="TopBar-Nav-Home" href="">Home</a>
    </li>
</ul>
</nav>`

$(document).ready(function() {
    $("#TopBarNav").html(header);
});