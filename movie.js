// A)
class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

    getdetais(){
        console.log(`Title: ${this.title}
        Studio: ${this.studio}
        Rating: ${this.rating}`);
    }
}
    let result=new Movie("Remo","Arthi","pg");
    result.getdetais();

// B)
class Movie{
        constructor(title,studio,rating){
            this.title=title;
            this.studio=studio;
            this.rating=rating||"pg";
        }
    
        getdetais(){
            console.log(`Title: ${this.title}
Studio: ${this.studio}
Rating: ${this.rating}`);
        }
    }
        let theresult=new Movie("Remo","Arthi",);
        theresult.getdetais();

//C)
 class AllMovies{
    constructor(MoviesList){
        this.moviesList=MoviesList;
    }
    getPG(){
        var result=this.moviesList.filter((x)=>{
            x.rating==="PG"
        });
        console.log(result);
    }
}
var list=new AllMovies(MovieList);         
list.getPG();

//D)
class Movie{
    constructor(Title,Studio,Rating){
        this.title=Title;
        this.studio=Studio;
        this.rating=Rating || "PG";
    }
    getdetais(){
           console.log(`Title: ${this.title}
Studio: ${this.studio}
Rating: ${this.rating}`);

 }
 }
var film1=new Movie("Casino Royale","Eon Productions","PG­13");
film1.getdetais();



    

    
    

    
