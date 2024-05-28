const Footer = () => {
  const date = new Date();
  return (
    <div className="w-full h-[50px] flex items-center justify-center bg-white border border-[#eee]">
      <h1>© {date.getFullYear()}. FRISOPS PORTAL</h1>
    </div>
  );
};

export default Footer;
