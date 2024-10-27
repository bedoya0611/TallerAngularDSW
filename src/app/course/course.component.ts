// FILE: course/course.component.ts
import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  series: Array<Serie> = [];
  averageSeasons: number = 0;

  constructor() {}
  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  calculateAverageSeasons(): number {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }
  
  ngOnInit() {
    this.series = this.getSerieList();
    this.averageSeasons = this.calculateAverageSeasons();
  }
}