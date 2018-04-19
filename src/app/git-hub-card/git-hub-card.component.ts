import { Component, OnInit, OnDestroy } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})
export class GitHubComponent implements OnInit, OnDestroy {

    gitHubdata: GitHubModel;

    constructor() {
        this.gitHubdata = new GitHubModel();
        this.gitHubdata.avatar_url='http://www.iconarchive.com/download/i27085/ph03nyx/super-mario/Retro-Mushroom-Super-3.ico';
        this.gitHubdata.followers = 1;
        this.gitHubdata.following = 1;
        this.gitHubdata.login = "vikingo1618";
        this.gitHubdata.name = "Victor Leal";
    }

    ngOnDestroy() {
        
    }

    ngOnInit() {
        
    }
}