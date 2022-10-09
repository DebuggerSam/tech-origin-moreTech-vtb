import '../Styles/Tasks.css'

const Tasks = () => {
    return (
        <div className="wrapper_task">
            <div className="wrapper_task_block wrapper_task1">
                <div className="wrapper_task_block_img"></div>
                <div className="wrapper_task_block_mentor">Ментор  <br/> <span>3ый уровень</span></div>
                <div className="wrapper_task_block_dostig">Уровень достижения 1 из <sub>2</sub></div>
                <input type="range" value='60' className="wrapper_task_block_inp"/>
                <div className="wrapper_task_block_teach">Обучи второго ученика <span>+1000 Бонусов</span></div>
                <button className="wrapper_task_block_stag">Взять стажёра</button>
            </div>
            <div className="wrapper_task_block">
                <div className="wrapper_task_block_img"></div>
                <div className="wrapper_task_block_mentor">Ментор  <br/> <span>3ый уровень</span></div>
                <div className="wrapper_task_block_dostig">Уровень достижения 1 из <sub>2</sub></div>
                <input type="range" value='60' className="wrapper_task_block_inp"/>
                <div className="wrapper_task_block_teach">Обучи второго ученика <span>+1000 Бонусов</span></div>
                <button className="wrapper_task_block_stag">Взять стажёра</button>
            </div>
            <div className="wrapper_task_block wrapper_task1 dope">
                <div className="wrapper_task_block_img"></div>
                <div className="wrapper_task_block_mentor">Ментор  <br/> <span>3ый уровень</span></div>
                <div className="wrapper_task_block_dostig">Уровень достижения 1 из <sub>2</sub></div>
                <input type="range" value='60' className="wrapper_task_block_inp"/>
                <div className="wrapper_task_block_teach">Обучи второго ученика <span>+1000 Бонусов</span></div>
                <button className="wrapper_task_block_stag">Взять стажёра</button>
            </div>
            <div className="wrapper_task_block dope">
                <div className="wrapper_task_block_img"></div>
                <div className="wrapper_task_block_mentor">Ментор  <br/> <span>3ый уровень</span></div>
                <div className="wrapper_task_block_dostig">Уровень достижения 1 из <sub>2</sub></div>
                <input type="range" value='60' className="wrapper_task_block_inp"/>
                <div className="wrapper_task_block_teach">Обучи второго ученика <span>+1000 Бонусов</span></div>
                <button className="wrapper_task_block_stag">Взять стажёра</button>
            </div>

        </div>
    )
};

export default Tasks;