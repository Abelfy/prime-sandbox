import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ps-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public form : FormGroup = this._fb.group({
    nir : ['190086061205577',Validators.compose([Validators.minLength(15),Validators.maxLength(15)])]
  })

  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
  }

}
