import Protected from "./component/Protected";
import Public from "./component/Public";

import UseAuth from "./hooks/UseAuth";

function App() {
  const isLogin = UseAuth();
  return isLogin ? <Protected /> : <Public />;
}

export default App;
