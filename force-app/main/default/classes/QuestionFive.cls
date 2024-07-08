public with sharing class QuestionFive {
@AuraEnabled
public static list<User> getUserDetails(Boolean ActiveuserStatus,Boolean inActiveuserStatus){
system.debug('ActiveuserStatus'+ActiveuserStatus);
system.debug('inActiveuserStatus'+inActiveuserStatus);
list<User> userlist = new list<user>();
string str = 'Select id, Name ,email,IsActive FROM User';
if(ActiveuserStatus == True && inActiveuserStatus == null ){
str += ' where IsActive = :ActiveuserStatus';
} else if(inActiveuserStatus == True && ActiveuserStatus == null){
str += ' where IsActive = false';
}

userlist = database.query(str);
return userlist;
}

@auraEnabled
public static list<User> FetchUserStatus(id userid){
system.debug('User id is --->'+userid);
List<User> userdetailslist= [select id, Name ,email,IsActive from User where id = : userid];
for(User u :userdetailslist){
if(u.IsActive){
u.IsActive = False;
}else{
u.IsActive = true;
}

update u;
}

return userdetailslist;
}



}