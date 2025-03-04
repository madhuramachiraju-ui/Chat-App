import { useAppStore } from "@/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ContactsContainer from "./components/contacts-container";
import EmptyChatContainer from "./components/empty-chat-container";
import ChatContainer from "./components/chat-container";

const Chat = () => {
  const { userInfo = {} } = useAppStore(); // ✅ Prevent crash if userInfo is undefined
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.profileSetup === false) { // ✅ Safe check for profileSetup
      toast("Please setup profile to continue.");
      navigate("/profile");
    }
  }, [userInfo, navigate]);

  return (
    <div className="flex h-screen bg-[#121212] text-white">
      <ContactsContainer />
      <EmptyChatContainer />
      <ChatContainer />
    </div>
  );
};

export default Chat;