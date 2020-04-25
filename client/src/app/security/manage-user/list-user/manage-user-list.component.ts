/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5ea3476182f82d390e77c9df
*
* You will get 10% discount for each one of your friends
* 
*/
// COMPONENT
import { Component, OnInit } from '@angular/core';

// SERVICES
import { UserService } from 'src/app/services/user.service';

// MODEL
import { User } from 'src/app/domain/car-hexa_db/user';


/**
 * List of all users
 */
@Component({
    selector: 'app-manage-user-list',
    templateUrl: './manage-user-list.component.html'
})
export class ManageUserListComponent implements OnInit {
    users: User[];
    search: any = {};

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        // Get list users
        this.userService.list().subscribe(list => this.users = list);
    }

}
