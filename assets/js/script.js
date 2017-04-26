$(document).ready(function() {
	$('.menu').hover(function() {
        $(this).addClass("selected");
      },
      function(){
        $(this).removeClass("selected");
      }
   );

	$('.assembled-disassembled').click(function(){
    	var orig_data = $('.assembled-disassembled img').attr('src')
    	var new_data = $('.assembled-disassembled img').attr('other-src')
        $('.assembled-disassembled img').attr('src', new_data);
        $('.assembled-disassembled img').attr('other-src', orig_data);
    }
   );

  $("#about").click(function() {
        $('#modal-container').show('slow');
  })

  $("#modal-overlay").click(function() {
        $('#modal-container').hide('fast');
    });
}); 