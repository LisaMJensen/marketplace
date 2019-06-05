$(function(){
  $("#formOne").submit(function(event){
    var personName = $("input#nameInput").val();
    var address = $("input#inputAddress").val();
    var selectedItem = $("#items option:selected").val();
    // alert(selectedItem);
    $(".nameInput").text(personName+", your address: "+address+ " your item: "+ selectedItem);

    $(".receipt").show();

    event.preventDefault();
  })
});
