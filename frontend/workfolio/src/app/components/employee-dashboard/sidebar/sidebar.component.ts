import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Output() selectSection = new EventEmitter<string>();
  userImage?: string; 
  userName: string = 'UserName'; 
  
  onSelectSection(section: string) {
    this.selectSection.emit(section);
  }
}
