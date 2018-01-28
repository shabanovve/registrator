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
  add(date): void {
    this.lessonsService.add({ date } as Lesson)
      .subscribe(customer => {
        this.lessons.push(customer);
      });
  }
  delete(lesson: Lesson): void {
    this.lessons = this.lessons.filter(c => c !== lesson);
    this.lessonsService.delete(lesson).subscribe();
  }
  ngOnInit() {
    this.getLessons();
  }

}
