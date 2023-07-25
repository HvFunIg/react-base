import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

/**
 * Компонент для фильтрации и сортировки
 * @param {*} param0 
 * @returns 
 */
const PostFilter = ({filter,setFilter}) => {
    return (
        <div className='filter'>
            <MyInput 
                value={filter.query} 
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />
            <div style={{display:"flex", alignItems:"center", gap:"10px", width: 500}}>
                <p> Сортировать по:</p>
                <MySelect 
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    defaultValue="Сортировка"
                    options={[
                        {value:"title",name:"По названию"},
                        {value:"body",name:"По описанию"}
                    ]}
                />
            </div>
        </div>	
    );
};

export default PostFilter;