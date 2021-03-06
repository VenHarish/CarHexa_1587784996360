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
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DriverService } from '../../services/driver.service';
import { PassengerObjectService } from '../../services/passenger-object.service';
import { UserService } from '../../services/user.service';
// Import Models
import { Driver } from '../../domain/car-hexa_db/driver';
import { User } from '../../domain/car-hexa_db/user';
import { PassengerObject } from '../../domain/car-hexa_db/passenger-object';

// START - USED SERVICES
/**
* DriverService.create
*	@description CRUD ACTION create
*
* DriverService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* DriverService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* PassengerObjectService.list
*	@description CRUD ACTION list
*
* UserService.findBy_Driver
*	@description CRUD ACTION findBy_Driver
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Driver
 */
@Component({
    selector: 'app-driver-edit',
    templateUrl: 'driver-edit.component.html',
    styleUrls: ['driver-edit.component.css']
})
export class DriverEditComponent implements OnInit {
    item: Driver;
    list_passengerObject: PassengerObject[];
    externalUser__Driver: User[];
    model: Driver;
    formValid: Boolean;

    constructor(
    private driverService: DriverService,
    private passengerobjectService: PassengerObjectService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Driver();
        this.externalUser__Driver = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.driverService.get(id).subscribe(item => this.item = item);
                this.userService.findBy_Driver(id).subscribe(list => this.externalUser__Driver = list);
            }
            // Get relations
            this.passengerobjectService.list().subscribe(list => this.list_passengerObject = list);
        });
    }


    /**
     * Save Driver
     *
     * @param {boolean} formValid Form validity check
     * @param Driver item Driver to save
     */
    save(formValid: boolean, item: Driver): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.driverService.update(item).subscribe(data => this.goBack());
            } else {
                this.driverService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



