import ScreenContainer from "./components/ScreenContainer";
import { GlobalProvider } from "../context/GlobalContext";
import { WebSocketProvider } from "../context/WebSocketContext";

export default function Home() {
  return (
    <GlobalProvider>
      <WebSocketProvider>
        <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen md:p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-ltbGreen">
          <ScreenContainer />
        </div>
      </WebSocketProvider>
    </GlobalProvider>
  );
}
