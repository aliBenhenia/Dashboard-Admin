import Header from "./components/header/Header";
import Leftbar from "./components/leftbar/Leftbar";
import Ecomerce from "./pages/Ecomerce";


function App() {
  return (
    <>
        <Header />
        <Leftbar />
        <div className="container ml-50 h-screen  p-4">
         <Ecomerce />
       </div>
    </>
  );
}

export default App;
