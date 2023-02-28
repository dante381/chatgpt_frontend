import React,{useState} from 'react';
import axios from 'axios';
import "./search.css";

function Search(){
    const [username,setUsername]=useState('');
    const [res1,setRes1]=useState('');
    const handleUsername = (e) => {
        setUsername(e.target.value);
        //setSubmitted(false);
    };
    const handleDelete=(e)=>{
        e.preventDefault();
        if(username!==''){
            axios.post('http://localhost:4000/dbdelete',{
                username:username
            })
            .then(user=>{
                if(user['data']){
                    setRes1(user['data']['message']);
                }
                else{
                    setRes1("User Not Found");
                }
            })
        }
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(username!==''){
            axios.post('http://localhost:4000/search',{
                username:username
            })
            .then(user=>{
                if(user['data']){
                    // console.log(user);
                    var dic=user['data'];
                    setRes1(Object.keys(dic).map(key => 
                            <div>
                                <table className='table'>
                                    <tr>
                                        <td>{key}</td>
                                        <td>{dic[key]}</td>
                                    </tr>
                                </table>
                            </div>
                        
                    ));
                    // console.log(dic);
                    // setRes1(dic);
                }
                else{
                    setRes1("User Not Found");
                }
            })
        }
    }

    return(
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <label>Find/Delete</label>
                <input type="text" id="search" onChange={handleUsername} placeholder="Enter UserName" value={username}></input>
                <input type="submit" value="Submit"></input>
                <button onClick={handleDelete}>Delete</button>
            </form>
            <div>
                {res1}
            </div>
        </div>
    );
}

export default Search;
