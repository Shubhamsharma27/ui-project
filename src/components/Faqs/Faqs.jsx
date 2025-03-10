const Faqs = () => {
  const faqs = [
    "1. How is Media+ beneficial for Marketers?",
    "2. How does Media+ improve user retention, engagement & help in generating more leads?",
    "3. How does Media+ result in better brand visibility?",
    "4. How does Media+ simplify video content management?",
    "5. How does Media+ use AI to improve content discovery?",
    "6. What kind of analytics does Media+ provide?",
    "7. Can Media+ integrate with my existing MAP tools like Hubspot?",
    "8. How many videos can I host in one Media+ site?",
  ];

  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto py-10">
        <h2 className="text-center text-orange-500 text-lg mb-2">
          Our top-list of commonly asked questions
        </h2>
        <h1 className="text-center text-4xl font-bold mb-8">FAQs</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg p-4 flex justify-between items-center"
            >
              <span>{faq}</span>
              <i className="fas fa-plus"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
