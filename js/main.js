var $imageGallery = $('.image-gallery a');
var $searchPhoto = $('#search-photo');
var searchString = '';
var $img = $('img');

//call simpleLightbox plugin
$($imageGallery).simpleLightbox();

//clear search box on page load // FIXME: doesn't work yet
$($searchPhoto).attr('value', '');

//keyup event listener on search box
$($searchPhoto).on('keyup', function () {
  searchString = this.value;
  console.log(searchString);

  for (i=0; i<$img.length; i+=1) {

  }
});
