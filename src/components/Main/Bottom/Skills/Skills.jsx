import React from 'react'
import { useState } from 'react'
import css from './Skills.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { SET_SKILL_LIST } from '../../../../store/skillsReducer'


const Skills = () => {

    const skillList = useSelector(state => state.skillsReducer.skillList)
    const [currentSkill, setCurrentSkill] = useState('')
    const [dropSkill, setDropSkill] = useState('')

    const dispatch = useDispatch()

    function dragStartHandler(e, item) {
        setCurrentSkill(item)
        e.target.style.background = 'white'
    }
    function dragEndHandler(e) {
        e.target.style.background = '#f7e821'
    }
    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }
    function dropHandler(e, item) {
        e.preventDefault()
        e.target.style.background = '#f7e821'
        setDropSkill(item)
        sortSkillList()
    }

    const sortSkillList = () => {
        let newSkillList = skillList.map(i => {
            if (i.id === dropSkill.id) {
                return { ...i, order: currentSkill.order }
            }
            if (i.id === currentSkill.id && dropSkill.order) {
                return { ...i, order: dropSkill.order }
            }
            return i
        })
        dispatch({ type: SET_SKILL_LIST, payload: newSkillList })
    }

    const sortSkill = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (
        <div>
            <main>
                <div className={css.wrapper}>
                    {skillList.sort(sortSkill).map(item =>
                        <div
                            key={item.id}
                            onDragStart={(e) => dragStartHandler(e, item)}
                            onDragLeave={(e) => dragEndHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dropHandler(e, item)}
                            className={css.skillCard}
                            draggable={true}>
                            {item.skillName}
                        </div>
                    )}

                </div>
                <div className={css.underSkill}>
                    <span>(drag-n-drop)</span>
                </div>
            </main>
        </div >
    )
}

export default Skills