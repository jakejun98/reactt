import {useState} from 'react'


// JSX에서 HTML동적 생성하기 위함 dangerouslySetInnerHTML
function Content({page,text}){
  return(
    <div>
      <h1>{page}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>  
    </div>
  )
}



function App() {
  const [page, setPage] = useState('welcome');     
  const [text, setText] = useState('워터아이즈의 최신소식과 이벤트를 가장빠르게 만나보세요');

  const eventClick = (pagePage , textText,event) => {
    setPage(pagePage);
    setText(textText);
    event.preventDefault();
  };
  return (
    <div className="App">
      <h1>
        <a href="/" onClick={(e) => eventClick('welcome', '워터아이즈의 최신소식과 이벤트를 가장빠르게 만나보세요', e)}> 워터아이즈 소식 </a>
      </h1>
      <ol>
        <li>
          <a href="/" onClick={(e) => eventClick('homepage', '워터아이즈의 홈페이지 주소는 <a href="http://www.water-eyes.com">http://www.water-eyes.com</a> 입니다',e)}>Homepage</a>
        </li>
        <li>
          <a href="/" onClick={(e) => eventClick('Blog', ' 워터아이즈의 블로그 주소는  <a href="https://blog.naver.com/watereyes_blog">https://blog.naver.com/watereyes_blog</a> 입니다',e)}>Blog</a>
        </li>
        <li>
          <a href="/" onClick={(e) => eventClick('instagram', '워터아이즈의 인스타그램 주소는 <a href="https://www.instagram.com/watereyes_official">https://www.instagram.com/watereyes_official</a> 입니다',e)}>Instagram</a>
       </li>
      </ol>
      <Content page={page} text={text} />

    </div>
  );
}

export default App;
