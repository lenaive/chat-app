import {RouterModule, Routes} from '@angular/router';
import {ChatRoomComponent} from './chat-room/chat-room.component';
import {ContactsComponent} from './contacts/contacts.component';

const appRoutes: Routes = [
    { path: 'chatRoom/:userName', component: ChatRoomComponent },
    { path: 'contacts', component: ContactsComponent },
    {
        path: '',
        redirectTo: '/contacts',
        pathMatch: 'full'
    }
];
export const routing = RouterModule.forRoot(appRoutes);
