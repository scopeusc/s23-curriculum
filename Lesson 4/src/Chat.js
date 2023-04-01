  import React from "react";
  import { useState, useEffect, useRef } from "react";
  import { collection, onSnapshot, query, where, addDoc, serverTimestamp } from 'firebase/firestore';
  import { db } from './firebase';

  const Chat = ({ localUser, otherUser }) => {
    
    // state
    const [allMessages, setAllMessages] = useState([]);

    // used to identify which messages were sent between these two users
    const parties = [localUser.email, otherUser.email]
    parties.sort((a, b) => a.localeCompare(b))
    const partyId = parties.join('¡')
    
    // refs
    const inputEl = useRef(null);

    // subscribe to snapshots of message data for the currently selected conversation
    useEffect(() => {
      if(otherUser === null)
          return;

      // set up a query to get chats between these users
      const chatsCol = collection(db, "chats");
      const q = query(chatsCol, where("partyId", "==", partyId));

      // snapshot of chats from this user
      const unsubscribe = onSnapshot(q, snapshot => {
        const data = snapshot.docs.map(change => change.data());
        data.sort((a, b) => a.timestamp - b.timestamp);
        setAllMessages(data);
      });

      // unsubscribe from these listeners when the chat changes to a different user
      return unsubscribe;
  }, [otherUser])

  const sendMessage = () => {
    // grab the message from the input box
    const msgContent = inputEl.current.value;

    // message data that we need to store in our DB
    const msg = {
      partyId,
      sender: localUser.email,
      recipient: otherUser.email,
      content: msgContent,
      timestamp: serverTimestamp()
    }

    const chatCol = collection(db, "chats");
    addDoc(chatCol, msg);

    // clear out the input box
    inputEl.current.value = "";
  }

  return (
    <div className="Chat">
      <h2>Chatting with {otherUser.name}</h2>
      
      {allMessages.map((msg, index) => {
        return (
          <div key={index}>
            <p>
              <strong>{msg.sender}</strong>
              <br/>
              {msg.content}
            </p>
          </div>
        )
      })}

      <input ref={inputEl} type="text"/>
      <button onClick={sendMessage}>Send</button>
    </div>
  )

  }

  export default Chat;
