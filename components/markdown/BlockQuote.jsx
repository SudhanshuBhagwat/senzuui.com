const BlockQuote = ({ children }) => {
  return (
    <blockquote className="px-4 bg-gray-200 space-x-2 flex items-center rounded">
      {children}
    </blockquote>
  );
};

export default BlockQuote;
