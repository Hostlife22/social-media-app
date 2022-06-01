import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ChatOnline, Conversation, Message, Topbar } from '../../components';
import { AuthContext } from '../../context/AuthContext';
import { IConversations, IMessage } from './Messenger.interface';
import styles from './Messenger.module.css';

function Messenger() {
  const [conversations, setConversations] = useState<IConversations[]>([]);
  const [currentChat, setCurrentChat] = useState<IConversations | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const { user } = useContext(AuthContext);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get<IConversations[]>(`/api/conversations/${user?._id}`);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getConversations();
  }, [user?._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get<IMessage[]>(`/api/messages/${currentChat?._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const message = {
      sender: String(user?._id),
      text: newMessage,
      conversationId: String(currentChat?._id),
    };

    try {
      const res = await axios.post<IMessage>('/api/messages', message);
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <Topbar />
      <div className={styles.messenger}>
        <div className={styles.chatMenu}>
          <div className={styles.chatMenuWrapper}>
            <input placeholder="Search for friends" type="text" className={styles.chatMenuInput} />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)} key={c._id}>
                <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.chatBox}>
          <div className={styles.chatBoxWrapper}>
            {currentChat ? (
              <>
                <div className={styles.chatBoxTop}>
                  {messages.map((m) => (
                    <div key={String(m.createdAt)} ref={scrollRef}>
                      <Message message={m} own={m.sender === user?._id} />
                    </div>
                  ))}
                </div>
                <div className={styles.chatBoxBottom}>
                  <textarea
                    className={styles.chatMessageinput}
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  />
                  <button className={styles.chatSubmitButton} onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className={styles.noConversationText}>Open a conversation to start a char</span>
            )}
          </div>
        </div>
        <div className={styles.chatOnline}>
          <div className={styles.chatOnlineWrapper}>
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
