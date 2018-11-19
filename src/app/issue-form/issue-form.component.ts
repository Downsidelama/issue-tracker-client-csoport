import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Issue } from '../issue';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit, OnChanges {

  issueForm = this.fb.group({
    title: ['', [Validators.required]],
    place: ['', [Validators.required, Validators.pattern(/^PC\d+/)]],
    description: [''],
    status: ['', [Validators.required]],
  });
  @Input() issue: Issue;
  @Output() save = new EventEmitter<Issue>();

  get title() { return this.issueForm.get('title'); }
  get place() { return this.issueForm.get('place'); }
  get description() { return this.issueForm.get('description'); }
  get status() { return this.issueForm.get('status'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {}
  
  ngOnChanges() {
    this.issueForm.patchValue(this.issue);
  }

  onSubmit() {
    this.save.emit(
      Object.assign(new Issue(), this.issueForm.value)
    );
  }

}
