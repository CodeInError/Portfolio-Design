import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  downloadCV() {
    console.log('Sameer => test');

    // Specify the file URL
    const fileUrl = '../../assets/Ravi_CV.pdf';

    // Make an HTTP request to get the file as a Blob
    this.http.get(fileUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
      // Create a Blob URL
      const blobUrl = window.URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement('a');

      // Set the link's href to the Blob URL
      link.href = blobUrl;

      // Set the link's download attribute with the desired filename
      link.download = 'Ravi_CV.pdf';

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);

      // Release the Blob URL
      window.URL.revokeObjectURL(blobUrl);

      // Show a success toast message
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'CV downloaded successfully',
      });
    });
  }
}
