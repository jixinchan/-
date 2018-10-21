import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  article;
  articleId;
  paras;
  flags;
  ngOnInit() {
    this.articleId = this.router.snapshot.params['articleId'];
    this.http.get('/api/article/'+this.articleId).subscribe(data=>{
      this.article = data;
    });
    this.http.get('/api/articlep').subscribe(data=>{
      this.paras = data;
    });
  }
  

}
