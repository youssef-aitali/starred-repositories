export class Repository {
	name: string;
	description: string;
	stars: number;
	issues: number;
	username: string;
  avatar: string;
  time_interval: number;

  constructor(name:string, description:string, stars:number, issues:number, username:string, avatar:string, time_interval:number){
    this.name = name;
    this.description = description;
    this.stars = stars;
    this.issues = issues;
    this.username = username;
    this.avatar = avatar;
    this.time_interval = time_interval;
  }
}
