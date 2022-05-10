var express = require('express');
var router = express.Router();
var debug = require('debug')('router:articles');
import ArticleController from "../controller/ArticleController";
const controller = new ArticleController();

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
    const articles = controller.getAll();
    res.send(articles);

});
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    console.debug(req.params);
    try{
        const article = controller.getOne(id);
        res.send(article);
    }catch (e){

    }

});
router.post("/", (req, res) => {
    const body = req.body;
    console.log(body);
    const article = {

        title: body.title,
        text: body.text,
        date: new Date().toISOString(),
        image: body.image
    }
    const stm = db.prepare('INSERT INTO article (image,title,date,text) values (?,?,?,?)');
    stm.run(article.image,article.title,article.date,article.text)
    console.table(article)
    res.send(article);
});
router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    if (id) {
        const article = db.prepare('SELECT * FROM article where id = ?').get(id);
        if (article) {
            Object.assign(article, body);
            const stm = db.prepare("UPDATE article SET image=?,title=?,date=?,text=? where id=?");
            stm.run(article.image, article.title,article.date,article.text,parseInt(id));


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
    if (id) {
        db.prepare("DELETE FROM article WHERE id=?").run(id)


        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})
module.exports = router;