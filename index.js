var td = new tempusDominus.TempusDominus(
  document.getElementById('datetimepicker3'),
  {
    display: {
      viewMode: 'calendar',
      sideBySide: true,
      components: {
        decades: false,
        year: false,
        month: false,
        date: true,
        hours: true,
        minutes: true,
        seconds: false
        
      },
    },
  }
);

document.getElementById('locale').innerHTML = window.navigator.language;
