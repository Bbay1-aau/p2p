function openPopup(title, image) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-image").src = image;
    document.getElementById("popup-content").innerText = "This is some information about " + title;
    document.getElementById("popup").style.display = "block";
    
    // Change URL in search bar without reloading page
    history.pushState(null, '', '?item=' + title);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    history.pushState(null, '', window.location.pathname);
}
