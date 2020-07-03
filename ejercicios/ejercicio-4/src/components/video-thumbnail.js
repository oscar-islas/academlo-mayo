import React from "react";

export default function VideoThumbnail(props) {
  return (
    <div className="thumbnail">
      <img src={props.thumbnailUrl} alt="thumbnail" />
    </div>
  );
}
