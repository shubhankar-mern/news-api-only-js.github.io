function myPutdata() {
  var logged_username = document.getElementById('username').value;
  var logged_password = document.getElementById('password').value;
  localStorage.setItem('logged_username', logged_username);
  localStorage.setItem('logged_password', logged_password);
  window.open('SignIn.html', '_blank');
  window.close();
}
//window.open('homepage.html', '_blank');
