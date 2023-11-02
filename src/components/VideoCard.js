import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  if (!info) return null;

  return (
    <div className="p-2 m-2 w-64 flex flex-col gap-2 shadow-sm hover:scale-105 duration-300 cursor-pointer">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className=" p-1 m-1 border border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
