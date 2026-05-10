import Main from "@/layouts/Main";
import useDarkMode from "@/hooks/useDarkMode";

const App = () => {
  useDarkMode();
  return (
    <Main />
  )
}

export default App;