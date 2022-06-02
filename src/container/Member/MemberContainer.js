import React, { useEffect, useState } from 'react';
import MemberComponent from './component/MemberComponent';
import lodash from 'lodash';
import axiosConfig from '../../share/axiosConfig';
import { useQuery } from 'react-query';
function MemberContainer(props) {
    const [searchNameInput, setSearchNameInput] = useState('');
    const [listSearchUser, setListSearchUser] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const { data:listUser =[], isLoading } = useQuery('getListUser', () => axiosConfig.get('/api/user'));
    const nhap = lodash.debounce(async (e) => {
        if (e.target.value != '') {
            const data = await axiosConfig.get(`/api/user/search?email=${e.target.value}`);
            setListSearchUser(data)
        }
    }, 1000)
    return (
        <MemberComponent nhap={nhap} listSearchUser={listSearchUser} listUser={listUser} showSearch={showSearch} setShowSearch={setShowSearch} searchNameInput={searchNameInput} setSearchNameInput={setSearchNameInput} />
    )
}

export default MemberContainer
