import { Link } from "react-router-dom";
import { Caja } from "../components/ui/Caja";
import { OfficialCard2 } from "../components/ui/OfficialCard2";
import fase from "../images/fase.png";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";
import logoGumppy from "../images/logoGumppy.png";

function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);
  return (
    <>
      <Caja>
        <OfficialCard2>
          <div className="grid grid-cols-3 gap-6 items-center">

            <Card>
              {loginErrors.map((error, i) => (
                <Message message={error} key={i} />
              ))}
              <div className="flex-shrink-0">
                <img src={logoGumppy} width="200" alt="Gumppy Logo" className="py-5" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="email">Email:</Label>
                <Input
                  label="Write your email"
                  type="email"
                  name="email"
                  placeholder="email@dominio.tld"
                  {...register("email", { required: true })}
                />
                <p>{errors.email?.message}</p>

                <Label htmlFor="password">Contraseña:</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Escribe tu contraseña"
                  {...register("password", { required: true, minLength: 6 })}
                />
                <p>{errors.password?.message}</p>

                <Button>Iniciar Sesión</Button>
              </form>

              <p className="flex gap-x-2 justify-between">
                Aún no tienes cuenta? <Link to="/register" className="text-[#ffffff]">Crear cuenta</Link>
              </p>
            </Card>

            {/* Línea blanca vertical */}
            <div className="h-4/5 w-px bg-white mx-auto"></div>

       
              <img src={fase} alt="fase" className="max-w-xs h-auto -mx-12 object-contain" />
            



          </div>
        </OfficialCard2>
      </Caja>


    </>
  );
}

export default HomePage;
