var $imageGallery = $('.image-gallery a');
var $searchPhoto = $('#search-photo');
var $img = $('img');

//call simpleLightbox plugin
$($imageGallery).simpleLightbox();

//call animsition plugin
$('.animsition').animsition();

// FIXME: clear search box on page load
$($searchPhoto).attr('value', "");



//search filter feature

//keyup event listener on search box
$($searchPhoto).on('keyup', function (e) {
  const searchValue = e.target.value.toLowerCase();

  //convert img elements to an array-- loop through them-- store alt text
  Array.from($img).forEach(function(img) {
    const altText = img.getAttribute('alt');

    //compare alt text to search term-- hide elements not found
    if (altText.toLowerCase().indexOf(searchValue) != -1) {
      img.style.display = 'inline';

    } else {
      img.style.display = 'none';
    }
  });

});
