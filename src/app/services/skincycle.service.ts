import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkincycleService {
  // private apiUrlProductPage = `http://localhost:0317/api/users/stage/{stageId}/`;

  private referenceDate: moment.Moment;
  private userPattern?: string;

  private userSkinCyclePreferenceSubject = new BehaviorSubject<string>('');
  userSkinCyclePreference$ = this.userSkinCyclePreferenceSubject.asObservable();

  constructor(private http: HttpClient) {
    this.referenceDate = moment();
  }

  // Method to update the user's skin cycle preference
  setUserSkinCyclePreference(preference: string) {
    this.userPattern = preference;
    this.userSkinCyclePreferenceSubject.next(preference);
  }

  getCurrentStage(): number {
    const currentDate = moment();
    const daysPassed = currentDate.diff(this.referenceDate, 'days');

    if (this.userPattern === '4-day') {
      return (daysPassed % 4) + 1; // 1-indexed
    } else {
      return (daysPassed % 3) + 1; // 1-indexed
    }
  }
  stageId = this.getCurrentStage();
  // Call this method when you want to get the products for the current stage
  getProductsForCurrentStage(stageId: any) {
    const token = localStorage.getItem('jwt'); // Replace with your JWT token
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get(`http://localhost:0317/api/users/stage/${stageId}/`, {
      headers,
    });
  }
}
