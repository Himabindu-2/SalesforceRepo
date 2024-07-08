({

fetchAllCarHelper : function(component, event, helper) {

var action = component.get('c.getCars');

        action.setCallback(this,function(response){

        var responseValues= response.getReturnValue();

            component.set('v.CarList',responseValues);

            component.set('v.carsFound',true);

        });

        $A.enqueueAction(action,false);
 },
    fetchFilteredCar:function(component, event, helper){
        var locFilter = event.getParam("locFilter");
        var AvailableFilter = event.getParam("AvailableFilter");
        var action = component.get('c.getSearchedCar');
        action.setParams({
            'location':locFilter,
            'Availability':AvailableFilter
        });
        action.setCallback(this,function(response){
            var responseValues = response.getReturnValue();
            component.set('v.CarList',responseValues)
            component.set('v.carsFound',true)
        });
        $A.enqueueAction(action,false);
    }

})