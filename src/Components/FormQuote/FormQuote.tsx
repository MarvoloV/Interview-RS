import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Checkbox, Input, Select } from "..";
import { UserData } from "../../store/reducer";
import { getInfoUser } from "../../services/Quote";
import { useContextQuote } from "../../store/QuoteProvider";
import { setUserDataAction } from "../../store/actions";

export const FormQuote = () => {
  const { dispatch } = useContextQuote();
  const navigate = useNavigate();

  const defaultValue: UserData = {
    typeDocument: "DNI",
    document: "",
    cellphone: "",
  };
  const methods = useForm<UserData>({
    mode: "onChange",
    // resolver: useYupValidationResolver(validationSchema),
    defaultValues: defaultValue,
  });
  const calculateAge = (dateOfBirth: string) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const birthMonth = birthDate.getMonth() + 1;

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };
  const onSubmit = async (data: UserData) => {
    try {
      const response = await getInfoUser();
      const age = calculateAge(response.birthDay);
      const userInfo: UserData = {
        typeDocument: data.typeDocument,
        document: data.document,
        cellphone: data.cellphone,
        fullName: response.name + response.lastName,
        age: age,
      };
      dispatch(setUserDataAction(userInfo));
      navigate("/quote");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="row container">
          <Select name={"typeDocument"} />
          <Input label="Nro. de documento" type="number" name={"document"} />
        </div>
        <Input
          label="Celular"
          classNameInputGroup="col-xs-12 radius"
          type="number"
          name={"cellphone"}
        />
        <Checkbox title={"Acepto la Política de Privacidad"} />
        <Checkbox title={"Acepto la Política Comunicaciones Comerciales"} />
        <a href="#" className="link">
          Aplican Términos y Condiciones.
        </a>
        <button className="button primary" type="submit">
          Cotiza aquí
        </button>
      </form>
    </FormProvider>
  );
};
