import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'beginner-task-nx-welcome',
    standalone: true,
    imports: [CommonModule],
    template: '' +
        '<h1 style="color: blue">This is the main page</h1>' +
        '<button style="border: none; outline: none; padding: 20px 20px; background-color: darkblue; border-radius: 15px;"><a href="./users" style="text-decoration: none; color: white">Go to list of users</a></button>',
    styles: [],
    encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
