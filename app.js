function myGetdata() {
  var login_username = document.getElementById('username').value;
  var login_password = document.getElementById('password').value;

  var uname = localStorage.getItem('logged_username');
  var pwd = localStorage.getItem('logged_password');
  if (uname == login_username && pwd == login_password) {
    window.open('homepage.html');
    window.close();
  } else if (uname == login_username && pwd != login_password) {
    window.alert('Password invalid. Kindly check again!!');
    location.reload();
  } else {
    window.alert('User Not Found!! Please Register');
    location.reload();
  }
}
//window.open('homepage.html', '_blank');
