import React from "react";
import "./style.css";
import {useState} from 'react'


function Header(props){
  return <header>
    <h1><a href="/" onClick={function(event){
      event.preventDefault()
      props.onChangeMode()
    }}>{props.title}</a></h1>
    </header>
}
function A1(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li Key={t.id}><a id={t.id} href={'/gg/'+t.id} onClick={(event)=>{
      event.preventDefault()
      props.onChangeMode(Number(event.target.id))
    }}>{t.title}</a></li>)
  } 
  return <a2>
    {lis}
    </a2>
}
function A2(props){

  return <a1>
    <h1>{props.title}</h1>
    {props.body}
    </a1>
}
function A3(){
  return <article>
    <h3>Create</h3>
    <form>
     <p><input type="text" name="title" placeholder="title"/></p>
     <p><textarea name="body" placeholder="body"/></p>
     <p><input type="submit" value="crate"/></p>
    </form>
  </article>
}

export default function App() {
  // const _mode = useState('1')
  // const mode = _mode[0]
  // const setMode = _mode[1]
  const [mode, setMode] = useState('1')
  const [id, setId] = useState(null)
  const topics = [
    {id:1, title:'지옥', body:'dkdkdkdkdk'},
    {id:2, title:'같다', body:'dhdhdhdhdh'}
  ]
  let content = null
  if(mode === '1'){
    content = <A2 title="Welcome" body="hi"></A2>}
    else if(mode === '2'){
      let title, body =null
      for(let i=0; i<topics.length; i++){
        if(topics[i].id === id){
          title = topics[i].title
          body = topics[i].body
        }
      }
      content = <A2 title={title} body={body}></A2>
    } else if(mode === '3'){
      content = <A3></A3>
    }

  return (
    <div>
      <Header title="헬로우 지옥" onChangeMode={()=>{
        setMode('1')
      }}></Header>
      <A1 topics={topics} onChangeMode={(_id)=>{
        setMode('2')
        setId(_id)
      }}></A1>
      {content}
      <p><a href="/gg" onClick={event=>{
        event.preventDefault()
        setMode('3')
      }}>Create</a></p>

    </div>
  );
}



