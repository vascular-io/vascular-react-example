import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

import Vascular, { Language, 
  InboxMessage, 
  MessageAction, 
  MessageMedia,
  MessageData, 
  Provider, 
  Type, 
  SFMC,
  } from 'vascular-web';
import './App.css';

const appKey = "<app-key>";
const userId = "<user-id>";
function Message(props: any) {
  const vascular = new Vascular(appKey, userId, [Language.ENUS, Language.NB]);
  const [inboxMessageData, setinboxMessageData] = useState<any>({});
  const [inboxMessage, setinboxMessage] = useState<any>({});
  useEffect(() => {
    async function getMessageById() {
      const response = await vascular.getMessageById(props.messageId);
      setinboxMessage(response.getInboxMessage());
      const message = response.getInboxMessage();
      const messageData = message.messageData[Language.NB];
      setinboxMessageData(messageData);
    }
    getMessageById();
  }, [])

  return (
    <div>
      message ID: <span> {inboxMessage.uuid} </span>
      message title: <p> {inboxMessageData.title} </p>
      message body: <p> {inboxMessageData.body} </p>
    </div>
  )
}
function App() {
  const vascular = new Vascular(appKey, userId, [Language.ENUS, Language.NB]);
  const [inbox, setInbox] = useState<any[]>([]);
  useEffect(() => {
    async function getInboxMsgs() {
      const response = await vascular.inbox();
      setInbox(response.getMessagesList());
    }
    getInboxMsgs();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {inbox.map(msg => {
          const message = msg.getInboxMessage();
          const messageData = message.messageData[Language.NB];
          return (
            <div key={message.uuid}>
              title: <p>{messageData.title}</p>
              body: <p>{messageData.body}</p>

              <div>
                <label>Get message by id</label>
                <Message messageId={message.uuid} />
              </div>

            </div>
          );

        })}

      </div>

    </div>
  );
}

export default App;
