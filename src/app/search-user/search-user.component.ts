import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'app-search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit, OnDestroy {
    
    userName: string;
    constructor(){

    }

    ngOnInit(): void {
       
    }
    ngOnDestroy() {
        
    }

    onSearchClick(){
        console.log('Click '+ this.userName);
    }
}