/**
 * @name 로그관련유틸함수
 */
import React from "react";

// 디버그화면
export const debug = (message: any) => {
  return (
    <div style={{ padding: 20, backgroundColor: "red" }}>
      {JSON.stringify(message)}
    </div>
  );
};
