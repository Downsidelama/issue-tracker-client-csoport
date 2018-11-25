import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';
import { Location } from '@angular/common';

@Component({
  selector: 'issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  id: number = null;
  issue: Issue = new Issue();
  title = 'New issue';

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.issue = this.issueService.getIssue(this.id);
      this.title = 'Edit issue';
    }
  }

  onFormSave(issue: Issue) {
    if (this.id) {
      this.issueService.modifyIssue(this.id, issue)
      this.location.back();
    } else {
      this.issueService.addIssue(issue);
      this.router.navigate(['/issues']);
    }
  }

}
