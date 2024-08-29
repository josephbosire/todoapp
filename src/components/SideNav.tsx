import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const SideNav = () => {
  const { login, register, isAuthenticated, isLoading, user, logout } =
    useKindeAuth();

  return (
    <section
      className="flex flex-col px-[25px] pt-[18px] pb-[28px] col-[2/3] row-[2/3] bg-[#fffcfg] 
    border-l border-black/[0.08]"
    >
      <AddTodoForm />
      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
            <p> Logged in as {user?.email}</p>
            <Button onClick={logout} buttonType="secondary">
              {" "}
              Logout{" "}
            </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              {" "}
              Login{" "}
            </Button>
            <Button onClick={register} buttonType="secondary">
              {" "}
              Register{" "}
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default SideNav;
