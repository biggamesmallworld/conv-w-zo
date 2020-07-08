const settings = {
  "name": "conv-w-zo",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Conversation With Zo",
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Recent Posts",
              "/"
            ],
            [
              "About Me",
              "/about-me/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.willnahmens.com/conv-w-zo/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
