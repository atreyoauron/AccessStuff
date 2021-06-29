// se o documento estiver carregado, busque a função
$(function () {

$('#l1').click(function() {
	$('#i1').show();
	$('#i2').hide();
	$('#i3').hide();
	$('#i4').hide();
});
$('#l2').click(function() {
	$('#i1').hide();
	$('#i2').show();
	$('#i3').hide();
	$('#i4').hide();

});

$('#l3').click(function() {
	$('#i1').hide();
	$('#i2').hide();
	$('#i3').show();
	$('#i4').hide();

});

$('#l4').click(function() {
	$('#i1').hide();
	$('#i2').hide();
	$('#i3').hide();
	$('#i4').show();

});

var imageId = 1;

$('#next').click(function(){
	imageId++;
console.log(imageId - 1);
	if(imageId >= 5){
		imageId = 1;
	}

	for(var i = 0; i < 5; i++){

		if( i == imageId){

			$('#i' + i).show();

		} 
		else
		{
			$('#i' + i).hide();

		}
	}
		


});

});

