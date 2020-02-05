/*
1. Take the reference code from the HTML cards code 
above to render the cards dynamically on page.
2. Remove the cards code from HTML code.
*/
function createVideoCard(cardObj) {
    var videoCard = document.createElement("div");
    videoCard.className = "playlist-card";
  
    var image = document.createElement("img");
    image.className = "thumbnail";
    image.src = cardObj.thumbnail;
    videoCard.appendChild(image);
  
    var title = document.createElement("h3")
    title.className = "video-card-title"
    title.innerHTML = cardObj.title;
    videoCard.appendChild(title);
    
    // console.log(videoCard);
    return videoCard;
  }
  var inputBox = document.getElementById('search-box');
  var btn = document.getElementById('search-btn');

   btn.onclick = function(){
    var cardGrid = document.getElementById('video-card-grid');
    cardGrid.innerHTML = '';
    var value = '';
    if(inputBox.value.length >= 3){
        value = inputBox.value;
    }
    else{
        window.alert('Please type more than three letters')
    }

  
var apiEndpoint ='https://5d76bf96515d1a0014085cf9.mockapi.io/playlist?search=' + value;
var videoGrid = document.getElementById('video-card-grid')
var Http = new XMLHttpRequest();
Http.open("GET",apiEndpoint , true);
Http.onreadystatechange = function(){
    if(this.readyState === 4){
        var videoListData = JSON.parse(this.responseText);
        for (var i = 0; i < videoListData.length; i++) { 
            videoGrid.appendChild(createVideoCard(videoListData[i]));
            }
        }
}

   Http.send();
}