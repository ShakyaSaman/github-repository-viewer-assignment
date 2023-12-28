import { useContext } from 'react';
import {GHStateContext} from '../contexts/GHContext'
import axios from 'axios'

const Input: React.FC = () => {
    const context = useContext(GHStateContext);

    const { userName, setUserName, tableData, setTableData, setLoading} = context;
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserName(event.target.value);
    };

    //ensure to run the backend first and keep the url in .env file
    const backendUrl = process.env.REACT_APP_BACKEND_URL

    const getUserRepos = () => {
      setLoading(true)
      axios.get(`${backendUrl}/api/getRepos/${userName}`)
        .then(response => {
          setLoading(false)
           console.log('res',response)
           setTableData(response.data)
        })
        .catch(error => {
          setLoading(false)
          setTableData([])
          if(error.response.data.status == 404){
            console.log('User not found.')
          }
          console.log('error',error)
        });
    }
  
    return (
      <div style={{display:'flex',gap:'15px',justifyContent:'center',alignItems: 'center'}}>
       <label>Enter a valid github username:</label>
        <input
          type="text"
          value={userName}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key=='Enter' ? getUserRepos() : ''}
          placeholder="Enter a valid github username.."
        />
        <button onClick={getUserRepos}>Generate</button>
      </div>
    );
  };
  
  export default Input;