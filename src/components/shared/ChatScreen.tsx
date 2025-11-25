import { useState } from 'react';
import { ArrowLeft, Send, Paperclip, Smile, MoreVertical } from 'lucide-react';

interface ChatScreenProps {
  onNavigate: (screen: string) => void;
}

const mockMessages = [
  { id: 1, text: 'Hi! Is this product still available?', sender: 'buyer', time: '10:30' },
  { id: 2, text: 'Yes, it is! We have fresh stock today.', sender: 'seller', time: '10:32' },
  { id: 3, text: 'Great! Can I pick it up this afternoon?', sender: 'buyer', time: '10:33' },
  { id: 4, text: 'Absolutely! We\'re open until 6 PM.', sender: 'seller', time: '10:35' },
  { id: 5, text: 'Perfect, I\'ll come around 4 PM. Thanks!', sender: 'buyer', time: '10:36' }
];

export function ChatScreen({ onNavigate }: ChatScreenProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sender: 'buyer',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center gap-4 shadow-sm">
        <button onClick={() => onNavigate('buyer-home')}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white">
            G
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900">Green Valley Farm</h3>
            <p className="text-emerald-600">Online</p>
          </div>
        </div>
        <button>
          <MoreVertical className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {/* Date Separator */}
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 px-4 py-1 rounded-full">
            <span className="text-gray-600">Today</span>
          </div>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'buyer' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                msg.sender === 'buyer'
                  ? 'bg-emerald-600 text-white rounded-br-sm'
                  : 'bg-white text-gray-900 rounded-bl-sm shadow-sm'
              }`}
            >
              <p className="mb-1">{msg.text}</p>
              <span
                className={`text-xs ${
                  msg.sender === 'buyer' ? 'text-emerald-100' : 'text-gray-500'
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-100 px-6 py-4">
        <div className="flex items-center gap-3">
          <button className="text-gray-400">
            <Paperclip className="w-6 h-6" />
          </button>
          <div className="flex-1 bg-gray-50 rounded-full px-4 py-3 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent focus:outline-none"
            />
            <button className="text-gray-400">
              <Smile className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={handleSend}
            className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
