trigger account on Account (before insert) {
    if(trigger.isBefore){
        if(trigger.isInsert){
            for(Account acc:trigger.new){
                if(acc.Industry=='Biotechnology'){
                    acc.Rating='Hot';
                }
            }
        }
    }

if(trigger.isAfter){
    if(trigger.isInsert){
        List<Contact> lstcon=new List<Contact>();
        for(Account acc:trigger.new){
            Contact con=new Contact();
            con.FirstName='RelatedContact';
            con.LastName=acc.Name;
            con.AccountId=acc.Id;
        }
    }
}
}