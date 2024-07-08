public with sharing class CoantactCreateHelper {

    @AuraEnabled(cacheable=true)

    public static List<Contact> getContactList() {

        return [SELECT Id, Name,Email,

                Phone

            FROM Contact];

    }

}