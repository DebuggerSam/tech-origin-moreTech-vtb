import '../Styles/RightBlock.css';

const RightBlock = () => {
    return (
        <div className='wrapper_right-block'>
            <div className="wrapper_right-block_home wrapper_right_block_content"><i className="fa-solid fa-house"></i></div>
            <div className="wrapper_right-block_group wrapper_right_block_content"><i className="fa-solid fa-user-group"></i></div>
            <div className="wrapper_right-block_comment wrapper_right_block_content"><i className="fa-solid fa-comments"></i></div>
            <div className="wrapper_right-block_shop wrapper_right_block_content"><i className="fa-solid fa-bag-shopping"></i></div>
            <div className="wrapper_right-block_ask wrapper_right_block_content"><i className="fa-solid fa-clipboard-question"></i></div>
        </div>
    )
};

export default RightBlock;