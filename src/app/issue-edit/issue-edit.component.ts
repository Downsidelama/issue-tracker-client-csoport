import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';
import { Location } from '@angular/common';

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  id: number
  issue: Issue = null;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.issue = this.issueService.getIssue(this.id);
  }

  onFormSave(issue: Issue) {
    this.issueService.modifyIssue(this.id, issue)
    this.location.back();
  }

}
