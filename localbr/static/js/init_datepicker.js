jQuery(document).ready(function(){
    // Configura Calendário para datas
   jQuery.datepicker.setDefaults({yearRange:'-100:+10', showOn: 'button', buttonImage: STATIC_URL+'img/popup_calendar.gif', buttonImageOnly: true});

   jQuery("input.dateselector").datepicker();
   jQuery("input.dateselector").attr('width', '20px');
});
