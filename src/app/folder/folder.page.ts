import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Beers{
  name: string
  desc: string
}

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

export class FolderPage implements OnInit {
  
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}
  beerTypes: Beers[] = [{ name: 'Лагер', desc: 'это наиболее распространенный сорт пива, характеризующийся низкой температурой брожения и чистым, свежим вкусом.' },
  { name: 'Эль', desc: 'это сорт пива, который производится с использованием верховного брожения. Вкус эля может варьироваться от фруктового и пряного до горького и карамельного.' },
  { name: 'Портер', desc: 'это темное пиво с богатым и насыщенным вкусом, часто с нотами шоколада, кофе и сухофруктов.' },
  { name: 'Стаут', desc: 'это еще один темный сорт пива, обладающий богатым вкусом и ароматом, часто с нотами шоколада, кофе и карамели.' },
  { name: 'Вайсбир', desc: 'это пшеничное пиво, которое обладает освежающим и фруктовым вкусом, часто с нотами банана и гвоздики.' },
  { name: 'Бельгийский эль', desc: 'это сорт пива, который производится в Бельгии и характеризуется высокой карбонизацией, фруктовым ароматом и сложным вкусом.' }];
  
  trackByFn(index: number, item: Beers): string {
    return item.name;
  }
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
