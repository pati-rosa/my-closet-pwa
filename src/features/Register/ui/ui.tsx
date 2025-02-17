import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Text from "../../../components/Text";
import { TextSize } from "../../../components/Text/style";
import { Container } from "./style";

interface RegisterUiProps {
  formData: { email: string; password: string };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RegisterUi: React.FC<RegisterUiProps> = ({
  formData,
  onInputChange,
  onSubmit,
}) => {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div>
          <Text variant={TextSize.body}>Email</Text>
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <Text variant={TextSize.body}>Senha</Text>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={onInputChange}
          />
        </div>
        <Button type="submit">Criar conta</Button>
      </form>
    </Container>
  );
};

export default RegisterUi;
