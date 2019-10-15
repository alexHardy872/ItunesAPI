
window.onload = function () {

    //let button = this.document.getElementById("searchButton").addEventListener('click', startSearch);


    let searchText = document.getElementById("searchText");
    searchText.onkeyup = startSearch;

}

//https://itunes.apple.com/search?parameterkeyvalue


function startSearch() {     // search for term

    let container = document.getElementById("displayResults");
    container.innerHTML = "";
    let searchText = document.getElementById("searchText").value;

    // take out spaces
    // lower,case
    // replace with +

    let text = searchText.toLowerCase();
    let textArr = text.split(" ");
    let input = textArr.join("+");
    let url = "https://itunes.apple.com/search?term=" + input + "&media=music";





    var jqxhr = $.get(url, function () {
        //alert("success");
    })
        .done(function (data) {
            const songs = JSON.parse(data).results
            songs.map(x => player =

                //console.log(x)

                GetInfoPackage(x)

            )

        }
        )

}








// EXTACT TRACK IMAGE FUNTION

function GetArtwork(track) {


    var src = track.artworkUrl60;
    var img = document.createElement('img');
    img.classList.add("coverArt");
    img.src = src;

    return img;

}


function GetArtist(track) {



    var name = track.artistName;
    var span = document.createElement('span');
    span.classList.add("artist");
    span.innerHTML = name + " - ";

    return span;

}


function GetSong(track) {



    var name = track.trackName;
    var span = document.createElement('span');
    span.classList.add("song");
    span.innerHTML = name + " ";

    return span;
}


function GetPreview(track) {


    var src = track.previewUrl;
    var embed = document.createElement('audio');
    embed.src = src;
    embed.controls = "controls";
    embed.classList.add("player");

    return embed;

}


function GetPrice(track) {

    var name = track.trackPrice;
    return name;
}
function GetBuy(track) {


    var price = GetPrice(track);
    var href = track.trackViewUrl;
    var link = document.createElement('a');
    link.classList.add("buy");
    link.href = href;
    link.innerHTML = "Buy for $" + price;
    //var div = document.createElement("div");
    //div.classList.add("buy");
    // div.innerHTML = link.innerHTML;

    return link;
}
function GetYear(track) {



    var name = track.releaseDate;
    let year = GetYearFromString(name);
    var span = document.createElement('span');
    span.classList.add("year");
    span.innerHTML = "(" + year + ")";
    return span;
}

function GetGenre(track) {



    var name = track.primaryGenreName;
    var span = document.createElement('span');
    span.classList.add("genre");
    span.innerHTML = name + " ";

    return span;
}

function GetYearFromString(string) {
    let year = string[0] + string[1] + string[2] + string[3];
    return year;
}






function GetInfoPackage(track) {
    let container = document.getElementById("displayResults");
    let box = document.createElement('div');
    box.classList.add("box");
    let content = document.createElement('div');
    content.classList.add("content");
    let title = document.createElement('div');
    title.classList.add("title");

    let art = GetArtwork(track);
    let artist = GetArtist(track);
    let song = GetSong(track);
    let preview = GetPreview(track);
    let year = GetYear(track);
    let storeLink = GetBuy(track);
    let genre = GetGenre(track);




    container.appendChild(box);

    box.append(art, content);
    content.append(title, preview, storeLink);
    title.append(artist, song);


}



// track view url??



 // AJAX METHODE

    // $.ajax({
    //     methode: 'GET',
    //     url: "https://jsonplaceholder.typicode.com/posts",
    //     dataTyoe: 'json'
    // }).done(function (data) {
    //     console.log(data);
    //     $.map(data, function (post, i) {
    //         $('#result').append('<h3>' + post.title + "</h3><p>" + post.body + "</p>")
    //     });
    // });

