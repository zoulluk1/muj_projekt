import ArticleEntityManager from '../model/ArticleEntityManager';
export default class ArticleController{
    constructor() {
        this.manager=new ArticleEntityManager();

    }
    getOne (id){

            const article=this.manager.findById(id);
            return article;
    }
    getAll(){
        const articles=this.manager.findAll();
        return articles;
    }
    patch (id,title,text,date,image){
        const article=this.manager.update(id,text,title,date,image);
        return article;
    }
    post (title,text,date,image){
        const article=this.manager.create(title,text,date,image);
        return article;
    }
    delete(id){
        this.manager.remove(id);
    }

}