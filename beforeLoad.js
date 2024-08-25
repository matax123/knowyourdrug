let dayTimeSaved = localStorage.getItem('dayTime');
if (dayTimeSaved != null && dayTimeSaved == 'night') {
    document.documentElement.setAttribute('theme', 'dark');
}