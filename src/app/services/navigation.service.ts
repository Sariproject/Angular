import { Injectable } from '@angular/core';
export type dialogType = 'orders' | 'addNew' | 'addNylon' | 'pay' | 'shipment' | 'group' | 'newOrder' | 'newCustomer' | 'currentTime' | 'updateGroup' | 'updateShipment'
@Injectable()
export class NavigationService {
  
  showStudentDialog = false;
  showOrdersDialog = false;
  showShipmentDialog = false;
  showGroupDialog = false;
  showNewOrderDialog = false;
  showNewCustomerDialog = false;
  showCurrentTimeDialog = false;
  showAddNewDialog = false;
  showUpdateShipmentDialog = false;
  showUpdateGroupDialog = false;
  showAddNylonDialog = false;
  showSuccessDialog=false
  showNewTalentandActivityDialog=false
  showbeforSaveDialog=false
  showUpdataDialog=false
  displayDialog: dialogType = 'orders';

  constructor() { }

  clear() {
    this.showStudentDialog= false;
    this.showOrdersDialog = false;
    this.showShipmentDialog = false;
    this.showGroupDialog = false;
    this.showNewOrderDialog = false;
    this.showNewCustomerDialog = false;
    this.showCurrentTimeDialog = false;    
    this.showAddNewDialog = false;
    this.showUpdateShipmentDialog=false;
    this.showUpdateGroupDialog=false;
    this.showAddNylonDialog=false;
    this.showNewTalentandActivityDialog=false
    this.showbeforSaveDialog=false
    this.showSuccessDialog=false
    this.displayDialog = 'orders';
    this.showUpdataDialog=false
  }
}
