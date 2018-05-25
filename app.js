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
            fontFamily: 'Helvetica'
        },
        customButtonStyle: ''
    },
    methods: {
        displayButton: function (baseUrl, baseName) {
            var button = '<a href="' + baseUrl + this.websiteUrl + '">' + baseName +'</a>';
            return button;
        },
        applyStyle: function () {
            this.ButtonStyle = JSON.parse(this.customButtonStyle);
        },
        onLoad: function () {
            this.customButtonStyle = JSON.stringify(this.ButtonStyle);
        }
    },
    mounted: function () {
        this.onLoad();
    }
});
