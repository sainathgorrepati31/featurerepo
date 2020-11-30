import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { Feature } from '../feature';
import { FeatureserviceService } from '../featureservice.service';

@Component({
  selector: 'app-addfeature',
  templateUrl: './addfeature.component.html',
  styleUrls: ['./addfeature.component.css']
})
export class AddfeatureComponent implements OnInit {

  feature = new Feature();

  productAreas = ['Policies','Billing','Claims','Reports'];

  clients = ["Client A", "Client B", "Client C"];

  successMsg = "";

  constructor(private route:Router, private featureService:FeatureserviceService) { }

  ngOnInit(): void {
  }

  addFeatureFormSubmit(){
    console.log(this.feature);
    this.featureService.addFeature(this.feature).subscribe(
      data => {
        console.log("Feature saved successfully.");
        this.successMsg = "Feature added successfully."
        this.route.navigate(['/listfeatures']);
      },
      error => console.log("Not able to save feature.")
    )
    
  }

  gotoFeaturesList(){
    console.log("Go back.");
    this.route.navigate(['/listfeatures']);
  }
}
