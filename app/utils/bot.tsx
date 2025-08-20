"use client"
import { useEffect } from 'react';

const ChatbotIframe = () => {
  useEffect(() => {
    const iframe = document.createElement("iframe") as HTMLIFrameElement;

    const iframeStyles = (styleString: string | any) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 30px;
        right: 30px;
        border: none;
      }
    `);

    iframe.src = "https://divesai.vercel.app/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://divesai.vercel.app") return;
      
      try {
        const dimensions = JSON.parse(e.data);
        iframe.width = dimensions.width;
        iframe.height = dimensions.height;

        // Check if contentWindow is not null before sending the postMessage
        if (iframe.contentWindow) {
          iframe.contentWindow.postMessage("fbf708ee-b5eb-4c7e-98e2-58eefb217d7b", "https://divesai.vercel.app/");
        }
      } catch (error) {
        console.error("Error processing message:", error);
      }
    };

    window.addEventListener("message", handleMessage);

    // Clean up event listener and remove iframe on unmount
    return () => {
      document.body.removeChild(iframe);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return null; // No JSX output as the iframe is created via JavaScript
};

export default ChatbotIframe;
