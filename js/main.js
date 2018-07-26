var $imageGallery = $('.image-gallery a');
var $searchPhoto = $('#search-photo');
var $img = $('img');

//call simpleLightbox plugin
$($imageGallery).simpleLightbox();

//clear search box on page load // FIXME: doesn't work yet
// $($searchPhoto).attr('value', '');

//keyup event listener on search box
$($searchPhoto).on('keyup', function (e) {
  const searchValue = e.target.value.toLowerCase();
  console.log(searchValue);

  Array.from($img).forEach(function(img) {
    const alt = img.getAttribute('alt');

    if (alt.toLowerCase().indexOf(searchValue) != -1) {
      img.style.display = 'inline';
    } else {
      img.style.display = 'none';
    }

  })

});
