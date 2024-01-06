import { useFormik} from "formik";
import { singUpValidation } from "./formValidation";
import {  useContext } from "react";
import axios from "axios";
import { ProductContext } from "../showProduct/ProductContext";
import { v4 as uuidv4 } from 'uuid';

const BasicForm = () => {
  const { AddProduct } = useContext(ProductContext);
  const initialData = {
    name: "",
    company: "",
    quantity: "",
    type: "",
    image: "",
    price: "",
  };
  const { values, handleBlur, handleChange, handleSubmit, errors, resetForm } =
    useFormik({
      initialValues: initialData,
      validationSchema: singUpValidation,
      onSubmit: (value) => {
        const myInputData = {
          id:uuidv4,
          name: values.name,
          company: values.company,
          quantity: values.quantity,
          type: values.type,
          image: values.image,
          price: values.price,
        };
        const AddNewProduct = async () => {
          try {
            const response = await axios.post(
              "http://localhost:5000/products",
              myInputData
            );
            AddProduct(response);
            resetForm();
          } catch (erorr) {
            console.error(error);
          }
        };
        AddNewProduct();
      },
    });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    
        <form onSubmit={handleSubmit} action="">
          <div className="form-group">
            <label htmlFor="Email" className="form-label mt-4">
              name of product
            </label>
            <input
              name="name"
              type="name"
              className={`form-control ${
                errors.name ? "is-invalid" : "is-valid"
              }`}
              id="Email"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
              placeholder="Enter email"
            ></input>
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>
          <div class="form-group">
            <label htmlFor="Email" className="form-label mt-4">
              company
            </label>
            <input
              name="company"
              type="company "
              className={`form-control ${
                errors.company ? "is-invalid" : "is-valid"
              }`}
              id="Email"
              onChange={handleChange}
              value={values.company}
              onBlur={handleBlur}
              placeholder="Enter the company of"
            />
            {errors.company && (
              <div className="invalid-feedback">{errors.company}</div>
            )}
          </div>
          <div class="form-group">
            <label htmlFor="quantity" className="form-label mt-4">
              quantity
            </label>
            <input
              name="quantity"
              type="quantity"
              className={`form-control ${
                errors.quantity ? "is-invalid" : "is-valid"
              }`}
              id="Password"
              onChange={handleChange}
              value={values.quantity}
              onBlur={handleBlur}
              placeholder="Password"
              autocomplete="off"
            />
            {errors.quantity && (
              <div className="invalid-feedback">{errors.quantity}</div>
            )}
          </div>
          <div class="form-group">
            <label htmlFor="quantity" className="form-label mt-4">
              Price
            </label>
            <input
              name="price"
              type="price"
              className={`form-control ${
                errors.quantity ? "is-invalid" : "is-valid"
              }`}
              id="Password"
              onChange={handleChange}
              value={values.price}
              onBlur={handleBlur}
              placeholder="enter the price"
              autocomplete="off"
            />
            {errors.price && (
              <div className="invalid-feedback">{errors.price}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Select1" className="form-label mt-4">
              Type of product
            </label>
            <select
              name="type"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.type}
              className={`form-select ${
                errors.type ? "is-invalid" : "is-valid"
              }`}
              id="Select1"
            >
              <option value="" disabled>
                Select product type
              </option>
              <option value="tv">TV</option>
              <option value="laptop">Laptop</option>
              <option value="phone">Phone</option>
            </select>
            {errors.type && (
              <div className="invalid-feedback">{errors.type}</div>
            )}
          </div>

          <div class="form-group" style={{ marginBottom: "10px" }}>
            <label htmlFor="Password" className="form-label mt-4 ">
              Image
            </label>
            <input
              name="image"
              type="file"
              className={`form-control ${
                errors.image ? "is-invalid" : "is-valid"
              }`}
              id="image"
              onChange={handleChange}
              value={values.image}
              onBlur={handleBlur}
              placeholder="Password"
              autocomplete="off"
            />
            {errors.image && (
              <div className="invalid-feedback">{errors.image}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
  
    </div>
  );
};

export default BasicForm;
