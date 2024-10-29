import { Popover } from "antd";
import dayjs from "dayjs";
import React from "react";
import { capitalizeFirstLetter } from "../Common/Captalization";

const DropPick = ({ boarding, dropping, bus_type_status, busType }) => {
  console.log(bus_type_status, "bus_type_status");

  return (
    <>
      <div className="md:block hidden w-full">
        <div
          className={`${
            busType === "luxury" ? "bg-[#FFEEC9]" : "bg-[#EEEDED]"
          } h-auto md:rounded-[0.5vw] px-[1vw]`}
        >
          <div className="grid grid-cols-2 ">
            <div className="flex flex-col  justify-start px-[1vw]">
              <p
                className={`${
                  busType === "luxury" ? "text-[#393939]" : "text-[#1F487C]"
                } text-[1.5vw] font-extrabold py-[1vw]`}
              >
                BOARDING
              </p>
              {/* <div className='w-[30vw] h-[20vw] overflow-x-auto'>
                                <div className=" h-[12.5vw] w-[20vw] flex flex-col flex-wrap gap-x-[1.5vw] gap-y-[1.5vw]">
                                    {boarding.map((item) => (
                                        <div className='flex gap-[1vw]'>
                                            <div className='text-[1.1vw] text-[#1F487C] font-bold'>{`${dayjs(item.time).format('HH:mm')}`}</div>
                                            <div className='text-[1.1vw] text-[#1F487C]'>{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}

              <div className="grid grid-cols-2">
                {boarding.map((item) => (
                  <div className="flex gap-x-[1vw]  pb-[.7vw]">
                    <div
                      className={`${
                        busType === "luxury"
                          ? "text-[#393939]"
                          : "text-[#1F487C]"
                      } text-[1vw] font-bold`}
                    >
                      {`${dayjs(item.time)?.format("HH:mm")}`}{" "}
                    </div>
                    {item?.name?.length > 15 ? (
                      <Popover content={item?.name}>
                        {" "}
                        <div
                          className={`${
                            busType === "luxury"
                              ? "text-[#393939]"
                              : "text-[#1F487C]"
                          } text-[1.1vw] cursor-pointer`}
                        >
                          {item?.name?.substr(0, 15)}...
                        </div>
                      </Popover>
                    ) : (
                      <div
                        className={`${
                          busType === "luxury"
                            ? "text-[#393939]"
                            : "text-[#1F487C]"
                        } text-[1.1vw]`}
                      >
                        {item.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-start px-[1vw]">
              <p
                className={`${
                  busType === "luxury" ? "text-[#393939]" : "text-[#1F487C]"
                } text-[1.5vw] font-extrabold py-[1vw]`}
              >
                DROPPING
              </p>
              {/* <div className='w-[30vw] h-[20vw] overflow-x-auto'>
                                <div className=" h-[12.5vw] w-[24vw] flex flex-col flex-wrap gap-x-[1.5vw] gap-y-[1.5vw]">
                                    {dropping.map((item) => (
                                        <div className='flex gap-[1vw]'>
                                            <div className='text-[1.1vw] text-[#1F487C] font-bold'>{`${dayjs(item.time).format('HH:mm')} (${dayjs(item.time).format('DD')} ${dayjs(item.time).format('MMM')})`}</div>
                                            <div className='text-[1.1vw] text-[#1F487C]'>{item.name}</div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
              <div className="grid grid-cols-2">
                {dropping.map((item) => (
                  <div className="flex gap-x-[1vw]  pb-[.7vw]">
                    <div
                      className={`${
                        busType === "luxury"
                          ? "text-[#393939]"
                          : "text-[#1F487C]"
                      } text-[1vw] font-bold`}
                    >
                      {`${dayjs(item.time).format("HH:mm")}`}
                      <span className="text-gray-400 ps-[.5vw] font-[.2vw]">{`(${dayjs(
                        item.time
                      ).format("DD")} ${"-"} ${dayjs(item.time).format(
                        "MMM"
                      )})`}</span>{" "}
                    </div>
                    {item?.name?.length > 15 ? (
                      <Popover content={item?.name}>
                        {" "}
                        <div
                          className={`${
                            busType === "luxury"
                              ? "text-[#393939]"
                              : "text-[#1F487C]"
                          } text-[1.1vw] cursor-pointer`}
                        >
                          {item?.name?.substr(0, 15)}...
                        </div>
                      </Popover>
                    ) : (
                      <div
                        className={`${
                          busType === "luxury"
                            ? "text-[#393939]"
                            : "text-[#1F487C]"
                        } text-[1.1vw]`}
                      >
                        {item.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden  block w-full">
        <div
          className={`${
            busType === "luxury" ? "bg-[#FFEEC9]" : "bg-[#EEEDED]"
          } h-auto w-full px-[4vw] py-[1vw]`}
        >
          <div className="grid grid-cols-2 justify-between">
            <div className="flex flex-col gap-y-[2vw]">
              <p
                className={`${
                  busType === "luxury" ? "text-[#393939]" : "text-[#1F487C]"
                } text-[4vw] font-extrabold py-[1.5vw]`}
              >
                BOARDING
              </p>
              {boarding.map((item) => (
                <div className="flex gap-[2vw]" key={item?.id || item?.name}>
                  <div
                    className={`${
                      busType === "luxury" ? "text-[#393939]" : "text-[#1F487C]"
                    } text-[3.2vw] font-extrabold`}
                  >
                    {dayjs(item.time).format("HH:mm")}
                  </div>

                  {/* Show Popover only if item.name is longer than 10 characters */}
                  {item?.name?.length > 15 ? (
                    <Popover
                      content={item.name}
                      trigger="hover"
                      overlayStyle={{ maxWidth: "40vw" }}
                    >
                      <p
                        className={`${
                          busType === "luxury"
                            ? "text-[#393939]"
                            : "text-[#1F487C]"
                        } text-[3.5vw]`}
                      >
                        {`${capitalizeFirstLetter(
                          item?.name?.slice(0, 15)
                        )}...`}
                      </p>
                    </Popover>
                  ) : (
                    <div
                      className={`${
                        busType === "luxury"
                          ? "text-[#393939]"
                          : "text-[#1F487C]"
                      } text-[3.2vw]`}
                    >
                      {item?.name}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col pl-[5vw] gap-y-[2vw]">
              <p
                className={`${
                  busType === "luxury" ? "text-[#393939]" : "text-[#1F487C]"
                } text-[4vw] font-extrabold py-[1.5vw]`}
              >
                DROPPING
              </p>
              {dropping.map((item) => (
                <div className="flex gap-[1vw]">
                  <div
                    className={`${
                      busType === "luxury" ? "text-[#393939]" : "text-[#1F487C]"
                    } text-[3.2vw] font-extrabold`}
                  >
                    {`${dayjs(item.time).format("HH:mm")}`}
                    <span className="text-gray-400 ps-[.5vw]">{`(${dayjs(
                      item.time
                    ).format("DD")} ${"-"} ${dayjs(item.time).format(
                      "MMM"
                    )})`}</span>
                  </div>
                  {item?.name?.length > 8 ? (
                      <Popover content={item?.name}>
                        {" "}
                        <div
                          className={`${
                            busType === "luxury"
                              ? "text-[#393939]"
                              : "text-[#1F487C]"
                          } text-[3.2vw] cursor-pointer`}
                        >
                          {item?.name?.substr(0, 8)}...
                        </div>
                      </Popover>
                    ) : (
                      <div
                        className={`${
                          busType === "luxury"
                            ? "text-[#393939]"
                            : "text-[#1F487C]"
                        } text-[3.2vw]`}
                      >
                        {item.name}
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropPick;
