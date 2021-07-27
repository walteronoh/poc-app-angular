import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = "";
  error: string = "";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  searchValue(): any {
    if (this.search === "") {
      this.error = "";
    } else {
      if (this.search.length > 3) {
        this.error = "";
        this.apiService.getPatients(this.search).subscribe((resp)=> console.log(resp))
      } else {
        this.error = "Enter 2 Or More Values";
      }
    }
  }

}
