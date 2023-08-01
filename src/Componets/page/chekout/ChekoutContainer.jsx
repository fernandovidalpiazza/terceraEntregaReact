import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Checkout from "./Chekout";
import "./Checkout.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContex";
import { db } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useOrderContext } from "../../context/OrderContext";

const CheckoutContainer = () => {
  const { cart, getTotalPrice } = useContext(CartContext);
  const { setOrderId } = useOrderContext();
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      apellido: "",
      email: "",
    },
    onSubmit: (data) => {
      console.log(data);

      let order = {
        buyer: data,
        items: cart,
        total: getTotalPrice(),
        time: serverTimestamp(),
      };
      let ordersColletions = collection(db, "orders");
      addDoc(ordersColletions, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) => {
        let refDoc = doc(db, "products", elemento.id);
        updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("No te olvides de completar este campo.")
        .min(5)
        .max(50),
      apellido: Yup.string()
        .required("No te olvides de completar este campo.")
        .min(3)
        .max(50),

      email: Yup.string()
        .email("No te olvides de ingresar un mail válido.")
        .required("No te olvides de completar este campo."),
    }),
    validateOnChange: false,
  });

  const navigate = useNavigate();

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
