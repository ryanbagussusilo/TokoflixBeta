$(document).ready(function () {
//Initialize tooltips
$('.nav-tabs > li a[title]').tooltip();

//Wizard
$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

    var $target = $(e.target);

    if ($target.parent().hasClass('disabled')) {
        return false;
    }
});

$(".next-step").click(function (e) {

    var $active = $('.wizard .nav-tabs li.active');
    $active.next().removeClass('disabled');
    nextTab($active);

});
$(".prev-step").click(function (e) {

    var $active = $('.wizard .nav-tabs li.active');
    prevTab($active);

});
});

function nextTab(elem) {
$(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
$(elem).prev().find('a[data-toggle="tab"]').click();
}

// bind the on-change event for the input element (triggered when a file
// is chosen)
// $(document).ready(function() {
//   $("#upload-file-input").on("change", uploadFile);
// });

/**
 * Upload the file sending it via Ajax at the Spring Boot server.
 */

// function uploadFile() {
//   var formdata = new FormData($("#upload-file-form")[0]);
//   formdata.append("test", $('[name="test"]').val() );
//   $.ajax({
//     url: "http://localhost:8080/cv/uploadFile",
//     type: "POST",
//     data: formdata,"TEST",
//     enctype: 'multipart/form-data',
//     processData: false,
//     contentType: false,
//     cache: false,
//     success: function () {
//       // Handle upload success
//       $("#upload-file-message").text("File succesfully uploaded");
//     },
//     error: function () {
//       // Handle upload error
//       $("#upload-file-message").text(
//           "File not uploaded (perhaps it's too much big)");
//     }
//   });
// } // function uploadFile
