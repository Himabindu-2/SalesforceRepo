({
doInit : function(component, event, helper){
helper.fetchAllbookingUtil(component);
},
handleCreate : function(component, event, helper) {
component.set( 'v.newRec', true);
component.set( 'v.showList', false);
},

handleEdit : function(component, event, helper) {
var selectedItem = event.currentTarget;
var recId = selectedItem.dataset.record;

var editRecordEvent = $A.get("e.force:editRecord");
editRecordEvent.setParams({
"recordId": recId
});
editRecordEvent.fire();


},
handleShowList : function(component, event, helper){
component.set( 'v.newRec', false);
component.set( 'v.showList', true);
helper.fetchAllbookingUtil(component);
}
})