import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

import Vascular, {
  Language,
  SFMC,
  InboxMessage,
  MessageAction,
  MessageData,
  MessageMedia,
  Provider,
  Type,
} from "vascular-web";
import "./App.css";

const appKey = "OWZkZjZhM2UtMTIyMy00YWY1LWEzOTItYjIwY2E1NDk0MDBj";
const userId = "112233456";

const vascular = new Vascular(appKey, userId, []);

function CreateUser() {
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await vascular.createUser(userId);
      console.log("res", res);
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create user</h1>
      <input
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="submit">Create user</button>
    </form>
  );
}

function GetUser() {
  const handleGetUser = async () => {
    try {
      const user = await vascular.getUser();
      console.log("user", user);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={handleGetUser}>Get user</button>;
}

function Inbox() {
  const handleGetInbox = async () => {
    try {
      const inbox = await vascular.inbox();
      console.log("inbox", inbox);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={handleGetInbox}>Get inbox</button>;
}

function InboxNext() {
  const handleGetInbox = async () => {
    try {
      const inbox = await vascular.inboxNext();
      console.log("next inbox", inbox);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={handleGetInbox}>Get next inbox</button>;
}

function GetMessageById() {
  const getMessageById = async () => {
    try {
      const message = await vascular.getMessageById(
        "9169acf2-74d7-4a90-bc0f-0e835e85f19c"
      );
      console.log("message by id", message);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={getMessageById}>Get message by id</button>;
}

function ReadMessages() {
  const readMessages = async () => {
    try {
      const message = await vascular.readMessages([
        "9169acf2-74d7-4a90-bc0f-0e835e85f19c",
      ]);
      console.log("read messages", message);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={readMessages}>Read messages</button>;
}

function OpenMessages() {
  const openMessages = async () => {
    try {
      const message = await vascular.readMessages([
        "9169acf2-74d7-4a90-bc0f-0e835e85f19c",
      ]);
      console.log("open messages", message);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={openMessages}>Open messages</button>;
}

function DeleteMessage() {
  const deleteMessage = async () => {
    try {
      const message = await vascular.deleteMessage(
        "3881c768-6f3d-4335-870d-14d38e3e0389"
      );
      console.log("delete message by id", message);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={deleteMessage}>Delete message by id</button>;
}

function AddTags() {
  const addTags = async () => {
    try {
      const tags = await vascular.addTags(["one", "two"]);
      console.log("add tags", tags);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={addTags}>Add tags</button>;
}

function GetTags() {
  const getTags = async () => {
    try {
      const tags = await vascular.tags();
      console.log("get tags", tags);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={getTags}>Get tags</button>;
}

function DeleteTags() {
  const deleteTags = async () => {
    try {
      const tags = await vascular.deleteTags(["one"]);
      console.log("delete tags", tags);
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={deleteTags}>Delete tags</button>;
}

function App() {
  return (
    <div>
      <CreateUser />
      <hr />
      <GetUser />
      <hr />
      <Inbox />
      <hr />
      <InboxNext />
      <hr />
      <GetMessageById />
      <hr />
      <ReadMessages />
      <hr />
      <OpenMessages />
      <hr />
      <DeleteMessage />
      <hr />
      <AddTags />
      <hr />
      <GetTags />
      <hr />
      <DeleteTags />
    </div>
  );
}

export default App;
