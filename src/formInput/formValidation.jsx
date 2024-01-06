import * as yup from 'yup';

export const singUpValidation = yup.object({
  name: yup.string().min(2).required("Please enter the name of the product"),
  quantity: yup.number().min(1000, "Please enter more than 1000 products").required("Quantity is required"),
  company: yup.string().min(2).required("Please enter a valid company"),
  price: yup.number().min(1).required("Please enter a valid price"),
  type: yup.string().required("Please select the type of product"),
});
