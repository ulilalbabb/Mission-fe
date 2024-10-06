import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";
import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
    const { title, type} = props;
    return (
    <div className="flex justify-center items-center bg-cover bg-center h-[100vh] bg-login">    
        <div className="bg-form border w-[85%] sm:w-[60%] md:w-[50%] lg:w-[30%] text-white rounded-3xl border-none p-6 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <img src="../assets/Logo.png" alt="" className="mb-6 mx-auto" width={150}/>
            <h1 className="text-3xl font-bold mb-2 text-center">{title}</h1>
            <p className="text-center text-md mb-5 ">{type === "login" ? "Selamat datang kembali!" : "Selamat datang!"}</p>
            {type === "login" ? <FormLogin /> : <FormRegister />}
            <div className="mt-4 flex flex-row text-sm w-full text-start font-light">
                <div className="w-full flex justify-between">
                    <div className="relative text-sm lg:text-sm text-white">
                        {type === "login" ? "Belum punya akun?" : "Sudah punya akun?"}
                        {type === "login" && (
                            <Link to="/register" className="hover:underline font-semibold">
                            Daftar
                            </Link>
                        )}
                        {type === "register" && (
                            <Link to="/login" className="hover:underline font-semibold">
                            Masuk
                            </Link>
                        )}
                    </div>
                    {type === "login" ? (
                        <Link href="" className="hover:underline font-semibold text-white">
                            Lupa kata sandi?
                        </Link>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <Button variant="w-full bg-button hover:bg-white hover:text-button rounded-3xl py-2 lg:py-3 text-sm mt-6" children={type === "login" ? <Link to="/homepage">Masuk</Link> : "Daftar"} />
            <p className="text-center my-1.5">atau</p>
            <Button 
                variant="w-full flex justify-center items-center gap-4 bg-transparent hover:bg-gray-500 border rounded-3xl py-2 lg:py-3 text-sm" 
                children={
                    <>
                    <img src="../assets/google.png" alt="" />
                    {type === "login" ? "Masuk dengan google" : "Daftar dengan google"}
                    </>
                }>

            </Button>
        </div>
    </div>
    )
}

export default AuthLayout