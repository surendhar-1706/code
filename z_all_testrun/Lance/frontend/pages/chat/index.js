import React, { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";
import { Formik } from "formik";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
function ChatHome() {
  const room_name = "cool";
  const [messages, setmessages] = useState([]);
  // const { data, error } = useSWR(
  //   "http://localhost:8000/chat/api/last_ten/",
  //   fetcher,
  //   { dedupingInterval: 10 }
  // );
  const [data, setdata] = useState();

  const client = new w3cwebsocket(
    "ws://127.0.0.1:8000/ws/chat/" + room_name + "/"
  );
  useEffect(async () => {
    console.log("useEffect ran from chat page");
    const fetched_data = await fetch(
      "http://localhost:8000/chat/api/last_ten/"
    );
    const json_data = await fetched_data.json();
    const results = json_data.results.reverse();
    setdata(json_data);
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    client.onmessage = async (chat_message) => {
      const dataFromServer = JSON.parse(chat_message.data);
      console.log("got reply! ", dataFromServer);

      if (dataFromServer) {
        setmessages((messages) => [...messages, dataFromServer.message]);
      }
    };
  }, []);
  return (
    <div>
      <h6>Room Name : {room_name}</h6>
      {data &&
        data.results.map((message) => {
          return (
            <div>
              <div key={message.id}>{message.content}</div>
            </div>
          );
        })}
      {messages &&
        messages.map((message) => {
          return <div key={message.id}>{message}</div>;
        })}

      <Formik
        initialValues={{ message: "" }}
        onSubmit={async (values, actions) => {
          console.log(values);
          const wow = await client.send(
            JSON.stringify({
              type: "chat_message",
              message: values.message,
              command: "fetch_messages",
            })
          );
          actions.resetForm({
            values: {
              message: "",
            },
          });
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.message}
              name="message"
            />
            {props.errors.message && (
              <div id="feedback">{props.errors.message}</div>
            )}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default ChatHome;
