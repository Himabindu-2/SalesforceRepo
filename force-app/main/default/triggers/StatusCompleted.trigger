trigger StatusCompleted on Booking__c (before insert) {
    if(trigger.isBefore)
    {
        if(trigger.isInsert)
        {
        for(Booking__c book:trigger.new) {
            if(book.Approval_status__c=='Approved'){
                book.Status__c='Confirmed';
            }
        }
}

}
}