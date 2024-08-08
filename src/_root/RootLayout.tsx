import AppHeader from "@/components/AppHeader"
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {

  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0);

  // listen to scroll event
  useEffect(() => {
    const handleScroll = () => {
      const position = containerRef.current?.scrollTop;
      setScrollPosition(position || 0);
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen overflow-y-auto" ref={containerRef}>
        <AppHeader scrollPosition={scrollPosition} />
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout