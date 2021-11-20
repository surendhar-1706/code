import React, { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";
import { Formik } from "formik";
import useSWR from "swr";
import Layouttwo from "../../components/Layout/Layouttwo";
const fetcher = (url) => fetch(url).then((r) => r.json());
function ChatHome() {
  // const room_name = "cool";
  const user = "32";
  const [messages, setmessages] = useState([]);
  // const { data, error } = useSWR(
  //   "http://localhost:8000/chat/api/last_ten/",
  //   fetcher,
  //   { dedupingInterval: 10 }
  // );
  const [data, setdata] = useState();

  // const client = new w3cwebsocket(
  //   "ws://127.0.0.1:8000/ws/chat/" + room_name + "/"
  // );

  useEffect(async () => {
    const token = localStorage.getItem("access_token");
    console.log("useEffect ran from chat page");
    const fetched_data = await fetch(
      "http://localhost:8000/chat/api/last_ten/",
      {
        headers: {
          Authorization: "JWT " + localStorage.getItem("access_token"),
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );

    const json_data = await fetched_data.json();
    console.log("priniting json_data", json_data);
    const results = json_data.results.reverse();
    setdata(json_data);
    const auth_token = token;
    const client = new w3cwebsocket(
      "ws://127.0.0.1:8000/ws/chat/" + user + "/" + auth_token + "/"
    );
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
    <Layouttwo>
      <div>
        {/* <h6>Room Name : {}</h6> */}
        {data &&
          data.results.map((message) => {
            return (
              <div className="flex items-center " key={message.id}>
                <div>[{message.name}]</div>
                <div>{message.content}</div>
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
                token: localStorage.getItem("access_token"),
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
    </Layouttwo>
  );
}

export default ChatHome;
