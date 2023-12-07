import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup | any;
  loading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  errorMess:boolean = false

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: 21.145832,
    lng: 72.772929
  };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) {
      const newMarkerPosition = event.latLng.toJSON();
    }
  }
  submitForm(): void {
    if (this.contactForm.valid) {
      console.log('R4x submitFOrm');
      // Handle form submission (send data to server or perform other actions)
      this.loading = true;
      // Simulate a delay (replace with actual form submission logic)
      setTimeout(() => {
        this.loading = false;
        this.successMessage = 'Your message has been sent. Thank you!';
        this.contactForm.reset();
      }, 2000);
    } else {
      this.errorMess = true;
      //alert('Please fill in all required fields correctly.');
      this.errorMessage = '*Please fill in all required fields correctly.';
    }
  }

}
