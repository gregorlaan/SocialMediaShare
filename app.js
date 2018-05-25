var app = new Vue({
    el: '#app',
    data: {
        websiteUrl: 'www.yourWebsite.com',
        baseUrl: [
            { name: 'Facebook', url: 'https://www.facebook.com/sharer.php?u=https://' },
            { name: 'Google+', url: 'https://plus.google.com/share?url=https://' },
            { name: 'Twitter', url: 'https://twitter.com/share?url=https://' },
            { name: 'Linkedin', url: 'https://www.linkedin.com/shareArticle?mini=true&url=https://' }
        ],
        ButtonStyle: {
            color: 'blue',
            border: '2px solid #007afc',
            padding: '5px 10px',
            textDecoration: 'none',
            margin: '5px',
            fontFamily: 'Helvetica',
            display: 'inline-block'
        },
        customButtonStyle: '',
        className: 'social-button',
        selectedTab: 'links',
        menuLinks: [
            { name: 'Links', url: 'links' },
            { name: 'Buttons', url: 'buttons' },
            { name: 'Style', url: 'style' },
            { name: 'Live Preview', url: 'live-preview' }
        ],
        newTab: false
    },
    methods: {
        displayButton: function (baseUrl, baseName) {
            var button = '<a target="' + (this.newTab ? '_blank' : '_self') + '" class="' + this.className + '" href="' + baseUrl + this.websiteUrl + '">' + baseName + '</a>';
            return button;
        },
        applyStyle: function () {
            this.ButtonStyle = JSON.parse(this.removeClass(this.customButtonStyle));
        },
        onLoad: function () {
            this.customButtonStyle = this.addClass() + JSON.stringify(this.ButtonStyle, null, 2); // spacing level 2
        },
        addClass: function () {
            return '.' + this.className + ' ';
        },
        removeClass: function (string) {
            var withoutClass = string.replace(this.addClass(), '');
            return withoutClass;
        }
    },
    mounted: function () {
        this.onLoad();
    }
});
