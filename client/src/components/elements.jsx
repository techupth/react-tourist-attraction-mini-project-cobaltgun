import { useEffect, useState } from "react";
import axios from "axios";

function WhereToTravel() {
  const [travelData, setTravelData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async (text) => {
    const results = await axios.get(
      `http://localhost:4001/trips?keywords=${text}`
    );
    setTravelData(results.data.data);
  };
  useEffect(() => {
    handleSearch(searchInput);
  }, [searchInput]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-blue-500 text-center p-[5px] pt-[30px]">
          เที่ยวไหนดี
        </h1>
        <div className="p-5">
          <div>ค้นหาที่เที่ยว</div>
          <input
            className="inputText"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน"
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-wrap ">
          {travelData.map((data, index) => {
            const truncatedDescription =
              data.description.length > 100
                ? data.description.substring(0, 100) + " " + "..."
                : data.description;
            return (
              <div key={index} className="flex">
                <div>
                  <img
                    className="w-[350px] h-[250px] p-4 rounded-[40px]"
                    src={data.photos[0]}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">{data.title}</h2>
                  <div className="flex flex-col items-start">
                    <div className="text-gray-400 ">{truncatedDescription}</div>{" "}
                    <button
                      onClick={() => {
                        openLinkInNewTab(data.url);
                      }}
                    >
                      อ่านต่อ
                    </button>
                    <div className="text-gray-500 flex gap-2">
                      <span>หมวด </span>
                      {data.tags.map((item, index) => (
                        <span key={index}>
                          {index === data.tags.length - 1 ? (
                            <span className="flex gap-2">
                              และ
                              <span className="underline ">{item}</span>
                            </span>
                          ) : (
                            <span className="underline">{item}</span>
                          )}
                        </span>
                      ))}
                    </div>
                    <div className="flex ">
                      <img
                        src={data.photos[1]}
                        className="p-1 w-[100px] h-[100px] rounded-[15px]"
                      />
                      <img
                        src={data.photos[2]}
                        className="p-1 w-[100px] h-[100px] rounded-[15px]"
                      />
                      <img
                        src={data.photos[3]}
                        className="p-1 w-[100px] h-[100px] rounded-[15px]"
                      />
                    </div>
                  </div>
                </div>

                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default WhereToTravel;
