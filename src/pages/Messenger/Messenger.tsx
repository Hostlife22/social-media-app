import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { ChatOnline, Conversation, Message, Topbar } from '../../components';
import { AuthContext } from '../../context/AuthContext';
import {
  IArrivalMessage,
  IConversations,
  IMessage,
  IOnlineUsers,
  ISocketUsers,
} from './Messenger.interface';
import styles from './Messenger.module.css';

function Messenger() {
  const [conversations, setConversations] = useState<IConversations[]>([]);
  const [currentChat, setCurrentChat] = useState<IConversations | null>(null);
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [arrivalMessage, setArrivalMessage] = useState<IArrivalMessage | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<IOnlineUsers>([]);
  const socket = useRef<any>();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.current = io('ws://localhost:8900');
    socket.current.on('getMessage', (data: any) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev: any) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit('addUser', user?._id);
    socket.current.on('getUsers', (users: ISocketUsers[]) => {
      setOnlineUsers(user?.followins.filter((f) => users.some((u) => u.userId === f)));
    });
  }, [user]);

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

    const receiverId = currentChat?.members.find((member) => member !== user?._id);

    socket.current.emit('sendMessage', {
      senderId: user?._id,
      receiverId,
      text: newMessage,
    });

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
                  {messages.map((m: any) => (
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
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user?._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
