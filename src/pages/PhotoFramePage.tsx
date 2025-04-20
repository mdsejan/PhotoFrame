import { Helmet } from "react-helmet-async";
import { useCallback, useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import frame from "../assets/img/frame.png";

const PhotoFrame = () => {
  const [image, setImage] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startOffset, setStartOffset] = useState({ x: 0, y: 0 });
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) previewFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) previewFile(file);
  };

  const previewFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setImage(reader.result);
        setPosition({ x: 0, y: 0 });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = async () => {
    if (!frameRef.current) return;

    const scale = window.devicePixelRatio || 1;
    const canvas = await html2canvas(frameRef.current, {
      scale, // makes sure download quality is high
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = "framed-photo.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const handleReset = () => {
    setImage(null);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setDragging(true);
    setStartOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    const touch = e.touches[0];
    setDragging(true);
    setStartOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging) return;
      requestAnimationFrame(() => {
        setPosition({
          x: e.clientX - startOffset.x,
          y: e.clientY - startOffset.y,
        });
      });
    },
    [dragging, startOffset]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!dragging) return;
      const touch = e.touches[0];
      requestAnimationFrame(() => {
        setPosition({
          x: touch.clientX - startOffset.x,
          y: touch.clientY - startOffset.y,
        });
      });
    },
    [dragging, startOffset]
  );

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    if (dragging) {
      document.body.style.cursor = "grabbing";
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    dragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return (
    <div className="min-h-[93vh] bg-gray-100 flex lg:items-center justify-center px-4 py-8">
      <Helmet>
        <title>DGHS Reunion25</title>
      </Helmet>

      <div className="w-full max-w-2xl py-8">
        <h1 className="text-3xl font-bold text-center mb-8">📸 Photo Frame</h1>

        {!image && (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border-4 border-dashed border-gray-400 p-6 rounded-lg bg-white text-center cursor-pointer hover:bg-gray-50 transition"
          >
            <p className="text-gray-600 mb-2">Drag & drop your photo here</p>
            <p className="text-sm text-gray-400">or</p>
            <label className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        )}

        {image && (
          <>
            <div
              ref={frameRef}
              className="relative w-[320px] h-[320px] mx-auto overflow-hidden rounded-sm shadow bg-white touch-none"
            >
              {/* Draggable wrapper */}
              <div
                className="absolute top-0 left-0"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  cursor: dragging ? "grabbing" : "grab",
                  touchAction: "none",
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <img
                  src={image}
                  alt="User Upload"
                  className="max-w-none select-none pointer-events-none"
                  style={{
                    height: "320px", // Keep container height fixed
                    width: "auto", // Let width auto adjust based on image
                  }}
                  draggable={false}
                />
              </div>

              {/* Frame stays on top */}
              <img
                src={frame}
                alt="Photo Frame"
                className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
                draggable={false}
              />
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleDownload}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-[#5a52e0] transition"
              >
                Download
              </button>
              <button
                onClick={handleReset}
                className="mt-4 bg-[#F59E0B] text-white px-6 py-2 rounded-md hover:bg-[#d97706] transition"
              >
                Make again
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoFrame;
