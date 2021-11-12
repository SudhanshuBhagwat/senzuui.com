const BlockQuote = ({ children }) => {
  return (
    <blockquote className="px-4 py-2 bg-gray-200 inline-flex space-x-2 flex items-center rounded">
      <span className="text-gray-500 text-2xl font-bold">|</span>
      {children}
    </blockquote>
  );
};

export default BlockQuote;
