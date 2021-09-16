// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01");
var captionText = document.getElementById("caption");
// $('.myImg').click(function(){
//     modal.style.display = "block";
//     var newSrc = this.src;
//     modalImg.attr('src', newSrc);
//     captionText.innerHTML = $(this).siblings('.retina')[0].innerText;
// });

$('.showModal').click(function(){
    modal.style.display = "block";
    var newSrc = $(this).siblings('.myImg')[0].src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.innerText;
});

// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");

// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
