import OrderHistory from "../components/user/orderHistory";
import UserInfo from "../components/user/userlInfo";

export default function User(){
    return(
        <div className='container'>
            <h1 className='userTitle'>Особистий кабінет</h1>
            <div className='userInfoCont'>
                <UserInfo />
                <OrderHistory />
            </div>
        </div>
    )
}