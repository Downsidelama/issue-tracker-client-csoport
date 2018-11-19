import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issues: Issue[] = [
    {
      id: 1,
      title: 'Rossz a gép',
      place: 'PC6',
      description: 'Valami leírás',
      status: 'NEW',
      updated_at: '2018-11-11',
    },
    {
      id: 2,
      title: 'Rossz a gép',
      place: 'PC7',
      description: 'Valami leírás',
      status: 'DOING',
      updated_at: '2018-11-11'
    },{
      id: 3,
      title: 'Rossz a gép',
      place: 'PC8',
      description: 'Valami leírás',
      status: 'DOING',
      updated_at: '2018-11-11'
    },{
      id: 4,
      title: 'Rossz a gép',
      place: 'PC9',
      description: 'Valami leírás',
      status: 'DONE',
      updated_at: '2018-11-11'
    },
  ]

  constructor() { }

  getIssues(): Issue[] {
    return this.issues;
  }

  getIssue(id: number): Issue {
    return this.issues.find(issue => issue.id === id);
  }

  modifyIssue(id: number, issue: Issue) {
    const oIssue = this.getIssue(id);
    Object.assign(oIssue, issue);
  }
}
