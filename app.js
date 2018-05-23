var app = new Vue({
    el: '#app',
    data: {
        websiteUrl: 'www.yourWebsite.com',
        facebookBaseUrl: 'https://www.facebook.com/sharer.php?u=https://',
        googleBaseUrl: 'https://plus.google.com/share?url=https://',
        twitterBaseUrl: 'https://twitter.com/share?url=https://',
        linkedinBaseUrl: 'https://www.linkedin.com/shareArticle?mini=true&url=https://'
    },
    methods: {
        displayButton: function (baseUrl) {
            var button = '<a href="' + baseUrl + this.websiteUrl + '"></a>';
            return button;
        }
    }
});
