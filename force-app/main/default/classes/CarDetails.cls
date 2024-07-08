public with sharing class CarDetails {
public CarDetails() {
                   }
@AuraEnabled(cacheable=true)
public static list<Car__c> getCars(){
list<Car__c> Car = new list<Car__c>();
Car = [SELECT Name, Car_Availability_status__c,Car_Type__c, Car_image__c,Car_Name__c,Charge_Per_Day__c FROM Car__c LIMIT 11]; 
              
               
                                                                 
return Car;
}
}