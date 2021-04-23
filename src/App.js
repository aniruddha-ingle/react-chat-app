import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="a4183f34-59e5-4795-9341-2e1bcbdac042"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
