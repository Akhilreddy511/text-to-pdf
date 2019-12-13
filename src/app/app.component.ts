import { Component } from '@angular/core';
import jspdf from 'jspdf'
import 'jspdf-autotable';
import * as $ from 'jquery'
import { TestServiceService } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pdfConversion';
  pdfSrc: string;
  constructor(public service: TestServiceService) {

  }
  //   constructor(private globals: DataService) {
  //     this.pdfSrc= "src/assets/pdf/pdf.pdf";
  //     this.doc = new jsPDF('p', 'pt');
  //     this.doc.text(20, 20, 'Hello world.');
  //     this.doc.save('src/assets/pdf/test.pdf');

  // }
  downloadConversation() {
    var array = [{ name: 'Sweden', phno: 'Canada', message: 'China' }, { name: 'Sweden', phno: 'Canada', message: 'China' }, { name: 'Sweden', phno: 'Canada', message: 'China' }, { name: 'Sweden', phno: 'Canada', message: 'China' }]
    console.log('am in downloadConversation function');
    this.pdfSrc = "src/assets/pdf/pdf.pdf";
    var doc = new jspdf('p', 'pt');
    doc.autoTable({ html: '#my-table' });

    doc.autoTable({
      //example-1
      // head: [['Name', 'Email', 'Country']],
      // body: [
      //   ['David', 'david@example.com', 'Sweden'],
      //   ['Castille', 'castille@example.com', 'Norway'],
      //   // ...
      // ]
      //example -2
      // columnStyles: { theme: { grid: 'striped' } }, // European countries centered
      body: array,
      columns: [{ header: 'Name', dataKey: 'name' }, { header: 'Mobile', dataKey: 'phno' }, { header: 'Message', dataKey: 'message' }]
    });


    // doc.addPage();
    // doc.text(20, 20, 'Do you like that?');

    var filename = "C:/Test.pdf"
    // pdf.save(filename);

    // doc.save(filename);

    var pdfDocument = doc.save("test.pdf");
    this.service.addPdf(pdfDocument);
  }

}
