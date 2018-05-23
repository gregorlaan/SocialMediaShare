var app = new Vue({
    el: '#app',
    data: {
        websiteUrl: 'www.yourWebsite.com',
        baseUrl: [
            { name: 'facebook', url: 'https://www.facebook.com/sharer.php?u=https://' },
            { name: 'google', url: 'https://plus.google.com/share?url=https://' },
            { name: 'twitter', url: 'https://twitter.com/share?url=https://' },
            { name: 'linkedin', url: 'https://www.linkedin.com/shareArticle?mini=true&url=https://' }
        ]
    },
    methods: {
        displayButton: function (baseUrl) {
            var button = '<a href="' + baseUrl + this.websiteUrl + '"></a>';
            return button;
        }
    }
});
