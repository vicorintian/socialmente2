
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",80,function(sym,e){<!DOCTYPE html><html><head><title>Deployd login form</title><link rel="stylesheet"type="text/css"href="/css/bootstrap.min.css"/></head><body><div class="container"><h1>Register</h1><form><label for="username">Username:</label><input type="text"id="username"/><label for="password">Password:</label><input type="password"id="password"/><label for="confirm-password">Confirm Password:</label><input type="password"id="confirm-password"/><br/><button type="submit"class="btn btn-primary">Sign up</button><a href="/"class="btn btn-link">home</a></form></div><script type="text/javascript"src="/js/lib/jquery.js"></script><script type="text/javascript"src="/dpd.js"></script><script type="text/javascript">$('form').submit(function(){var username=$('#username').val();var password=$('#password').val();var confirmPassword=$('#confirm-password').val();if(!username){alert("Username is required");}else if(!password){alert("Password is required");}else if(password!==confirmPassword){alert("Passwords do not match");}else{dpd.users.post({username:username,password:password},function(user,error){if(error){alert(JSON.stringify(error));}else{location.href="/index.html";}});}
return false;});</script></body></html>});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Ellipse2}","click",function(sym,e){window.open("menuprincipal.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-3359685");