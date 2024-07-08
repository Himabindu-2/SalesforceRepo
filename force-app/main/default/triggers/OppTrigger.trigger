trigger OppTrigger on Opportunity (before insert) {
    OpportunityTriggerHandler oc=new OpportunityTriggerHandler();
     oc.updateOpportunity(Trigger.New);

}