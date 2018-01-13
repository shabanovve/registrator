import {Component, OnInit} from '@angular/core';
import {LessonService} from '../lesson.service';
import {Lesson} from '../lesson';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonsService: LessonService) {
  }

  getLessons(): void {
    this.lessonsService.getLessons()
      .subscribe(lessons => this.lessons = lessons);
  }

  ngOnInit() {
    this.getLessons();
  }

}
