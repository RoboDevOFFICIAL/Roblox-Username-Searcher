function searchPlayer() {
    var username = document.getElementById('searchInput').value.trim();
    if (username !== '') {
        var profileUrl = `https://www.roblox.com/users/profile?username=${username}`;
        window.location.href = profileUrl;
    }
}


function goToCreatorProfile() {
    window.location.href = 'https://www.roblox.com/users/2949268536/profile';
}


document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        searchPlayer();
    }
});