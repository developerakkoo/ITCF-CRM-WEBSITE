import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) { 
    this.init();
  }


  init(){
    this.storage.create();
  }

  set(key:any, value:any){
    return this.storage.set(key,value);
  }

  get(key:any){
    return this.storage.get(key);
  }

  remove(key:any){
    return this.storage.remove(key);
  }


  clear(){
    return this.storage.clear();
  }
}
