"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css';


const ChatForum = ({ clerkUser, slug }) => {
  const apiKey = '92bk8tmghth8';
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  function changeSlugToName(slug) {
    return slug
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join back into a single string
  }

  const user = {
    id: userId,
    name: userName,
    image: `https://getstream.io/random_png/?name=${userName}`,
  };
  const [channel, setChannel] = useState();
  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  });

  useEffect(() => {
    if (!client) return;

    const channel = client.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: changeSlugToName(slug),
    });

    setChannel(channel);
  }, [client]);

  if (!client) return <div>Setting up client & connection...</div>;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

export default ChatForum