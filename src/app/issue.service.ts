import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=', // admin/password
  })
};

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issueUrl = 'http://localhost:8080/issues';

  issues: Issue[] = [
    {
      id: 1,
      title: 'Rossz a gép',
      place: 'PC6',
      description: 'Valami leírás',
      status: 'NEW',
      updated_at: '2018-11-11',
      created_at: '2018-11-11',
    },
    {
      id: 2,
      title: 'Rossz a gép',
      place: 'PC7',
      description: 'Valami leírás',
      status: 'DOING',
      updated_at: '2018-11-11',
      created_at: '2018-11-11',
    },{
      id: 3,
      title: 'Rossz a gép',
      place: 'PC8',
      description: 'Valami leírás',
      status: 'DOING',
      updated_at: '2018-11-11',
      created_at: '2018-11-11',
    },{
      id: 4,
      title: 'Rossz a gép',
      place: 'PC9',
      description: 'Valami leírás',
      status: 'DONE',
      updated_at: '2018-11-11',
      created_at: '2018-11-11',
    },
  ]

  constructor(
    private http: HttpClient
  ) { }

  getIssues(): Promise<Issue[]> {
    return this.http.get<Issue[]>(
      this.issueUrl,
      httpOptions
    ).toPromise();
  }

  getIssue(id: number): Promise<Issue> {
    return this.http.get<Issue>(
      `${this.issueUrl}/${id}`,
      httpOptions
    ).toPromise();
  }

  modifyIssue(id: number, issue: Issue): Promise<Issue> {
    return this.http.put<Issue>(
      `${this.issueUrl}/${id}`,
      issue,
      httpOptions
    ).toPromise();
  }

  addIssue(issue: Issue): Promise<Issue> {
    return this.http.post<Issue>(
      this.issueUrl,
      issue,
      httpOptions
    ).toPromise();
  }
}
