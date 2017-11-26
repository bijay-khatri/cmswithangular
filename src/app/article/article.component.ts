import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ppn-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  imagePath = 'assets/img.jpg';
  constructor(private router : Router) { }

  ngOnInit() {
  }

  readMore(contentId: string){
    this.router.navigate(['/news', contentId]);
  }

}
