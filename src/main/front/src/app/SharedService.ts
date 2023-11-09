import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sectionSource = new BehaviorSubject<string>('');
  private userRole = new BehaviorSubject<string>('');
  currentSection = this.sectionSource.asObservable();
  currentRole = this.userRole.asObservable();

  changeSection(section: string) {
    this.sectionSource.next(section);
  }

  changeUserRole(role: string) {
    this.userRole.next(role);
  }

  getSection() {
    return this.currentSection;
  }

  getRole() {
    return this.currentRole;
  }

}
