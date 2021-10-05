import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.status === 400) {
      console.error({"error": "Nincs ApplicantId"});
    } else if (error.status === 405) {
      console.error({"error": "Method Not Allowed"});
    } else if (error.status === 500) {
      console.error({"error": "Sikertelen azonosítás"});
    }
  }

  onSubmit() {

    this.loginService.login(this.form.value).subscribe(
      resp => {
        this.router.navigate(['/characters'])
      },
      error => {
        LoginComponent.handleError(error);
      }
    )
  }
}
