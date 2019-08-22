// Select color input
// Select size input
// Build a table from input
function makeGrid() {
	$('tr').remove();
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWidth').val();
// Build rows
	for (tr = 1; tr <= gridHeight; tr++) {
		$('#pixelCanvas').append('<tr></tr>');
	}
// Build columns	
	for (td = 1; td <= gridWidth; td++) {
		$('tr').append('<td></td>');
	}
// Add Color
	$('td').click(function addColor() {
		color = $('#colorPicker').val();
		if ($(this).attr('style')) {
			$(this).removeAttr('style')
		} else{
			$(this).attr('style', 'background-color:' + color);
		}
	})
}
// Submit size, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	let tr = $('#pixelCanvas').find('tr');
	makeGrid();
});