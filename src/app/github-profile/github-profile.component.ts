import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('snapshot property :' + id);

    this.route.paramMap
    .subscribe(params => {
      console.log(params);
      console.log('Observable propery : ' + params.get('id'));
    });

  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams : {page: 1, order: 'newest'}
    });
  }

}
