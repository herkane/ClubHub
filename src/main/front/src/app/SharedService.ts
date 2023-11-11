import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sectionSource = new BehaviorSubject<string>('');
  private userRole = new BehaviorSubject<string>('');
  private currentUserBehavior = new BehaviorSubject<string>('');
  currentSection = this.sectionSource.asObservable();
  currentRole = this.userRole.asObservable();
  currentUser = this.currentUserBehavior.asObservable();

  changeSection(section: string) {
    this.sectionSource.next(section);
  }

  changeCurrentUser(user: string) {
    this.currentUserBehavior.next(user);
  }

  changeUserRole(role: string) {
    this.userRole.next(role);
  }

}
