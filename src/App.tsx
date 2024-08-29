import BackgroundHeading from "./components/BackgroundHeading.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import SideNav from "./components/SideNav.tsx";
import TodoList from "./components/TodoList.tsx";

const App = () => {
  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col">
      <BackgroundHeading />
      <main
        className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] 
      grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
      >
        <Header />
        <TodoList />
        <SideNav />
      </main>
      <Footer />
    </div>
  );
};

export default App;
