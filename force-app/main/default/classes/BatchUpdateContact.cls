global class BatchUpdateContact implements Database.Batchable<sObject>{





global final String Query;



global BatchUpdateContact(){



Query='SELECT Email FROM Contact WHERE Email = null';





}





global Database.QueryLocator start(Database.BatchableContext BC){
return Database.getQueryLocator(query);
}





global void execute(Database.BatchableContext BC, List<Contact> scope){





List<Contact> contactsToUpdate = new List<Contact>();
for(Contact contact : scope)
{
if(contact.email==NULL){





contact.Email = 'system@gmail.com';
contactsToUpdate.add(contact);
}
}



if(!contactsToUpdate.isEmpty())
update contactsToUpdate;
}





global void finish(Database.BatchableContext BC){





}
}