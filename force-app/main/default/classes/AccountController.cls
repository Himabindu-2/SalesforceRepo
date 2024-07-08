public class AccountController {
public List<Account> acclist{get;set;}
public String AccName {get;set;}
public Account acc{get;set;}
public AccountController(ApexPages.StandardController controller){
acc = new Account();
acclist=[SELECT id, name, phone, rating from account];
}
}