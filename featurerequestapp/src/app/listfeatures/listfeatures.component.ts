import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feature } from '../feature';
import { FeatureserviceService } from '../featureservice.service';

@Component({
  selector: 'app-listfeatures',
  templateUrl: './listfeatures.component.html',
  styleUrls: ['./listfeatures.component.css']
})
export class ListfeaturesComponent implements OnInit {

  featurelist? : Feature[];

  constructor(private featureService:FeatureserviceService, private route:Router) { }

  ngOnInit(): void {
    this.featureService.getFeatureList().subscribe(
      data => { 
                console.log("List of feature request are : "+data);
                this.featurelist = data;
              },  
      error => console.log("Error Occured. Not able to get feature requests.")
    )
  }

  gotoAddNewFeature(){
    console.log("Redirecting to show add feature screen.");
    this.route.navigate(['/showaddfeature']);
  }

}
