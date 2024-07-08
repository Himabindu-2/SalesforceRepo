({
    handleSuccess : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "type":"success",
            "message": 'Contact Record has been created Successfully!!..'
        });
        toastEvent.fire();
        $A.get('e.force:refreshView').fire();
    },
    handleSubmit : function(component, event, helper) {
        //event.preventDefault(); // Prevent default submit
        
        component.find('createContactForm').submit(); // Submit form
        console.log('Successfully Created Contact Record');
    },
   
    handleCancel : function(component, event, helper) {
        var cmpEvent = component.getEvent("CmpEvent");
        cmpEvent.setParams({
            "closeModel" : false
        });
        cmpEvent.fire();
    },
})