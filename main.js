    const valid_themes = [
        "dark",
        "light",
    ];

    function isValidTheme(theme)
    {
        return valid_themes.indexOf(theme) !== -1;
    }

    function getCurrentPreferences()
    {
        var default_theme   = "dark";
        var default_lang    = "pt-BR";

        var default_preferences = {
            theme: default_theme,
            lang: default_lang,
        };

        var preferences     = localStorage.preferences ? JSON.parse(localStorage.preferences) : default_preferences;
        return preferences;
    }

    function getCurrentTheme()
    {
        var preferences     = getCurrentPreferences();
        var default_theme   = "dark";

        var theme = preferences.theme && isValidTheme(preferences.theme) ? preferences.theme : default_theme;

        var show_current_theme = document.querySelector('.current-theme')

        if(show_current_theme)
        {
            show_current_theme.innerText = theme;
        }

        document.body.classList.remove(theme === 'dark' ? 'light' : 'dark');
        document.body.classList.add(theme === 'dark' ? 'dark' : 'light');
    }

    function setTheme(theme)
    {
        var preferences     = getCurrentPreferences();
        preferences.theme   = theme;

        localStorage.preferences = JSON.stringify(preferences);
        getCurrentTheme();
    }

    document.querySelectorAll('button[data-theme]').forEach(el => {
        el.addEventListener('click', event => {
            setTheme(event.target.dataset.theme);
        })
    })

    document.addEventListener('DOMContentLoaded', function() {
        getCurrentTheme();
    });
