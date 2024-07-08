trigger OpportunityChangeTrigger on OpportunityChangeEvent (after insert) {
    List<Opportunity> opps = new List<Opportunity>();
    List<Task> taskList = new List<Task>();
    for(OpportunityChangeEvent event : Trigger.New){
        EventBus.ChangeEventHeader header = event.ChangeEventHeader;
        if(header.changeType == 'UPDATE' && event.isWon){
			Task task = new Task();
            task.subject = 'Follow up on won opportunities: ' +header.recordIds;
            tasklist.add(task);
        }
    }
    if(taskList.size()>0){
        insert taskList;
    }

}