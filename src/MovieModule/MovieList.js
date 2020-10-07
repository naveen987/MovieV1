import React, { useState } from 'react';
import { Spin } from 'antd';
import { InfinityTable as Table } from 'antd-table-infinity';
import Search from 'antd/lib/input/Search';
import { useHistory } from 'react-router-dom'

const MovieList =()=> {
  const history = useHistory()
  const [MovieList, setMovieList]=React.useState({
    data: [],
    loading: false,
  })
  const [CurrentPageNumber, setCurrentPageNumber] = React.useState(1);
  const [SearchString, setSearchString] = React.useState("");

  React.useEffect(()=>{
    FetchMovieData();
  },[SearchString])

  const columns = [
    {
      title: 'imdbID',
      width: 50,
      dataIndex: 'imdbID',
    },
    {
      title: 'Title',
      width: 50,
      dataIndex: 'Title',
    },
    {
      title: 'Type',
      width: 50,
      dataIndex: 'Type',
    },
    {
      title: 'Year',
      width: 50,
      dataIndex: 'Year',
    },
    {
      title: 'Poster',
      dataIndex: 'Poster',
      width: 100,
    }
  ];
  
 async function FetchMovieData () { 
    if(SearchString.length > 0){
      setMovieList({    
        ...MovieList,
        loading: true });
      const responseData = await fetch(`http://www.omdbapi.com/?apikey=9b3b1559&s=${SearchString}&type=movie&page=${CurrentPageNumber}`);
      const data = await responseData.json();
      if(data.Response !== "False")
      {
        let dataList = data.Search;
        let dataListWithKey = MovieList.data;
        if(dataList.length > 0){
          dataList.map((val, index) => {
            let newItem =  {
              key: val.imdbID,
              index: index,
              Poster: val.Poster,
              Title: val.Title,
              Type: val.Type,
              Year: val.Year,
              imdbID: val.imdbID
            };
          
            dataListWithKey.push(newItem);
          });
          setMovieList({
            ...MovieList,
            data: dataListWithKey
          });
          setCurrentPageNumber(CurrentPageNumber+1);
        }
      }
      setMovieList({
        ...MovieList,
        loading : false
      }); 
    }
  }
  function searchMovie(value){
    setSearchString(value);
    setCurrentPageNumber(1);
    console.log(SearchString)
  }

  const loadMoreContent = () => (
    <div
      style={{
        textAlign: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        border: '1px solid #e8e8e8',
      }}
    >
      <Spin tip="Loading..." />
    </div>
  )
    return (
      <div>
        <div>
        <Search
          style={{
            width: '20vw',
            display: 'flex',
            float: 'right',
            paddingBottom: '20px'
          }}
          placeholder="search movies"
          enterButton="Search"
          size="large"
          onSearch={value => searchMovie(value)}
        />
        </div>
        <Table
        onRow={(r) => ({
          onClick: () => 
          history.push({
            pathname: `/Movie-detail`,
            state: {
              title:  r.Title,
            },
          })
          ,
        })}
        key="key"
        loading={MovieList.loading}
        onFetch={FetchMovieData}
        loadingIndicator={loadMoreContent()}
        columns={columns}
        scroll={{ y: 450 }}
        dataSource={MovieList.data}
        bordered
        debug
      />
      </div>
    );
  }

export default MovieList