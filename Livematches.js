import {useEffect, useState} from 'react';
export default function Livematches() {
const [clubname, setclubnames] = useState([]); 
const [odds, setodds] = useState([])
const [Matches, setmatch]=useState('');
const [Bettype, setBettype]=useState('');
  
const handleRowClick = (item) => {
  setclubnames(item); setodds(item);
  setBettype(item);
    
    };
  
  
    return (
  <div style={{color:"brown",marginHorizontal:30}}>

  <table style={{paddingLeft:0,paddingRight:0, color:"#fefefe",marginHorizontal:10}} >
<tr></tr>
<th>Manu vs Liecester</th>
<tr></tr>
<tr>
    
<td  style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={
 handleRowClick} >1 {clubname}</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10,marginHorizontal:10}} onClick={handleRowClick}>X</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10,marginHorizontal:10}} >X1</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10,marginHorizontal:10}} onClick={handleRowClick}>12</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>X2</td>
</tr>
<tr>
<td  style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>0.5</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10,marginHorizontal:10}} onClick={handleRowClick}>1</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10,marginHorizontal:10}} onClick={handleRowClick}>1.6</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10,marginHorizontal:10}} onClick={handleRowClick}>0.1</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.2</td>
</tr>


<th>GOALS</th>
<tr>
<td></td>
<td>OVER</td>
<td>UNDER</td>
</tr>
<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>0.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>2.5</td>
    
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>4.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>5.5</td>
    
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>2.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.6</td>
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>3.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.6</td>
    
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>4.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.6</td>
    
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>5.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.6</td>

    
</tr>

<th >GOAL/NO GOAL</th>
<tr >
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick} >0.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
</tr>
<th>ODD/EVEN</th>
<tr>
    <td>Odd</td>
    <td>Even</td>
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>78</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>1.5</td>


</tr>
<td>Under Goals</td>
<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0.86</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>6</td>
</tr>

<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0.86</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>6</td>
</tr>

<th style={{}} onClick={handleRowClick}>HALFTIME/FULLTIME</th>

<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0.86</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>6</td>
</tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Over 1.5 Goals</td>
<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0.86</td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>6</td>
</tr>
<tr>
<th>CORRECT SCORES</th>
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Home</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Away</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>

</tr>

<tr>
<th>BOTH TEAM TO SCORES</th>
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Home</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Away</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>

</tr>




<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Home</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>

    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Away</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>

</tr>


<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Home</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>

    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Away</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>

</tr>

<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Home</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>2-1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Away</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>
    

</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}> Home 3-2</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>1.5</td>

    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Away</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>


</tr>
<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}> Home 3-2</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>1.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>Away</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>0-0</td>

    </tr>
<th>CORNERS</th>
<tr>
<td></td>
<td>OVER</td>
<td>UNDER</td>
</tr>
<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>0.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>2.5</td>
    
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>4.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>5.5</td>
    
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>2.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.6</td>
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>3.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.6</td>
    
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>4.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.6</td>
    
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>5.5</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}} onClick={handleRowClick}>1.6</td>

    
</tr>
<tr>
<th>HOME CLEAN SHEET</th>
</tr>
<tr>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>78</td>
    <td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>1.5</td>
</tr>
<th >TOTAL GOALS</th>
<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>5 1.90 </td>

<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>6 7.90 </td>

<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>7 8.90 </td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>8 9.90 </td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>9 5.90 </td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>10 10.90 </td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>11 11.90 </td>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>12 12.90 </td>

</tr>


<th >FIRST TEAM TO SCORE</th>
<tr>

<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>A 1.90 </td>
</tr>

<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>H 0.89 </td>
    
</tr>
<th >LAST TEAM TO SCORE</th>
<tr>

<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>A 1.90 </td>
</tr>

<tr>
<td style={{backgroundColor:"#d4af37",color:"#fefefe",marginHorizontal:10}}>H 0.89 </td>
    
</tr>


        

</table>
        </div>

)
}
