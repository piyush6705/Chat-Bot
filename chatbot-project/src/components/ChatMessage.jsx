import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/me.png';
import './ChatMessage.css';
export  function ChatMessage ({message, sender} ) {
      
        return (
          <div className={
            sender ==='user' 
              ? 'chat-message-user' 
              : 'chat-message-robot'
          }>
            {sender === 'bot' && (
              <img src={RobotProfileImage}  className="bot-profile"/>
            )}
            <div className="chat-message-text">
             {message}
            </div>
            {sender === 'user' && (
              <img src={UserProfileImage} className="user-profile" />
            )}
          </div>
        );
      }