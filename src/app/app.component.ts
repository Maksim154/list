	
	import { Component } from '@angular/core';
	import { Injectable } from '@angular/core';
	import { HttpClient } from '@angular/common/http';


	export interface Followers{
		login:string
		avatar_url:string
		html_url:string
	}


	@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css']
	})


	@Injectable({providedIn: 'root'})


	export class AppComponent {
		
		constructor(public http : HttpClient){}
		
		title = 'My Followers';
		
		listFollowers:Followers[] = [];
		list = [];
		
		ngOnInit(){
			this.setFollowers();
		}
		
		setFollowers(){
			console.log('it work');
			this.http.get<Followers[]>('https://api.github.com/users/mosh-hamedani/followers').subscribe((res)=>{
				console.log(res);
				this.listFollowers = res;
			});
		}
	}
