const formEl = document.getElementById('pizza-hut');
import JustValidate from 'just-validate';

const validateForm = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

validateForm.addField('#firstName',[
    {
        rule: "required",
        errorMessage:"First Name is required"
    },
    {
        rule: "minLength",
        value:3,
    },
    {
        rule: "maxLength",
        value:20,
    },
    
  ],
  {
    errorLabelCssClass: ["firstName"],
})

validateForm.addField('#lastName',[
    {
        rule: "required",
        errorMessage:"Last Name is required"
    },
    {
        rule: "minLength",
        value:3,
    },
    {
        rule: "maxLength",
        value:20,
    },
    
  ],
  {
    errorLabelCssClass: ["lastName"],
})

validateForm.addField('#phoneNumber',[
    {
        rule: "required",
        errorMessage:"Phone Number is required"

      },
      {
        rule: "number",
      },
      {
        rule: "minLength",
        value: 10,
      },
      {
        rule: "maxLength",
        value: 10,
      },
    
  ],
  {
    errorLabelCssClass: ["phoneNumber"],
})

validateForm.addField('#email', [
  {
    rule : "required",
    errorMessage:"Email is required"

  },
  {
    rule: 'email',
  },
  
],{
  errorLabelCssClass: ["email"],

});

validateForm.addField("#add",[
  {
    rule : "required"
  }
],{
  errorLabelCssClass: ["add"],
  
})

// Add validation for other form fields...

validateForm.onSuccess(function () {
  const formData = new FormData(formEl);
  const formImp = Object.fromEntries(formData.entries());

  const keyName = formImp['firstName'];

  const localValue = localStorage.getItem(keyName);

  if (localValue) {
    // const isLocalValue = JSON.parse(localValue);

   localStorage.clear()

}

  // Save the form data to local storage.
  localStorage.setItem(keyName, JSON.stringify(formImp));
  alert('Your Order Detailes Is Updated')
  
  formEl.reset();
  window.location.href = './success.html';
});
