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
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { PassengerObjectService } from '../../services/passenger-object.service';
// Import Models
import { PassengerObject } from '../../domain/car-hexa_db/passenger-object';

// START - USED SERVICES
/**
* PassengerObjectService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* PassengerObjectService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of PassengerObject
 * @class PassengerObjectListComponent
 */
@Component({
    selector: 'app-passenger-object-list',
    templateUrl: './passenger-object-list.component.html',
    styleUrls: ['./passenger-object-list.component.css']
})
export class PassengerObjectListComponent implements OnInit {
    list: PassengerObject[];
    search: any = {};
    idSelected: string;
    constructor(
        private passengerobjectService: PassengerObjectService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.passengerobjectService.list().subscribe(list => this.list = list);
    }

    /**
     * Select PassengerObject to remove
     *
     * @param {string} id Id of the PassengerObject to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected PassengerObject
     */
    deleteItem() {
        this.passengerobjectService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}