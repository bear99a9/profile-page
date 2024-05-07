import { Component } from '@angular/core';
import { LinksComponent } from './links/links.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LinksComponent, ExperienceComponent, AboutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
