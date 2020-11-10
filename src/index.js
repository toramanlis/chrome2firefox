const csv2json = require('csvjson-csv2json');

go=async (csv)=>{
    var data=csv2json(csv);
    
    var open=()=>document.getElementsByTagName('login-list')[0].shadowRoot.querySelector('.create-login-button').click();
    var $=(selector)=>document.getElementsByTagName('login-item')[0].shadowRoot.querySelector(selector);


    open();

    var save=$('.save-changes-button').click;
    var originField=$('.container form [name="origin"]');
    var usernameField=$('.container form [name="username"]');
    var passwordField=$('.container form [name="password"]');


    save=({url, username, password})=>{
        open();

        originField.value=url;
        usernameField.value=username;
        passwordField.value=password;

        $('.save-changes-button').click()
    };

    for(var row of data){
        save(row);
        await new Promise(r => setTimeout(r, 100));
    }
};
