({
    helperMethod : function(component) {
        var ActiveUserTogglevalue = component.find("activeUsercheckbox").get("v.checked");
        var inActiveUserTogglevalue = component.find("inActiveUsercheckbox").get("v.checked");
        console.log(ActiveUserTogglevalue);
        console.log(inActiveUserTogglevalue);
        var action = component.get("c.getUserDetails");
        
        if(ActiveUserTogglevalue === true && inActiveUserTogglevalue === false){

            action.setParams({ ActiveuserStatus : ActiveUserTogglevalue });
        }
        if(inActiveUserTogglevalue === true && ActiveUserTogglevalue === false){

            action.setParams({ inActiveuserStatus : inActiveUserTogglevalue });
        }
        if(ActiveUserTogglevalue === true && inActiveUserTogglevalue === true){
            action.setParams({ ActiveuserStatus : ActiveUserTogglevalue,
                              inActiveuserStatus : inActiveUserTogglevalue
                             });
        }
        
        
        // Create a callback that is executed after 
        // the server-side action returns
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server

                component.set("v.userList", response.getReturnValue());
                
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action);
    },
    updateUserStatus: function(component,UId){
        var action = component.get("c.FetchUserStatus");
        action.setParams({
            "userid": UId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log('state is : ' + state);
            if (component.isValid() && state === 'SUCCESS') {
                var result = response.getReturnValue();
                console.log('result is : ' + result);
            } else if (component.isValid() && state === 'ERROR') {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log('Error message: ' + errors[0].message);
                    }
                } else {
                    console.log('Unknown error');
                }
            }
            
        });
        
        $A.enqueueAction(action);
    }
})