import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[]= [{
    firstName:'james',
  lastName:'aaaaa',
  email:'qsdf@qdsf.fr',
    drinkPreference:'coca',
    hobbies:['coder','sport']

  }] ;
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
