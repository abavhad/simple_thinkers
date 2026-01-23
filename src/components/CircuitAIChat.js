import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

function CircuitAIChat({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm Nexus Bot, your Campus Guide. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate Circuit AI API call
    // In production, this would call the actual Circuit AI API
    setTimeout(() => {
      const botResponse = generateBotResponse(userMessage.text);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        text: botResponse,
        timestamp: new Date()
      }]);
      setIsLoading(false);
      scrollToBottom();
    }, 1000);
  };

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Campus-related responses
    if (input.includes('vegetarian') || input.includes('vegan') || input.includes('food') || input.includes('menu')) {
      return "Today's vegetarian specials at The Main Canteen include:\n• Ahi Tuna Poké with Organic Black Rice & Mango\n• Truffle Wild Mushroom Flatbread\n• Seasonal Garden Salad with Quinoa\n\nAll locations are open until 7:00 PM. Would you like directions to any specific dining area?";
    }
    
    if (input.includes('parking') || input.includes('garage')) {
      return "Current parking availability:\n• North Garage (P1): 42% full - Good availability\n• South Garage (P2): 89% full - Limited spaces\n\nEV charging: 4 stations available at P1, Level 2. Need help finding a spot?";
    }
    
    if (input.includes('building') || input.includes('bgl')) {
      return "Here are the main buildings:\n• BGL 12: Executive Briefing Center, Innovation Lab\n• BGL 13: Collaborative Hub, Barista Station\n• BGL 14: Creative Studio, Podcasting Wing\n• BGL 15: DevX Experience Zone, Grand Atrium\n• BGL 16: Gaming HQ, Global Food Court\n• BGL 18: Customer Experience Center, Rooftop Garden\n\nWhich building would you like to know more about?";
    }
    
    if (input.includes('event') || input.includes('meeting') || input.includes('symposium')) {
      return "Upcoming campus events:\n• Annual Tech Symposium - Live now! Main Auditorium, ending in 1h 45m\n• Engineering Town Hall - Oct 12, 10:00 AM (Virtual & BGL 15 Floor 2)\n\nWould you like to RSVP or get more details?";
    }
    
    if (input.includes('wellness') || input.includes('gym') || input.includes('fitness')) {
      return "Wellness Center (BGL 17) features:\n• State-of-the-art gym equipment\n• Olympic-sized pool\n• Yoga sanctuary\n• Open 6 AM - 10 PM daily\n\nNap Pods are available at BGL 12, Level 3. Bookable via Employee App. Need help booking?";
    }
    
    if (input.includes('shuttle') || input.includes('transport')) {
      return "Cisco Shuttle Service:\n• Route A: Downtown Loop - Runs every 15 minutes\n• Next departure: In 8 minutes\n• Stops at all main building entrances\n\nReal-time tracking available in the Employee App. Need route details?";
    }
    
    if (input.includes('help') || input.includes('support')) {
      return "I can help you with:\n• Campus navigation and building information\n• Dining options and menus\n• Parking and transportation\n• Events and activities\n• Wellness facilities\n• Room reservations\n\nWhat would you like to know?";
    }
    
    // Default response
    return "I understand you're asking about: \"" + userInput + "\". Let me help you with that. For campus-specific questions, I can assist with:\n• Dining and food options\n• Building locations and amenities\n• Parking and transportation\n• Events and activities\n• Wellness facilities\n\nCould you rephrase your question or ask about one of these topics?";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col h-[600px] max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl fill-icon">smart_toy</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Nexus Bot</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Campus Guide</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.type === 'bot' && (
                <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
                </div>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  message.type === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                <p className={`text-[10px] mt-1.5 ${
                  message.type === 'user'
                    ? 'text-white/70'
                    : 'text-slate-500 dark:text-slate-400'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.type === 'user' && (
                <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-300 text-sm">person</span>
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-sm">smart_toy</span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about the campus..."
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-2 text-center">
            Powered by Circuit AI • Try: "Show me today's vegetarian specials"
          </p>
        </form>
      </div>
    </div>
  );
}

export default CircuitAIChat;
