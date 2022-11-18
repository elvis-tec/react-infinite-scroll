import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFetchData } from '../hooks/useFetchData';
import { PostItems } from './PostItems';

const LIMIT = 5;

export const PostList = () => {
    const { characters, isLoading } = useFetchData();
    const [postData, setPostData] = useState([]);
    const [visible, setVisible] = useState(LIMIT);
    const [hasMore, setHasMore] = useState(true);

    const fetchData = ()=>{
        const newLimit = visible + LIMIT;
        const dataToLoad = characters.slice(visible, newLimit);

        if( characters.length > postData.length ){
            setTimeout(()=>{
                setPostData([...postData].concat(dataToLoad));
            },2000);
            setVisible(newLimit);
        }else{
            setHasMore(false);
        }
    };

    useEffect(() => {
      setPostData(characters.splice(0,LIMIT));
    }, [isLoading])
    

  return (
    <div
    id="scrollableDiv"
    style={{
        height: 300,
        overflow: 'auto',
        display: 'flex',
        
    }}
    >
        <InfiniteScroll
            dataLength={postData.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Is Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
            scrollableTarget="scrollableDiv"
        >
            {
                postData.map((item)=>{
                    return <PostItems key={item.id} title={item.name}/>
                })
            }
        </InfiniteScroll>
    </div>
  )
}
