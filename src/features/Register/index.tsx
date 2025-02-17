import { useState } from "react";
import RegisterUi from "./ui";
import { useNavigate } from "react-router-dom";

import { signInUser } from "../../utils/firebase";

export const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

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
        // const uid = userCredential.user.uid;
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
