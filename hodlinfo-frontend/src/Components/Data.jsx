import React, { useState, useEffect } from "react";

function Data() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    fetch("https://holdlinfo-backend.onrender.com/api/dbtickers")
      .then((response) => response.json())
      .then((data) => {
        setTickers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const diff = (ticker) => {
    let diff = ticker.sell - ticker.buy;
    let ans = (diff * 100) / ticker.buy;
    return ans.toFixed(2);
  };

  const Savings = (ticker) => {
    let diff = ticker.sell - ticker.buy;
    let ans = diff * ticker.volume;
    return ans.toFixed(2);
  };

  const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    return formatter.format(value);
  };

  return (
    <div className="flex justify-center m-5 w-full overflow-auto">
      <table className="w-full text-2xl border-spacing-y-5 border-separate text-center">
        <thead className="text-gray-400">
          <tr>
            <th>
              <h4 className="text-center font-bold">#</h4>
            </th>
            <th>
              <h4 className="text-center font-bold">Platform</h4>
            </th>
            <th>
              <h4 className="text-center font-bold">Last Traded Price</h4>
            </th>
            <th>
              <h4 className="text-center font-bold">Buy And Sell Price</h4>
            </th>
            <th>
              <h4 className="text-center font-bold">Difference</h4>
            </th>
            <th>
              <h4 className="text-center font-bold">Savings</h4>
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-50">
          {tickers.slice(0, 10).map((ticker, index) => (
            <tr key={index} className="bg-gray-500">
              <td className="p-3 rounded-s-lg">
                <h4 className="text-center font-bold">{index + 1}</h4>
              </td>
              <td>
                <h4 className="text-center font-bold">{ticker.name}</h4>
              </td>
              <td>
                <h4 className="text-center font-bold">
                  {formatCurrency(ticker.last)}
                </h4>
              </td>
              <td>
                <h4 className="text-center font-bold">
                  {formatCurrency(ticker.buy)} / {formatCurrency(ticker.sell)}
                </h4>
              </td>
              <td>
                <h4 className="text-center font-bold flex justify-center align-middle gap-3">
                  {diff(ticker) > 0 ? (
                    <p className="text-primary-color">{diff(ticker)} %</p>
                  ) : (
                    <p className="text-red-500">{diff(ticker)} %</p>
                  )}
                </h4>
              </td>
              <td>
                <h4 className="text-center font-bold flex justify-center align-middle gap-2">
                  {Savings(ticker) > 0 ? (
                    <>
                      <span className="text-primary-color">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-up-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                      </span>
                      <span className="text-primary-color">
                        {formatCurrency(Savings(ticker))}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-red-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-down-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                      </span>
                      <span className="text-red-600">
                        {formatCurrency(Savings(ticker))}
                      </span>
                    </>
                  )}
                </h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
