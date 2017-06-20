import { Injectable } from '@angular/core';

@Injectable()
export class ColorsService {

  private colors = new Map<string, string>();

  constructor() { }

  public generateColor(tag: string){
    if(this.colors.has(tag)){
      return this.colors.get(tag);
    }
    const newColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    this.colors.set(tag, newColor);
    return newColor;
  }
}
