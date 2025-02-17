import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import RegisterUi from "./ui";

import { signInUser } from "../../utils/firebase/signIn";

export const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInUser(
        formData.email,
        formData.password,
      );
      if (userCredential) {
        dispatch({ type: "SET_USER", payload: userCredential.user.uid });
        alert("Usuário criado com sucesso!");
        handleNavigation("/upload-photos");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
    console.log(formData);
  };

  return (
    <RegisterUi
      formData={formData}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};
