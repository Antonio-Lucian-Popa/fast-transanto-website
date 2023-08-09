import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Email } from 'src/app/interfaces/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userForm = this.fb.group({
    email: ["", Validators.required],
    subject: ["", Validators.required],
    message: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit(): void {
  }

  sendEmail(): void {
    if(this.userForm.valid) {
      const email = this.userForm.get("email")!.value;
      const subject = this.userForm.get("subject")!.value;
      const message = this.userForm.get("message")!.value
      const payload: Email = {
        email: email ? email : "",
        subject: subject ? subject : "",
        message: message ? message : "",
      }
     this.emailService.sendEmail(payload).subscribe(res => console.log(res));
    } else if (this.userForm.invalid) {
      Object.values(this.userForm.controls).forEach(control => {
          control.markAsTouched();
      });
  }
  }

}
