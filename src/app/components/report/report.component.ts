import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  month: string = "";
  error: string = "";
  months: Array<string> = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  checkInput = (): any => {
    if (this.month === "") {
      this.error = "Select One Of The Months";
    } else {
      this.error = "";
    }
  }

  onSubmit = (): any => {
    if(this.month !== ""){
      this.apiService.getReportByMonth(this.month).subscribe((resp)=>{
        if(resp.length === 0){
          this.error = `No Reports Found For ${this.month}`;
        }else{
          this.error = "";
          console.log(resp);
        }
      });
    }
  }

}
