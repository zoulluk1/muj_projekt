var express = require('express');
var router = express.Router();
var debug = require('debug')('router:articles');
let articles = [
    {
        id: 1,
        image: 'https://picsum.photos/seed/picsum/500',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
    },
    {
        id: 2,
        image: 'https://picsum.photos/seed/picsum/500',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
    },
    {
        id: 3,
        image: 'https://picsum.photos/seed/picsum/500',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.
Integer tempor. Pellentesque ipsum. Integer malesuada. Vestibulum fermentum tortor id mi. Aenean placerat.
Pellentesque arcu. Phasellus rhoncus.
`
    },
];
router.get("/", function (req, res, next) {
    res.send(articles);
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    console.debug(req.params);
    if (id-1 in articles) {
        const article = articles.find((a) => a.id === Number.parseInt(id));
        res.send(article);
    } else {

        res.sendStatus(404);
    }
});
router.post("/", (req, res) => {
    const body = req.body;
    const article = {
        id: articles.length + 1, title: body.title, text: body.text, date: new Date()
    }
    articles.push(article);
    console.table(articles);
    res.send(article);
});
router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    if (id) {
        const article = articles.find((a) => a.id === Number.parseInt(id));
        if (article) {
            Object.assign(article, body);
            console.table(articles);
        } else {
            res.sendStatus(404)
        }
        res.send(article);
    } else {
        res.sendStatus(404);
    }
});
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (id-1 in articles) {
        articles = articles.filter((a) => a.id !== Number.parseInt(id));
        debug(articles);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})
module.exports = router;