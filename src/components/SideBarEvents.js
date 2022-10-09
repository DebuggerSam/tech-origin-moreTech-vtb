import '../App.css';
import BasicTabs from "./Tabs";

function SideBarEvents(){
    return (
        <div className='wrapper'>
            <div className="wrapper_container">

                <div className="container_birthday">
                    <div className="container_birthday_subtitle">
                    <h3 className='container_birthday_title'>Дни рождения</h3>
                    <a href="#" className='container_birthday_anchor'>Все <i className="fa-sharp fa-solid fa-chevron-right"></i></a>
                    </div>
                    <div className="container_scroll">
                    <div className="container_main_content">
                        <div className="container_main_data">
                            <img src="https://images.unsplash.com/photo-1615245579921-3cbece62cb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
                            <div className="container_name_and_post">
                            <div className='container_name'>Соловьев Иван Генадьевич</div>
                            <div className='container_post'>Директор Департамента</div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="container_main_content">
                        <div className="container_main_data">
                            <img src="https://images.unsplash.com/photo-1615245579921-3cbece62cb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
                            <div className="container_name_and_post">
                                <div className='container_name'>Соловьев Иван Генадьевич</div>
                                <div className='container_post'>Директор Департамента</div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                        <div className="container_main_content">
                            <div className="container_main_data">
                                <img src="https://images.unsplash.com/photo-1615245579921-3cbece62cb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
                                <div className="container_name_and_post">
                                    <div className='container_name'>Соловьев Иван Генадьевич</div>
                                    <div className='container_post'>Директор Департамента</div>
                                    <hr/>
                                </div>
                            </div>
                        </div>

                        <div className="container_main_content">
                            <div className="container_main_data">
                                <img src="https://images.unsplash.com/photo-1615245579921-3cbece62cb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
                                <div className="container_name_and_post">
                                    <div className='container_name'>Соловьев Иван Генадьевич</div>
                                    <div className='container_post'>Директор Департамента</div>
                                    <hr/>
                                </div>
                            </div>
                        </div>

                        <div className="container_main_content">
                            <div className="container_main_data">
                                <img src="https://images.unsplash.com/photo-1615245579921-3cbece62cb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
                                <div className="container_name_and_post">
                                    <div className='container_name'>Соловьев Иван Генадьевич</div>
                                    <div className='container_post'>Директор Департамента</div>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                        <div className="container_main_content">
                            <div className="container_main_data">
                                <img src="https://images.unsplash.com/photo-1615245579921-3cbece62cb4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt=""/>
                                <div className="container_name_and_post">
                                    <div className='container_name'>Соловьев Иван Генадьевич</div>
                                    <div className='container_post'>Директор Департамента</div>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container_main__news">
                    <div className="container_birthday_subtitle">
                        <h3 className='container_birthday_title'>Новости</h3>
                        <a href="#" className='container_birthday_anchor'>Все новости <i className="fa-sharp fa-solid fa-chevron-right"></i></a>

                    </div>
                    <BasicTabs/>

                </div>

            </div>
        </div>
    )
};

export default SideBarEvents;