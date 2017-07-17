//functions

function fillTip(tipNumber) {
  var tipsContainer = document.getElementById('tips-container');

  tipsContainer.innerHTML = '';

  var tipImageContainer = document.createElement("div");
  var tipImage = document.createElement("img");
  var tipTitle = document.createElement("h1");
  var tipTags = document.createElement("p");
  var tipContent = document.createElement("p");
  var tipImageHeart = document.getElementById('js--img-tip-heart');

  var titleText =  document.createTextNode(titles[tipNumber]);
  var tagsText =  document.createTextNode(tags[tipNumber]);
  var contentText =  document.createTextNode(contents[tipNumber]);

  tipImage.setAttribute('src', imgUrls[tipNumber]);
  tipImageContainer.setAttribute('class', 'tip-image-container');
  tipTags.setAttribute('class', 'hashtag');
  tipContent.setAttribute('class', 'tip-text');
  tipImageHeart.setAttribute('data-tip', tipNumber);
  tipImageHeart.setAttribute('onclick', '(favoriteButtonHandler('+tipNumber+'))');
  if (favorites[tipNumber] == true) {
    tipImageHeart.setAttribute('src', 'images/white-full.png');
  }
  else {
    tipImageHeart.setAttribute('src', 'images/white-empty.png');
  }

  tipTitle.appendChild(titleText);
  tipTags.appendChild(tagsText);
  tipContent.appendChild(contentText);

  tipImageContainer.appendChild(tipImage);
  tipsContainer.appendChild(tipImageContainer);
  tipsContainer.appendChild(tipTitle);
  tipsContainer.appendChild(tipTags);
  tipsContainer.appendChild(tipContent);
}

function tipsHandler(dataTip) {
  wrapperMain.classList.remove('visible');
  wrapperMain.classList.add('hidden');
  wrapperTips.classList.remove('hidden');
  wrapperTips.classList.add('visible');

  fillTip(dataTip);
}

function favoriteButtonHandler(dataTip){
  var tipHeart = document.querySelectorAll('[data-tip="'+dataTip+'"]');

  if (favorites[dataTip] == true){
    favorites[dataTip] = false;
    for(var i = 0; i < tipHeart.length; i++){
      if (tipHeart[i].classList.contains("img-tip-heart")){
        tipHeart[i].setAttribute('src', 'images/white-empty.png');
      }
      else{
        tipHeart[i].setAttribute('src', 'images/red-empty.png');
      }
    }
  }
  else{
    favorites[dataTip] = true;
    for(var i = 0; i < tipHeart.length; i++){
      if (tipHeart[i].classList.contains("img-tip-heart")){
        tipHeart[i].setAttribute('src', 'images/white-full.png');
      }
      else{
        tipHeart[i].setAttribute('src', 'images/red-full.png');
      }
    }
  }
}

function showFavorites (favoriteList){
  favoriteList.innerHTML = '';
  for (var i = 0, len = titles.length; i < len; i++) {
    if (favorites[i] == true){
      var listElement = document.createElement("li");
      var elementTitle = document.createElement("h2");
      var elementContent = document.createElement("p");
      var elementTags = document.createElement("p");
      var imageContainer = document.createElement("span");
      var heart = document.createElement("img");

      var titleText = document.createTextNode(titles[i]);
      var contentText = document.createTextNode(contents[i]);
      var tagsText = document.createTextNode(tags[i]);

      listElement.setAttribute('class', 'dica-item');
      elementTitle.setAttribute('onclick', 'tipsHandler('+i+')');
      elementContent.setAttribute('class', 'description');
      elementContent.setAttribute('onclick', 'tipsHandler('+i+')');
      elementTags.setAttribute('class', 'hashtag');
      imageContainer.setAttribute('class', 'coracao');
      heart.setAttribute('data-tip', i);
      if (favorites[i] == true) {
        heart.setAttribute('src', 'images/red-full.png');
      }
      else {
        heart.setAttribute('src', 'images/red-empty.png');
      }
      heart.setAttribute('onclick', '(favoriteButtonHandler('+i+'))');

      elementTitle.appendChild(titleText);
      elementContent.appendChild(contentText);
      elementTags.appendChild(tagsText);
      imageContainer.appendChild(heart);

      listElement.appendChild(elementTitle)
      listElement.appendChild(elementContent)
      listElement.appendChild(elementTags)
      listElement.appendChild(imageContainer);

      favoriteList.appendChild(listElement);
    }
  }
}


window.onload = function() {
  tagsLink = document.getElementById('js--link-tags');
  loveLink = document.getElementById('js--link-love');
  profileLink = document.getElementById('js--link-profile');

  wrapperMain = document.getElementById('main-wrapper');
  wrapperTips = document.getElementById('tips-wrapper');
  wrapperProfile = document.getElementById('profile-wrapper');
  wrapperLove = document.getElementById('love-wrapper');
  wrapperTags = document.getElementById('tags-wrapper');

  arrowProfile = document.getElementById('arrow-profile');
  arrowTips = document.getElementById('arrow-tips');
  arrowTags = document.getElementById('arrow-tags');
  arrowLove = document.getElementById('arrow-love');

  tagsLink.onclick = function () {
    wrapperMain.classList.remove('visible');
    wrapperMain.classList.add('hidden');
    wrapperTags.classList.remove('hidden');
    wrapperTags.classList.add('visible');
  };
  loveLink.onclick = function () {
    wrapperMain.classList.remove('visible');
    wrapperMain.classList.add('hidden');
    wrapperLove.classList.remove('hidden');
    wrapperLove.classList.add('visible');
    favoriteList = document.getElementById('js--favorite-list');
    showFavorites(favoriteList);
  };
  profileLink.onclick = function () {
    wrapperMain.classList.remove('visible');
    wrapperMain.classList.add('hidden');
    wrapperProfile.classList.remove('hidden');
    wrapperProfile.classList.add('visible');
  };

  arrowProfile.onclick = function () {
    wrapperProfile.classList.remove('visible');
    wrapperProfile.classList.add('hidden');
    wrapperMain.classList.remove('hidden');
    wrapperMain.classList.add('visible');
  };
  arrowTips.onclick = function () {
    document.getElementById('tips-container').innerHTML = '';
    wrapperTips.classList.remove('visible');
    wrapperTips.classList.add('hidden');
    wrapperMain.classList.remove('hidden');
    wrapperMain.classList.add('visible');
  };
  arrowLove.onclick = function () {
    wrapperLove.classList.remove('visible');
    wrapperLove.classList.add('hidden');
    wrapperMain.classList.remove('hidden');
    wrapperMain.classList.add('visible');
  };
  arrowTags.onclick = function () {
    wrapperTags.classList.remove('visible');
    wrapperTags.classList.add('hidden');
    wrapperMain.classList.remove('hidden');
    wrapperMain.classList.add('visible');
  };

  // Script to fill the main-wrapper with tips

  tipsList = document.getElementById('js--main-list');
  for (var i = 0, len = titles.length; i < len; i++) {

    var listElement = document.createElement("li");
    var elementTitle = document.createElement("h2");
    var elementContent = document.createElement("p");
    var elementTags = document.createElement("p");
    var imageContainer = document.createElement("span");
    var heart = document.createElement("img");

    var titleText = document.createTextNode(titles[i]);
    var contentText = document.createTextNode(contents[i]);
    var tagsText = document.createTextNode(tags[i]);

    listElement.setAttribute('class', 'dica-item');
    elementTitle.setAttribute('onclick', 'tipsHandler('+i+')');
    elementContent.setAttribute('class', 'description');
    elementContent.setAttribute('onclick', 'tipsHandler('+i+')');
    elementTags.setAttribute('class', 'hashtag');
    imageContainer.setAttribute('class', 'coracao');
    heart.setAttribute('data-tip', i);
    if (favorites[i] == true) {
      heart.setAttribute('src', 'images/red-full.png');
    }
    else {
      heart.setAttribute('src', 'images/red-empty.png');
    }
    heart.setAttribute('onclick', '(favoriteButtonHandler('+i+'))');

    elementTitle.appendChild(titleText);
    elementContent.appendChild(contentText);
    elementTags.appendChild(tagsText);
    imageContainer.appendChild(heart);

    listElement.appendChild(elementTitle)
    listElement.appendChild(elementContent)
    listElement.appendChild(elementTags)
    listElement.appendChild(imageContainer);

    tipsList.appendChild(listElement);
  }

  // Script to make the links for the tips
  // imgUrls = [];
  //tipsList = document.querySelectorAll('.')
};
