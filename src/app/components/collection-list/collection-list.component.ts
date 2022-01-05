import { Component, OnInit } from '@angular/core';
import { OpenSeaServiceService } from 'src/app/services/open-sea-service.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  collectionAssets = []
  constructor(private openSeaService : OpenSeaServiceService) { }

  currentHero = undefined
 
  ngOnInit(): void {

    this.openSeaService.getAllFirstCollections().subscribe(res => {

      
      

      this.collectionAssets = res?.assets
      this.currentHero = this.collectionAssets[0]
    })
  }


  setActiveHero(clt:any)

  {

    this.currentHero = clt
  }

}
