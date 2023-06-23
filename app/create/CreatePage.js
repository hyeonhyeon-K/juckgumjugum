"use client"
import React from "react";

export default function Create() {
  // const [error, setError] = useState(null);

  // const handleSubmit = () => {

  //   try {
  //     const response = fetch("/api/post", {
  //       method: "POST"
  //     });

  //     if (!response.ok) {
  //       const errorData = response.json();
  //       setError(errorData.message);

  //       if (errorData.message === "제목.") {
  //         alert("제목을 입력해 주세요.");
  //       } else if (errorData.message === "제목 글자수.") {
  //         alert("제목 글자수는 5글자 이내로 작성해주세요.");
  //       } else if (errorData.message === "은행.") {
  //         alert("은행을 선택해주세요.");
  //       } else if (errorData.message === "상품내용.") {
  //         alert("상품 설명을 적어주세요.");
  //       } else if (errorData.message === "내용.") {
  //         alert("상품특징 3개 모두 입력해주세요.");
  //       } else if (errorData.message === "태그.") {
  //         alert("태그 3개 모두 입력하세요.");
  //       } else if (errorData.message === "최고 이자율.") {
  //         alert("최고 이자율을 설정해 주세요.");
  //       } else if (errorData.message === "길게.") {
  //         alert("최대 몇 개월 예치 가능한지 설정해주세요.");
  //       } else if (errorData.message === "주의사항.") {
  //         alert("상품 주의사항을 입력해주세요.");
  //       } else if (errorData.message === "태그.") {
  //         alert("태그 3개 모두 입력하세요.");
  //       }
  //       console.log(error);
  //     } else {
  //       // 성공 처리 코드를 여기에 추가합니다.
  //     }
  //   } catch (error) {
  //     console.log("에러 발생:", error);
  //   }
  // };
  return (
    <div className="createBody">
      <form action="/api/post" method="post">
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