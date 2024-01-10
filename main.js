$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace(Cock, "")); 
  }
});
