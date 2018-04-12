phonon.options({
    navigator: {
        defaultPage: 'home',
        animatePages: false,
        enableBrowserBackButton: true
    },

    i18n: null
});

var app = phonon.navigator();

app.on({ page: 'home', content: 'home.html' });

app.on({ page: 'pageone', content: 'pageone.html' }, function (activity) {
    activity.onReady(function () {

    });
});

document.addEventListener('deviceready', function () {
    app.start()
});

