const Footer = () => {
  const date = new Date();
  return (
    <div className="w-full h-[50px] absolute bottom-0 left-0 right-0 flex items-center justify-center bg-white border border-[#eee] text-sm text-gray-400">
      <h1>© {date.getFullYear()}. FRISOPS PORTAL</h1>
    </div>
  );
};

export default Footer;
