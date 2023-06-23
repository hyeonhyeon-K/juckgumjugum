"use client"

import React, { useState } from "react";
import alert from "react"

export default function Create() {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        body: new FormData(event.target),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
        alert("제목 글자수 확인해라잉");
        console.log(error)
      } else {
        // Success handling code here
      }
    } catch (error) {
      console.log("에러 발생:", error);
    }
  };

  return (
    <div className="createBody">
      <form onSubmit={handleSubmit}>
        <div className="create1">
          <div className="create1W">상품이름</div>
          <input className="createInputTitle" name="title" />
          <div className="createInputWB">상품 은행</div>
          <input className="createInputBank" name="bank" />
          <div className="createInputWB">태그</div>
          <input className="createInputTag" name="tag" />
          <input className="createInputTag" name="tag1" />
          <input className="createInputTag" name="tag3" />
        </div>
        <div className="create2">
          <div>적금종류</div>
          <input
            className="createInputPoint1"
            name="type"
            placeholder="예) 정기적금"
          />
        </div>
        <div className="create2">
          <div>상품내용</div>
          <input className="createInputPoint1" name="content" />
        </div>
        <div className="create2">
          <div>상품특징1</div>
          <input className="createInputPoint2" name="detail" />
        </div>
        <div className="create2">
          <div>상품특징2</div>
          <input className="createInputPoint3" name="detail2" />
        </div>
        <div className="create2">
          <div>상품특징3</div>
          <input className="createInputPoint4" name="detail3" />
        </div>

        <div className="create3">
          <div className="createHigh" placeholder="%">
            최고 이자
          </div>
          <input className="createInputHigh" name="high" />
          <div className="createMonth">예치개월</div>
          <input className="createInputMonth" name="long" />
        </div>
        <div className="memberCare">고객 주의사항</div>
        <input className="createInputCare" name="care" />
        <div className="create2">
          <div>상품링크</div>
          <input className="createInputPoint1" name="link" />
        </div>
        <button className="createButton" type="submit">
          상품등록하기
        </button>
      </form>
    </div>
  );
}