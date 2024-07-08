@isTest
private class BatchUpdateContactTest {





@testSetup
static void setup() {
List<Contact> contacts = new List<Contact>();
for (Integer i=0;i<10;i++) {
contacts.add(new Contact(firstname='first', lastname='last'));
}
insert contacts;



}
static testmethod void test() {
System.Test.startTest();
BatchUpdateContact uca = new BatchUpdateContact();
Id batchId = Database.executeBatch(uca);
System.Test.stopTest();
System.assertEquals(10, [select count() from contact where Email LIKE 'system@gmail.com']);
}



}