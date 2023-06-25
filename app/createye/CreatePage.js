import React from "react";
export const dynamic = 'force-static' 
export default function Create() {
  return (
    <div className="createBody">
      <form action="/api/posty" method="post">
        <div className="create1">
          <div className="create1W">상품이름</div>
          <input className="createInputTitle" type="text" name="title" 
          required min={1} maxLength={5} 
          placeholder="1~5글자"
          />
          <div className="createInputWB">상품 은행</div>
          <select className="createInputBank" name="bank" required>
          <option></option>
        <option>국민은행</option>
        <option>우리은행</option>
        <option>기업은행</option>
        <option>농협은행</option>
        <option>신한은행</option>
        <option>하나은행</option>
        </select>
          <div className="createInputWB">태그</div>
          <input className="createInputTag" name="tag" required 
          min={1} maxLength={4} 
          placeholder="1~4글자"/>
          <input className="createInputTag" name="tag1"  required 
          min={1} maxLength={4} 
          placeholder="1~4글자"/>
          <input className="createInputTag" name="tag3" required 
          min={1} maxLength={4} 
          placeholder="1~4글자"/>
        </div>
        <div className="create2">
          <div>예금종류</div>
          <select className="createInputPoint1" name="type" required>
          <option></option>
        <option>정기예금</option>
        <option>종류예금</option>
        </select>
        </div>
        <div className="create2">
          <div>상품내용</div>
          <input className="createInputPoint1" name="content" required 
          min={1} maxLength={30} 
          placeholder="  최대 30글자"/>
        </div>
        <div className="create2">
          <div>상품특징1</div>
          <input className="createInputPoint2" name="detail" required
          min={1} maxLength={30} 
          placeholder="  최대 30글자"/>
        </div>
        <div className="create2">
          <div>상품특징2</div>
          <input className="createInputPoint3" name="detail2" required
          min={1} maxLength={30} 
          placeholder="  최대 30글자"/>
        </div>
        <div className="create2">
          <div>상품특징3</div>
          <input className="createInputPoint4" name="detail3" required
          min={1} maxLength={30} 
          placeholder="  최대 30글자"/>
        </div>

        <div className="create3">
          <div className="createHigh" placeholder="%">
            최고 이자
          </div>
          <input className="createInputHigh" name="high" required
          min={1} maxLength={3} 
          placeholder="ex) 2.5"
          type="text"
          pattern="/[^-\.0-9]/g,''"
          title="총3자리 숫자와 점만 입력 가능합니다! "/>
          <div className="createMonth">예치개월</div>
          <input className="createInputMonth" name="long" required
          min={1} maxLength={3} 
          placeholder="ex) 24"
          pattern="^[0-9]+$"
          type="tel"
          title="2자리 숫자만 입력 가능합니다!"
          />
        </div>
        <div className="memberCare">고객 주의사항</div>
        <input className="createInputCare" name="care" required 
        min={1} maxLength={100} 
        placeholder="최대 100글자"/>
        <div className="create2">
          <div>상품링크</div>
          <input className="createInputPoint1" name="link" required 
          min={1} maxLength={100} 
          placeholder="ex) www.naver.com"
          type="url"
          title="https://나 http:// 를 포함해야 합니다. "
          />
        </div>
        <button className="createButton" type="submit">
          상품등록하기
        </button>
      </form>
    </div>
    
  );
}