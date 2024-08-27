import { Link } from "react-router-dom";
import "./chatList.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "./modal.css";

const ChatList = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("modal-active");
  } else {
    document.body.classList.remove("modal-active");
  }
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });
  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="container">
              <h3>Free Plan</h3>
              <h5>USD 0$/month</h5>
              <button id="current">Your current plan</button>
              <ul>
                <li>Assistance with writing, problem solving and more</li>
                <li>Analyzing images</li>
                <li>Conversation</li>
                <li>Checking code for mistakes</li>
                <li>Plan your day or vacation</li>
              </ul>
            </div>
            <div className="container">
              <h3>Plus</h3>
              <h5>USD 20$/month</h5>
              <button id="plus">Upgrade to Plus</button>
              <ul>
                <li>Assistance with writing, problem solving and more</li>
                <li>Analyzing images</li>
                <li>Conversation</li>
                <li>Checking code for mistakes</li>
                <li>Plan your day or vacation</li>
                <li>Up to 5x more messages</li>
                <li>Admin console for workspace management</li>
              </ul>
            </div>
            <div className="container">
              <h3>Team</h3>
              <h5>USD 25$ per person/month</h5>
              <button id="team">Upgrade to Team</button>
              <ul>
                <li>Assistance with writing, problem solving and more</li>
                <li>Analyzing images</li>
                <li>Conversation</li>
                <li>Checking code for mistakes</li>
                <li>Plan your day or vacation</li>
                <li>Up to 5x more messages</li>
                <li>Admin console for workspace management</li>
                <li>Team data excluded from training by default.</li>
              </ul>
            </div>
            <button
              className="close-modal"
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
            >
              <img src="../../../public/close.png" alt="" />
            </button>
          </div>
        </div>
      )}
      <div className="chatList">
        <span className="title">DASHBOARD</span>
        <Link to="/dashboard">Create a new chat</Link>
        <Link to="/"> Explore Andrej AI</Link>
        <Link to="https://github.com/andrejshuma">Contact</Link>
        <hr />
        <span className="title">RECENT CHATS</span>
        <div className="list">
          {isPending
            ? "Loading..."
            : error
            ? "Something went wrong... "
            : data?.map((chat) => (
                <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                  {chat.title}
                </Link>
              ))}
        </div>
        <hr />
        <div className="upgrade">
          <img src="/logo.png" alt="" />
          <div className="texts">
            <span onClick={toggleModal} style={{ cursor: "pointer" }}>
              Upgrade to Andrej AI Pro
            </span>
            <span onClick={toggleModal} style={{ cursor: "pointer" }}>
              Get unlimited access to all features
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatList;
