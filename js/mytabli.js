$(function () {
	draw_empty_board();
});

function draw_empty_board(p) {
	
	//						For White
	//		Outer Board			|		Opponent Home
	//	13	14	15	16	17	18	|	19	20	21	22	23	24
	//	12	11	10	9	8	7	|	6	5	4	3	2	1
	//		Outer Board			|		Players Home
	//
	//						For Black
	//		Outer Board			|		Opponent Home
	//	1	2	3	4	5	6	|	7	8	9	10	11	12
	//	24	23	22	21	20	19	|	18	17	16	15	14	13
	//		Outer Board			|		Players Home
	
	if(p!='B') {p='W';}
	var draw_init = {
		'W': {sn1:13,sn2:12},
		'B': {sn1:1,sn2:24}
	};
	var s=draw_init[p];

	var stack_no=s.sn1;
	var t='<table id="table">';
	//	Outer Board	||	Opponent Home
	t += '<tr>';
	for(var i=1;i<=12;i++) {
		t += '<td class="stack" id="stack_'+stack_no+'"> '+ stack_no +'</td>';
		stack_no++;
	}
	t+='</tr>';
	
	//	Outer Board	||	Players Home
	stack_no=s.sn2;
	t += '<tr>';
	for(i=1;i<=12;i++) {
		t += '<td class="stack" id="stack_'+stack_no+'"> '+ stack_no +'</td>';
		stack_no--;
	}
	t+='</tr>';
	
	t+='</table>';
	
	$('#board').html(t);
}