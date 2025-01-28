async function sing_in() {
    // add cheek form here before post
    const formerror = document.getElementById('error-singin');
    const response = await post('form-singin');
    try {
      if (response.message != 'login') {
        formerror.innerHTML = `<span style="color:red">${response.message}<span>`;
      }else{
        formerror.innerHTML = `<span style="color:green">${response.message}<span>`;
        sessionStorage.setItem('auth',response.auth);
        sessionStorage.setItem('username',response.username);
        window.location.replace(`/@${response.username}`);
      }
    } catch (error) {
      formerror.innerHTML = '<span style="color:red">an error ocured, please try again.<span>'
    }
  }
  
  async function sing_up() {
    // add cheek form here before post
    const formerror = document.getElementById('error-singup');
    const response = await post('form-singup');
    try {
      if (response.message != 'login') {
        formerror.innerHTML = `<span style="color:red">${response.message}<span>`;
      }else{
        formerror.innerHTML = `<span style="color:green">${response.message}<span>`;
        sessionStorage.setItem('auth',response.auth);
        sessionStorage.setItem('username',response.username);
        window.location.replace(`/@${response.username}`);
      }
    } catch (error) {
      formerror.innerHTML = '<span style="color:red">an error ocured, please try again.<span>'
    }
  }
  
  
  async function post(formid){
    try {
      const formId = document.getElementById(formid);
      const form = new FormData(formId);
      form.append('type',formid);
      const res = await fetch('/login', {
          method: "POST",
          body: form,
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const response = await res.json();
      console.log(response.message, response);
      return response;
    } catch (error) {
      console.error('error:',error);
    }
  }
  
  async function auth(){
    try {
      const form = new FormData();
      form.append('auth',sessionStorage.getItem('auth'));
      form.append('type','form-auth');
      const res = await fetch('/login', {
          method: "POST",
          body: form,
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const response = await res.json();
      if(response.message == 'auth'){
        window.location.replace(`/@${sessionStorage.getItem('username')}`);
      }
    } catch (error) {
      console.error('error:',error);
    }
  }
  auth(); //auto login
