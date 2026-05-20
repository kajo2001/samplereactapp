import { useRef, useState } from "react"
export const Addition=()=>{
    const txtnum1=useRef()
    const txtnum2=useRef()
    const [result,setResult]=useState(0);
    const Add=()=>{
        var n1=Number(txtnum1.current.value);
        var n2=Number(txtnum2.current.value);
        var c=n1+n2;
        setResult("Addition = "+c);
    }
        const Substract=()=>{
        var n1=Number(txtnum1.current.value);
        var n2=Number(txtnum2.current.value);
        var c=n1-n2;
        setResult("Substraction = "+c);
    }
        const Multiplication=()=>{
        var n1=Number(txtnum1.current.value);
        var n2=Number(txtnum2.current.value);
        var c=n1*n2;
        setResult("Multiplication = "+c);
    }
        const Division=()=>{
        var n1=Number(txtnum1.current.value);
        var n2=Number(txtnum2.current.value);
        var c=n1/n2;
        setResult("Division = "+c.toFixed(2));
    }

    return(
        <div>
            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Number 1:</td>
                        <td><input type="text" ref={txtnum1}/></td>
                    </tr>
                    <tr>
                        <td>Number 2:</td>
                        <td><input type="text" ref={txtnum2}/></td>
                    </tr>
                    <tr>

                        <td colSpan={2}>
                            <input type="button"  value="Add" onClick={Add}/>
                            &nbsp;
                            <input type="button"  value="Substract" onClick={Substract}/>
                            &nbsp;
                            <input type="button"  value="Multiply" onClick={Multiplication}/>
                            &nbsp;
                            <input type="button"  value="Divide" onClick={Division}/>
                            
                            </td>
                    </tr>

                </tbody>
            </table>
            <h2>{result}</h2>
        </div>
    )
}