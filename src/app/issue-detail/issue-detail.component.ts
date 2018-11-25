import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';

@Component({
  selector: 'issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  id: number;
  issue: Issue;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.issue = this.issueService.getIssue(this.id);
    }
  }

}
