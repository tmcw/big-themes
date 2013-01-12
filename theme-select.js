(function() {

    var themes = ['original', 'skew', 'wallstreet'];


    var themeselect = document.getElementById('theme-select'),
        ss = document.head.getElementsByTagName('link')[0],
        a = themeselect.appendChild(document.createElement('a')),
        select = themeselect.appendChild(document.createElement('select'));

    for (var i = 0; i < themes.length; i++) {
        var opt = select.appendChild(document.createElement('option'));
        opt.innerHTML = themes[i];
    }

    function change(val) {
        var theme = val;
        a.innerHTML = a.href = ss.href = theme + '/big.css';
    }

    select.onchange = function() {
        change(select.value);
    };

    change('original');

})();
