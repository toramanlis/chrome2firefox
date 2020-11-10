# Import your passwords from Chrome to Firefox

### Usage:

* Export your Chrome passwords as `csv` as described [here](https://support.google.com/accounts/thread/7562494)
* Open your firefox and go to `about:logins`
* Open the inspector by pressing `F12` window and go to the `Console` tab
* Copy and paste the code inside `dist/main.js` here
* Then run this code:
```js
go(/* Contents of your passwords file as a string */);
```
* Send me love
