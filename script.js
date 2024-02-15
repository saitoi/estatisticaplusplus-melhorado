function loadContent(url) {
    const [fileName, anchor] = url.split('#');
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("content").innerHTML = this.responseText;
        if (anchor) {
            const element = document.getElementById(anchor);
            if (element) element.scrollIntoView();
        }
    }
    xhttp.open("GET", fileName, true);
    xhttp.send();
}

function updateActiveLink(activeFileName) {
    const links = document.querySelectorAll('#sidebar a');
    links.forEach(link => {
        if (link.getAttribute('onclick').includes(activeFileName)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
