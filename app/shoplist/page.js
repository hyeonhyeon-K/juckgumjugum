import ShopList from "./ShopList"

export default function shopList(){
    return(
        <div>
            <div className="shopListTitle">장바구니</div>
            <ShopList/>
            <button className="shopListButton">가입하기</button>
        </div>
    )
}