import {Component, Injectable, Input} from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'content',
    // template: `<h1>Hello {{name}}</h1>`
    templateUrl: 'views/test.html'
})
export class TestComponent {
    private dataArray: any[];
    private users = {
        name: '',
        contact: '',
        email: ''
    };
    private editusers = {
        id: '',
        name: '',
        contact: '',
        email: ''
    };
    headline = 'Welcome to the Angular 2';

    /* HTTP constructor*/
    constructor(private http: Http, private router: Router) {}

    /* On page load function */
    ngOnInit() {
        this.getData();
    }

    /* Get a list data */
    getData() {
        this.http.get('http://localhost/api/api.php?action=getData')
            .subscribe(
                res => this.dataArray = res.json()
            );
    }

    /* Insert data to the database */
    postData() {
        let body = 'name=' + this.users.name + '&contact=' + this.users.contact + '&email=' + this.users.email;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http
            .post('http://localhost/api/api.php?action=postData',
                body, {
                    headers: headers
                })
            .subscribe(res => {
                // alert('ok');
                // console.log(res);
                /*this.getData();
                $('.modal').modal('hide');
                this.users.name = '';
                this.users.contact = '';
                this.users.email = '';*/
                 location.reload();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }

    /* Delete data from the database */
    deleteData(id) {
        // this.id
        let body = 'id=' + id;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http
            .post('http://localhost/api/api.php?action=deleteData',
                body, {
                    headers: headers
                })
            .subscribe(res => {

                // console.log(res);
                /*this.getData();
                $('.modal').modal('hide');*/
                 location.reload();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });

    }

    /* Edit data to the database */
    editData(id) {
        let body = 'id=' + id;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http
            .post('http://localhost/api/api.php?action=getUser',
                body, {
                    headers: headers
                })
            .subscribe(res => {
                this.editusers = res.json();
                // console.log(res);
                // location.reload();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });

    }

    /* Update user data  */
    updateData() {
        let body =
            'id=' + this.editusers.id +
            '&name=' + this.editusers.name +
            '&contact=' + this.editusers.contact +
            '&email=' + this.editusers.email;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http
            .post('http://localhost/api/api.php?action=updateData',
                body, {
                    headers: headers
                })
            .subscribe(res => {
                // alert('ok');
                // console.log(res);
                /*this.getData();
                $('.modal').modal('hide');*/
                 location.reload();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
    }
}
