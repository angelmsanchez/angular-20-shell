import { Injectable } from '@angular/core';

// @Component({
//   selector: 'lib-auth',
//   imports: [],
//   template: `
//     <p>
//       auth works!
//     </p>
//   `,
//   styles: ``
// })
// export class Auth {

// }
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userName = 'UserName Library';
}
