import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Confirm, Loading, Notify } from 'notiflix';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataList: any = [];
  title = 'client';
  show_form: boolean = false;
  dataForm!: FormGroup;
  url: any = "http://localhost:8080/api/v1"
  update_flag: boolean = false;
  update_data: any;
  constructor(private http: HttpClient, private fb: FormBuilder) {
  }
  ngOnInit() {
    this.getData();
    this.dataForm = this.fb.group({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required])
    })
  }

  getData() {
    Loading.arrows();
    this.http.get(this.url).subscribe({
      next: (res) => {
        Loading.remove();
        this.dataList = res;
      }, error: (err) => {
        Loading.remove();
        Notify.failure(err.message);
      }
    })
  }
  showForm() {
    this.show_form = true
  }
  submitDataForm() {
    Loading.arrows();
    let reqBody = this.dataForm.value;
    if (!this.update_flag) {
      this.http.post(this.url, reqBody).subscribe({
        next: (res) => {
          Loading.remove();
          this.getData();
          this.show_form = false;
          this.dataForm.reset();
        },
        error: (err) => {
          this.dataForm.reset();
          Loading.remove();
          Notify.failure(err.message);
        }
      })
    } else {
      const params = new HttpParams().set('id', this.update_data._id);
      this.http.patch(this.url, reqBody, { params }).subscribe({
        next: (res) => {
          Loading.remove();
          this.getData();
          this.show_form = false;
          this.dataForm.reset();
          this.update_flag = false;
        },
        error: (err) => {
          this.dataForm.reset();
          Loading.remove();
          Notify.failure(err.message);
          this.update_flag = false;
        }
      })
    }
  }
  updateData(data: any) {
    this.show_form = true;
    this.update_flag = true;
    this.update_data = data;
    this.dataForm.patchValue({
      username: data.username,
      email: data.email
    })
  }
  cancelForm() {
    this.show_form = false;
    this.dataForm.reset();
  }
  deleteData(data: any) {
    Confirm.show(
      'Confirm',
      'Are you sure?',
      'Yes',
      'No',
      () => {
        Loading.arrows()
        const params = new HttpParams().set("id", data._id)
        this.http.delete(this.url, { params }).subscribe({
          next: () => {
            Loading.remove();
            this.getData();
          },
          error: () => {
            Loading.remove();
          }
        })
      },
      () => {
      },
      {
      },
    );

  }
}
