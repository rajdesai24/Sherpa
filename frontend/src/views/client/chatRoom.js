import io from "socket.io-client";
import { to_Decrypt, to_Encrypt } from "./aes.js";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { process } from "../../redux/actions/chat";
import { useDispatch } from "react-redux";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const dispatchProcess = (encrypt, msg, cipher) => {
    dispatch(process(encrypt, msg, cipher));
  };
  const socket = io.connect('/');
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const userDetails = JSON.parse(localStorage.getItem('user'))
  const username = userDetails && userDetails.userName ? userDetails.userName : ''
  const {ChatRoomName} = useParams()

  useEffect(() => {
    socket.on("message", (data) => {
      //decypt the message
      const ans = to_Decrypt(data.text, /* data.username */ 'Mugdha');
      dispatchProcess(false, ans, data.text);
      console.log(ans);
      let temp = messages;
      temp.push({
        userId: data.userId,
        username: /* data.username */ 'Mugdha',
        text: ans,
      });
      setMessages([...temp]);
    });
  }, [socket]);

  const sendData = () => {
    if (text !== "") {
      //encrypt the message here
      const ans = to_Encrypt(text);
      socket.emit("chat", ans);
      setText("");
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  console.log(messages, "mess");

  return (
    <>
      <div className="chat">
        <div className="user-name">
          <h2>
            {username} <span style={{ fontSize: "0.7rem" }}>in {ChatRoomName}</span>
          </h2>
        </div>
        <div className="chat-message">
          {messages.map((i) => {
            if (i.username === username) {
              return (
                <div className="message">
                  <p>{i.text}</p>
                  <span>{i.username}</span>
                </div>
              );
            } else {
              return (
                <div className="message mess-right">
                  <p>{i.text} </p>
                  <span>{i.username}</span>
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </div>
        <div className="send">
          <input
            placeholder="enter your message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendData();
              }
            }}
          ></input>
          <button onClick={sendData}>Send</button>
        </div>
      </div> 
    </>
  );
};

export default ChatRoom;