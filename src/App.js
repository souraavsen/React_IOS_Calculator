import "./index.css";
import Button from "./Component/Button";
import { useState } from "react";

function App() {

  const [number, setNumber] = useState("0");
  const [storage, setStorage] = useState(null);
  const [operator, setOperator] = useState(null);
  const [res, setRes] = useState("0");
  const [resflag, setResflag] = useState("0");

  const onclick = (name) => {
    const clickedButton = parseFloat(number);

    if (name === "AC") {
      setNumber("0");
      setOperator(null);
      setStorage(null);
      setRes("0");
      return;
    }

    if (name === "±") {
      if (number === "0" && res === "0") {
        setNumber("0");
        return;
      }
      if (number > 0) {
        setNumber(number * -1);
        return;
      } else {
        setStorage(parseFloat(storage) * -1);
        setRes(parseFloat(storage) * -1);
        setNumber("0");
        return;
      }
    }

    if (name === "%") {
      if (resflag === "1") {

        setStorage(storage / 100);
        setRes(storage / 100);
        return;
      }
      else if (operator !== null && number === "0") {
        setRes("Bad Expression");
        setNumber("0");
        return;
      }
      else if (number !== 0) {
        setNumber(number / 100);
        setRes(number / 100);
        return;
      }
    }

    if (name === "<-") {
      if (number !== "0") {
        const a = number.toString().slice(0, number.toString().length - 1);
        if (a === "") {
          setNumber("0");
        }
        else {
          setNumber(a);
        }
        return;
      }
      else {
        setNumber("0");
        setRes("0");
        setStorage(null);
        setOperator(null);
      }
    }

    if (name === "+") {
      if (operator === null) {
        if (number === "0") {
          setNumber("0");
          return;
        }
        else {
         
          setStorage(parseFloat(number));
          setRes(number);
        }
      }
      else {
        if (operator === "+") {
          setStorage(storage + parseFloat(number));
          setRes(storage + parseFloat(number));
        }
        else if (operator === "-") {
          setStorage(storage - parseFloat(number));
          setRes(storage - parseFloat(number));
        }
        else if (operator === "x") {
          if (number !== "0") {
            setStorage(storage * parseFloat(number));
            setRes(storage * parseFloat(number));
          }
        }
        else if (operator === "÷") {
          if (parseFloat(number) === 0) {
            setStorage(storage);
            setRes(storage);
          }
          else {
            setStorage(storage / parseFloat(number));
            setRes(storage / parseFloat(number));
          }
        }
      }

      setOperator("+");
      setNumber("0");
      setResflag("0");
      return;
    }

    if (name === "-") {
      if (operator === null) {
        if (number === "0") {
          setNumber("0");
          return;
        } else {
          setStorage(parseFloat(number));
          setRes(number);
        }
      }
      else {
        if (operator === "+") {
          setStorage(storage + parseFloat(number));
          setRes(storage + parseFloat(number));
        }
        else if (operator === "-") {
          setStorage(storage - parseFloat(number));
          setRes(storage - parseFloat(number));
        }
        else if (operator === "x") {
          if (number !== "0") {
            setStorage(storage * parseFloat(number));
            setRes(storage * parseFloat(number));
          }
        }
        else if (operator === "÷") {
          if (parseFloat(number) === 0) {
            setStorage(storage);
            setRes(storage);
          }
          else {
            setStorage(storage / parseFloat(number));
            setRes(storage / parseFloat(number));
          }
        }
      }

      setOperator("-");
      setNumber("0");
      setResflag("0");
      return;
    }

    if (name === "x") {
      if (operator === null) {
        if (number === "0") {
          setNumber("0");
          return;
        }
        else {
          setStorage(parseFloat(number));
          setRes(number);
        }
      }
      else {
        if (operator === "+") {
          setStorage(storage + parseFloat(number));
          setRes(storage + parseFloat(number));
        }
        else if (operator === "-") {
          setStorage(storage - parseFloat(number));
          setRes(storage - parseFloat(number));
        }
        else if (operator === "x") {
          if (number !== "0") {
            setStorage(storage * parseFloat(number));
            setRes(storage * parseFloat(number));
          }
        }
        else if (operator === "÷") {
          if (parseFloat(number) === 0) {
            setStorage(storage);
            setRes(storage);
          }
          else {
            setStorage(storage / parseFloat(number));
            setRes(storage / parseFloat(number));
          }
        }
      }

      setOperator("x");
      setNumber("0");
      setResflag("0");
      return;
    }

    if (name === "÷") {
      if (operator === null) {
        if (number === "0") {
          setNumber("0");
          return;
        }
        else {
          setStorage(parseFloat(number));
          setRes(number);
        }
      }
      else {
        if (operator === "÷") {
          setStorage(storage / parseFloat(number));
          setRes(storage / parseFloat(number));
        }
        if (operator === "+") {
          setStorage(storage + parseFloat(number));
          setRes(storage + parseFloat(number));
        }
        else if (operator === "-") {
          setStorage(storage - parseFloat(number));
          setRes(storage - parseFloat(number));
        }
        else if (operator === "x") {
          if (number !== "0") {
            setStorage(storage * parseFloat(number));
            setRes(storage * parseFloat(number));
          }
        }
        else if (operator === "÷") {
          if (parseFloat(number) === 0) {
            setStorage(storage);
            setRes(storage);
          }
          else {
            setStorage(storage / parseFloat(number));
            setRes(storage / parseFloat(number));
          }
        }
      }

      setOperator("÷");
      setNumber("0");
      setResflag("0");
      return;
    }

    if (name === "=") {
      if (number[number.toString().length - 1] === ".") {
        setRes("Bad Expression");
        setNumber("Bad Expression");
        return;
      }
      if (operator === null) {
        setStorage(number);
        // setRes(number);
        // setStorage(number);
        return;
      }
      if (operator === "+") {
        if (number === "0" && resflag === "0") {
          setRes("Bad Expression");
          return;
        }
        else {
          // setNumber(storage + parseFloat(number));
          setStorage(storage + parseFloat(number));
          setRes(storage + parseFloat(number));
        }
      }
      else if (operator === "-") {
        if (number === "0" && resflag === "0") {
          setRes("Bad Expression");
          return;
        }
        else {
          // setNumber(storage - parseFloat(number));
          setStorage(storage - parseFloat(number));
          setRes(storage - parseFloat(number));
        }
      }
      else if (operator === "x") {
        if (number === "0" && resflag === "0") {
          setRes("Bad Expression");
          return;
        }
        else {
          // setNumber(storage * parseFloat(number));
          setStorage(storage * parseFloat(number));
          setRes(storage * parseFloat(number));
        }
      }
      else if (operator === "÷") {
        if (number === "0" && resflag === "0") {
          setRes("Bad Expression");
        }
        else {
          if (parseFloat(number) === 0) {
            setStorage(storage);
            setNumber(storage);
            setRes(storage);
          }
          else {
            setStorage(storage / parseFloat(number));
            // setNumber(storage / parseFloat(number));
            setRes(storage / parseFloat(number));
          }
        }
      }
     
      setNumber("0");
      setResflag("1");
      return;
    }


    setRes("0");

    if (name === ".") {
      if (number.toString().includes(".") === true) {
        return;
      }
      else {
        setNumber(number + ".");
      }
      return;
    }

    if (number[number.toString().length - 1] === ".") {
      setNumber((number + parseFloat(name)).toString());
    }
    else {
      if (name === "0") {
        if (number[1] !== ".") {
          if (number[0] === "0") {
            setNumber("0");
          }
          else {
            setNumber((number + name).toString());
          }
        }
        else {
          setNumber((number + name).toString());
        }
      }
      else {
        setNumber(parseFloat(number + name));
      }
    }

    if (resflag === "1" && name !== "%") {
      if (parseFloat(number) % 2 === 0 || parseFloat(number) % 2 === 1) {
        setOperator(null);
        setResflag("0");
        setStorage(null);
      }
    }
  };

  return (
    <div className='App'>
      {/* <div className='screen'>{res}</div> */}
      <div className='screen'>{number === "0" ? res : number}</div>
      <div className='buttons'>
        <Button onclick={onclick} name='AC' />
        <Button onclick={onclick} name='<-' />
        <Button onclick={onclick} name='±' />
        <Button onclick={onclick} name='+' />
        <Button onclick={onclick} name='7' />
        <Button onclick={onclick} name='8' />
        <Button onclick={onclick} name='9' />
        <Button onclick={onclick} name='-' />
        <Button onclick={onclick} name='4' />
        <Button onclick={onclick} name='5' />
        <Button onclick={onclick} name='6' />
        <Button onclick={onclick} name='x' />
        <Button onclick={onclick} name='1' />
        <Button onclick={onclick} name='2' />
        <Button onclick={onclick} name='3' />
        <Button onclick={onclick} name='÷' />
        <Button onclick={onclick} name='0' />
        <Button onclick={onclick} name='.' />
        <Button onclick={onclick} name='%' />
        <Button onclick={onclick} name='=' />
      </div>
    </div>
  );
}

export default App;