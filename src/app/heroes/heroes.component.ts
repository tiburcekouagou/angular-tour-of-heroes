import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero?: Hero;
  heroes: Hero[] = [];


  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

}
