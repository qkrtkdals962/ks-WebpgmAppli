import { useState } from "react";
const Area = () => {
  const [size, setSize] = useState({ width: 80, height: 80 });
  return (
    <div>
      <h1>
        너비 : {size.width}, 높이 : {size.height}
      </h1>
      <button
        onClick={() => {
          if (size.width < 150) {
            const copy = { ...size };
            copy.width += 10;
            setSize(copy);
          } else {
            alert("너비는 150이상이 될 수 없습니다.");
          }
        }}
      >
        너비 증가
      </button>
      <button
        onClick={() => {
          if (size.height < 150) {
            const copy = { ...size };
            copy.height += 10;
            setSize(copy);
          } else {
            alert("높이는 150이상이 될 수 없습니다.");
          }
        }}
      >
        높이 증가
      </button>
      <button
        onClick={() => {
          if (size.width > 0) {
            const copy = { ...size };
            copy.width -= 10;
            setSize(copy);
          } else {
            alert("너비는 0이하가 될 수 없습니다.");
          }
        }}
      >
        너비 감소
      </button>
      <button
        onClick={() => {
          if (size.height > 0) {
            const copy = { ...size };
            copy.height -= 10;
            setSize(copy);
          } else {
            alert("높이는 0이하가 될 수 없습니다.");
          }
        }}
      >
        높이 감소
      </button>
    </div>
  );
};
export default Area;
