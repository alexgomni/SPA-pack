function insertThankYouScript(transactionId, saleValue, products) {
  const script = document.createElement('script');
  script.innerHTML = `_mktz.push(['_Goal','sale',${saleValue}, {transaction:'${transactionId}'}]);`;
  document.head.appendChild(script);

  return function cleanup() {
    document.head.removeChild(script);
  };
}

export default insertThankYouScript;