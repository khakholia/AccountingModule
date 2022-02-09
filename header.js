document.getElementById("main-content").onwheel = function (event) {
  if (event.deltaY >= 0) {
    document.getElementById("header").style.display = "none";
  } else {
    document.getElementById("header").style.display = "flex";
  }
};

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var dob = document.getElementById("dob");
var email = document.getElementById("email");
var mobile = document.getElementById("mobile");
var ref = document.getElementById("refC");
var pass = document.getElementById("password");

mobile.oninput = function () {
  if (mobile.value.length > 10) mobile.value = mobile.value.slice(0, 10);
  var regex = /[^0-9]/gi;
  mobile.value = mobile.value.replace(regex, "");
};

fname.oninput = lname.oninput = function () {
  var regex = /[^a-z]/gi;
  fname.value = fname.value.replace(regex, "");
  lname.value = lname.value.replace(regex, "");
};

function signUpProcess() {
  alert(fname.value);
  // var fname = document.getElementById('fname')
  // var lname = document.getElementById('lname')
  // var dob = document.getElementById('dob')
  // var email = document.getElementById('email')
  // var mobile = document.getElementById('mobile')
  // var ref = document.getElementById('refC')
  // var pass = document.getElementById('password')
  //validate
  if (
    !fname.value ||
    !lname.value ||
    !dob.value ||
    !email.value ||
    !mobile.value ||
    !pass.value
  ) {
    alert('All Fields are mandatory except "Referal"');
    return;
  }

  var passReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^_+={}|:"<>,.?])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passReg.test(pass.value)) {
    alert(
      "Password must contain atleast 1 Upper Case, 1 Lower Case, 1 Digit, 1 Special Character and It should be minimum 8 characters."
    );
    return;
  }
  var refReg = /^DM(?=.*[A-Z]){8,10}$/;
  if (ref.value && !refReg.test(ref.value)) {
    alert("Invalid Referal Code");
    return;
  }
  var mobReg = /[0-9]{10,10}/;
  if (!mobReg.test(mobile.value)) {
    alert("Invalid Mobile Number");
    return;
  }
  var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailReg.test(email.value)) {
    alert("Invalid Email");
    return;
  }
  var dateReg =
    /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])(\/)(0[1-9]|1[0-2])(\/)(19[0-9]{2}|20[0-2]{1}[0-9]{1})$/gm;
  if (!dateReg.test(dob.value)) {
    alert("Invalid Date of Birth");
    return;
  }
  var nameReg = /([a-z])/gi;
  if (!nameReg.test(fname.value)) {
    alert("Name cannot contain numbers");
    return;
  }
  if (!nameReg.test(lname.value)) {
    alert("Name cannot contain numbers");
    return;
  }
  alert("Registered Successfully");
}
