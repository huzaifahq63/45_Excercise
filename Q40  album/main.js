// Define the make_album fuction
function make_allbum(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three function and creating 3 variables with different values
var album1 = make_allbum("Huzaifa", "Album title");
var album2 = make_allbum("Izhan", "Album title 2");
// Calling a make_album function with third parameter
var album3 = make_allbum("Fahad", "Album title 3", 10);
// Print the variables
console.log(album1);
console.log(album2);
console.log(album3);
