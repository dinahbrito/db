const icon = document.getElementById("icon");

icon.onclick = function ()
{
    document.body.classList.toggle("darktheme");
    if (document.body.classList.contains("darktheme")) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}