export default class Article{
    id=null;
    image='';
    title='';
    date= new Date();
    text='';

    constructor(id,title,text,date= new Date(),image=null) {
        this.id=id;
        this.title=title;
        this.text=text;
        this.date=date;
        this.image=image;
    }

}