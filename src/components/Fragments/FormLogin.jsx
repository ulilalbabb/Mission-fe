import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
            <form action="">
                <InputForm
                label="Username"
                type="text"
                placeholder="Masukkan Username"
                name="username"
                children="Username"
                />
                <InputForm           
                label="Kata Sandi"
                type="password"
                placeholder="Masukkan Kata sandi"
                name="password"
                children="Password"
                />
        </form>   
    )
};

export default FormLogin