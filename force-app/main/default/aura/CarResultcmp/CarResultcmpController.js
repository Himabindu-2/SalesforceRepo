({

fetchAllCar : function(component, event, helper) {

helper.fetchAllCarHelper(component, event, helper);

},
     ContactClick : function(component, event, helper) {

        var eventSource = event.getSource();

        var crId = eventSource.get('v.value');

         component.set('v.contactId',crId);

    component.set('v.openContact',"true");     

    },

    closeContactModal : function(component, event, helper) {

    component.set('v.openContact',"false");   

    },
    
     BookClick : function(component, event, helper) {

        var eventSource = event.getSource();

        var crId = eventSource.get('v.value');

         component.set('v.bookId',crId);

    component.set('v.openBookingDetails',"true");     

    },

    closeBookingDetailsModal : function(component, event, helper) {

    component.set('v.openBookingDetails',"false");   

    },
    
     CarDetailsClick : function(component, event, helper) {

        var eventSource = event.getSource();

        var carDetailsId = eventSource.get('v.value');

        component.set('v.carDetailsId',carDetailsId);

    component.set('v.openCarDetails',"true"); 

       

    },

    closeCarDetailsModal : function(component, event, helper) {

    component.set('v.openCarDetails',"false");   

    },
    
      PaymentsClick : function(component, event, helper) {

        var eventSource = event.getSource();

        var crId = eventSource.get('v.value');

         component.set('v.PayId',crId);

    component.set('v.openPayments',"true");     

    },

    closePaymentModal : function(component, event, helper) {

    component.set('v.openPayments',"false");   

    },
    
    handleCarFilter:function(component, event, helper) {
        helper.fetchFilteredCar(component, event, helper);
    
}

})