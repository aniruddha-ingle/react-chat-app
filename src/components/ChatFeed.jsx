import React, { useRef, useEffect } from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat]; //the and operator ensures that we dont get a null error
  const messagesEndRef = useRef(null);
  useEffect(() => {
    scrollToBottom();
  }, [props]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessagee = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessagee ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marinRight: isMyMessagee ? "18px" : "0px",
              marginLeft: isMyMessagee ? "0px" : "68px",
            }}
          >
            Read Receipts
          </div>
          <div ref={messagesEndRef} />
        </div>
      );
    });
  };
  renderMessages();

  if (!chat)
    return (
      <div
        style={{
          fontSize: "4rem",
          textAlign: "centre",
          marginTop: "50%",
          marginLeft: "25%",
        }}
        className="chat-title"
      >
        Come on! Get Chatty!
      </div>
    );

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">
          {chat.title}
          <div className="chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username}`)}
          </div>
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
