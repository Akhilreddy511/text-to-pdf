import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class TestServiceService {

    constructor(private http: HttpClient) { }

    //   addForm(inp) {
    //     console.log(inp);
    //     this.http.post('http://localhost:3200/api/post', inp).subscribe(function(result) {
    //       console.log(result);
    //     });
    //   }

    addPdf(pdf) {
        this.http.post('http://localhost:3200/api/post', pdf).subscribe((res) => {
            console.log(res)
        })
    }
}
