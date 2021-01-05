$(function () {
	draw_empty_board();
});

function draw_empty_board() {
	
	var stack_no=13;
	var t='<table id="table">';
	//	Outer Board	||	Opponent Home
	t += '<tr>';
	for(var j=1;j<=12;j++) {
		t += '<td class="stack" id="stack_'+stack_no+'"> '+ stack_no +'</td>';
		stack_no++;
	}
	t+='</tr>';
	
	//	Outer Board	||	Players Home
	stack_no=12;
	t += '<tr>';
	for(j=1;j<=12;j++) {
		t += '<td class="stack" id="stack_'+stack_no+'"> '+ stack_no +'</td>';
		stack_no--;
	}
	t+='</tr>';
	
	t+='</table>';
	
	$('#board').html(t);
}
