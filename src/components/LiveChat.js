import React from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessages, generateRandomNames } from "../utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // API POLLING
      // Fetch the data from API and dispatch to action
      //   console.log("API POLLING");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessages(10) + " Namaste react!!",
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 w-full h-[500px] border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        Live Chat
        {/* IMPORTANT: When using live data then use ID for keys and NOT indexes. */}
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          dispatch(
            addMessage({
              name: "Chinmayee",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full p-2 ml-2 border border-black "
      >
        <input
          type="text"
          className="w-96"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 py-1 mx-2 rounded-md bg-green-800 text-white font-semibold">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
