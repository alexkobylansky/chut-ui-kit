import './App.css';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import {useState} from "react";

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (value) => {
    const newMessage = <Message model={{message: value}} />
    setMessages(prevState => ([...prevState, newMessage]));
  };

  return (
    <div className="App">
      <div style={{ position: "relative", height: "500px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList>
              <Message
                model={{
                  message: "Hello my friend",
                  sentTime: "just now",
                  sender: "Joe",
                }}
              />
              {messages}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSendMessage} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
