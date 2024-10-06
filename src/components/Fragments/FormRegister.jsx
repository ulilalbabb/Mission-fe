import InputForm from "../Elements/Input";

const FormRegister = () => {
    return (
            <form action="">
                <InputForm
                label="Username"
                type="text"
                placeholder="Masukkan Username"
                name="Username"
            />
            <InputForm
                label="Kata Sandi"
                type="password"
                placeholder="Masukkan Kata sandi"
                name="password"
            />
            <InputForm
                label="Konfirmasi Kata Sandi"
                type="password"
                placeholder="Masukkan Kata sandi"
                name="confirmPassword"
            />

        </form>   
    )
};

export default FormRegister