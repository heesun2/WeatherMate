import { Outlet, useParams } from 'react-router-dom';
import CommunityHeader from './CommunityHeader';
import { useRecoilValue } from 'recoil';
import { memberState } from '@recoil/atom.mjs';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import useCustomAxios from '@hooks/useCustomAxios.mjs';
import { useQuery } from '@tanstack/react-query';
import Button from '@components/layout/Button';


function CommunityDetail() {
  const navigate = useNavigate();
  const user = useRecoilValue(memberState);
  const { _id } = useParams();
  const axios = useCustomAxios();
  
  // 사용하지 않는 속성 사용 취소
  // let firstRender = useRef(true);
  // useEffect(() => {
  //   firstRender.current = false;
  // }, []);

  const { data } = useQuery({
    queryKey: ['posts', _id],
    queryFn: () =>
      axios.get(`/posts/${_id}`, {
        // params: { incrementView: firstRender.current }, -> 불필요 params 전달 취소
      }),
    select: response => response.data,
    suspense: true,
    refetchOnWindowFocus: false // -> 변경된 부분만 refetch
  });
  

  const handleDelete = async () => {
    const deleteRes = confirm('삭제하시겠습니까?');
    if(deleteRes){
      await axios.delete(`/posts/${_id}`)
      navigate('/community')
    }
  };

  // 이미지 재호출 불필요
  // const [image, setImage] = useState(null);
  // useEffect(() => {
  //   async function getFiles() {
  //     try{
  //       if(item.image){
  //         const res = await axios.get(`/files/07-WeatherMate/${data.item.image}`,{
  //           responseType: 'blob'
  //         })
  //         const url = URL.createObjectURL(res.data)
  //         setImage(url)
  //       }else{
  //         setImage(null)
  //       }
  //     }catch(error){
  //       console.error(error)
  //     }
  //   }
  //   getFiles();
  // },[])
  
  const item = data?.item;
  // console.log(data);
  // console.log(item);

  return (
    <div className="min-h-screen min-w-96 p-5 md:px-32 lg:px-60">
    <div>
      <div className="">
        <div className="box-border flex">
        <Button onClick={() => navigate('/community')} className="">
          <FaArrowLeft className="text-xl" />
        </Button>
        <CommunityHeader title={'상세보기'} />
        </div>
      </div>
      <div className="grid 2xl:grid-cols-2 gap-8">
      <div className="px-5 rounded-md border">
        <div>
          {item && (
            <section className="py-4">
              <div
                className="flex flex-col gap-3"
                onClick={() => navigate(`/community/${item._id}`)}
              >
                <div className="flex gap-3">
                  {item.user.profile ? <img src={`${import.meta.env.VITE_API_SERVER}/files/07-WeatherMate/${item.user.profile}`} className="rounded-full border-2 w-12 h-12" /> : <p className="rounded-full border w-12 h-12"></p>}
                  <div className="grow">
                    <h1 className="text-lg font-bold">{item.user.name}</h1>
                    <p className="grow text-gray-400">{item.createdAt.substring(5,16)}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    {item.title && <img className="w-12 h-12 border rounded-full bg-blue-200 p-1 xl:w-16 xl:h-16" src={`/${item.title}.svg`} alt="weather" />}
                  </div>
                </div>

                <div className='grid lg:grid-cols-2'>
                  <div>
                    {item.image && <img src={`${import.meta.env.VITE_API_SERVER}/files/07-WeatherMate/${item.image}`} alt="" className="h-full"/>} {/*바로 불러오기*/}
                  </div>
                  <div className="bg-gray-400 text-white rounded-md p-2 box-border">
                    {item.content}
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-end mt-3 gap-1">
                <p className="grow text-md font-semibold text-slate-400">조회수 {item.views}</p>
                <div className="flex grow-0 gap-1">
                  <Button
                    className="bg-primary text-white px-3 py-1 rounded-md"
                    onClick={() => navigate('/community')}
                  >
                    목록
                  </Button>
                  {user?._id === item.user._id && (
                    <div className='flex gap-1'>
                      {/* <Button className="bg-gray-500 p-1 rounded-md" onClick={handleDelete}>수정</Button> */}
                      <Button className="bg-red-500 px-3 py-1 rounded-md text-white" onClick={handleDelete}>삭제</Button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

        </div>

      </div>
      <Outlet context={item} />
      </div>
    </div>
    </div>
  );
}

export default CommunityDetail
