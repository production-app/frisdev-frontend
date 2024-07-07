import Image from "next/image";

const LoadingComponent = async () => {
  return (
    <div className="fixed inset-0 bg-wokflow_bg">
      <div className="flex items-center justify-center w-full h-full text-white">
        <span className="font-semibold text-sm">
          <Image
            src={"/logo.png"}
            className="animate-pulse"
            alt="bounvnin"
            width={200}
            height={200}
          />
        </span>
      </div>
    </div>
  );
};

export default LoadingComponent;
