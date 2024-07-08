public class OpportunityTriggerHandler {
    public void updateOpportunity(list<Opportunity> opplist)
{
for(Opportunity opp:opplist)
{
if(opp.Opportunity_Status__c !=NULL)
{
Account acc = new Account();
acc.Id = opp.AccountId;
acc.Account_Status__c=opp.Opportunity_Status__c;
update acc;
}
}
}
}