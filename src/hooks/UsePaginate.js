import { useEffect } from "react";
import { useState } from "react";

function UsePaginate(url, query) {
    const [data, setData] = useState({
        data: [],
        page: 0,
        nextPage: 0,
        prevPage: 0,
        limit: 0,
        total: 0
    })

    useEffect(() => {
        fetch(`${url}?${query.toString()}`, {headers: {
            'app-id': 'd526f51e3d9a4f0dba138594e06c3b1f'
        }})
        .then(res => res.json())
        .then(({data, limit, total, page}) => {
            setData({
                data,
                limit, 
                total, 
                page,
                nextPage: page + 1,
                prevPage: page - 1,
            })
            console.log(data)
        })
    }, [query.toString()])

  return data;
}

export default UsePaginate