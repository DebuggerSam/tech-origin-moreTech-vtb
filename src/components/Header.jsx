import '../Styles/Head.css'

const Header = () => {
    return (
        <div className='wrapper_header'>
            <div className="wrapper_header_container">
                <div className="wrapper_header_avatar"></div>
                <div className="wrapper_header_title">Соловьев Иван Геннадьевич</div>
                <div className="wrapper_header_sub_title">Менеджер</div>
                <div className="wrapper_header_sub_title_coins">1 250 Бонусов</div>
                <div className="wrapper_header_sub_title_coins_allow">Доступно</div>
                <div className="wrapper_header_sub_title_coins_button"><a href="#">История начислений</a></div>
            </div>
        </div>
    )
}

export default Header;