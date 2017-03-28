import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    posts: any = [] ;
  	url: string = "http://www.suacasaseucoracao.com.br/wp-json/wp/v2/posts/?_embed";
    urlPostsApp:string = "http://www.suacasaseucoracao.com.br/wp-json/wp/v2/posts?_embed&categories=9"  ;


  constructor(public navCtrl: NavController , public http:Http ) {

    this.http.get( this.urlPostsApp ).map( res=> res.json() ).subscribe(  dados=>{       
            
           console.log( dados) ;
            console.log('<hr>') ;
            
            for( let i=0;  i<dados.length ; i++ ){

                     console.log( dados[i].title.rendered + '<br>' )

                    this.posts.push(
                                      { 
                                        thumb:  dados[i]._embedded['wp:featuredmedia'][0].source_url,
                                        titulo: dados[i].title.rendered ,
                                        resumo:dados[i].excerpt.rendered
                                      } 
                                      
                                   ) 
                              
            }//end for 

   }  )

   console.log(  "<hr> CATEGOIRAS"  ) ;
   this.categorias() ;

  }//end constructor 


      categorias(){
              var url = "http://www.suacasaseucoracao.com.br/wp-json/wp/v2/posts?_embed&categories=9" ;
              this.http.get( url ).map( res=> res.json()  ).subscribe( cat=>{ 
                       console.log( cat  ) ;
               }  )
      }

}//end class
