import React, { useState, useEffect } from 'react';
import firebaseDb from '../../Firebase';
import { Spinner, span, Button } from 'react-bootstrap';
import Quiz from './Quiz';

const Computer = () => {

  const [diff, setDiff] = useState("");
  const [ques, setQues] = useState({});
  const [loading, setLoading] = useState(true);
  const [easy, setEasy] = useState([])
  const [medium, setMedium] = useState([])
  const [hard, setHard] = useState([]);
  const [selected, setSelected] = useState([]);



  const getRandom = (arr, n) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  useEffect(() => {

    const alldata = () => {
      if (ques.hasOwnProperty("Easy")) {

        var easyArr = [...ques["Easy"]];
        easyArr.map(arrElem => {
          arrElem.choices = [arrElem.correct_answer, ...arrElem.incorrect_answers]
          arrElem.selected = "";
          getRandom(arrElem.choices);
          return arrElem
        })

        var medArr = [...ques["Medium"]];
        medArr.map(arrElem => {
          arrElem.choices = [arrElem.correct_answer, ...arrElem.incorrect_answers]
          arrElem.selected = "";
          getRandom(arrElem.choices);
          return arrElem
        })

        var hardArr = [...ques["Hard"]];
        hardArr.map(arrElem => {
          arrElem.choices = [arrElem.correct_answer, ...arrElem.incorrect_answers]
          arrElem.selected = "";
          getRandom(arrElem.choices);
          return arrElem
        })

        //console.log(easyArr,"arreas");
        setEasy([...easyArr]);
        setMedium([...medArr]);
        setHard([...hardArr]);

      }
      else {
        console.log("loading")
      }

    }
    alldata();

  }, [ques])


  useEffect(() => {

    if (diff !== "" && easy.length !== 0 && medium.length !== 0 && hard.length !== 0) {

      if (diff === "Easy") {
        setSelected([...easy]);
        //console.log(easy);

      }
      else if (diff === "Medium") {
        setSelected([...medium]);
        //console.log(medium);
      }
      else {
        setSelected([...hard]);
        //console.log(hard);
      }
    }
    else {
      console.log("Data not loaded");
    }


  }, [diff])

  useEffect(
    () => {

      const difficulty = async () => {

        await firebaseDb.child("Type").child("Computer").once('value').then((snapshot) => {
          if (snapshot.exists()) {
            setQues(snapshot.val());
            setLoading(false);
          }
          else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

        console.log(ques);
      }
      difficulty();
    }
    , [])


  return loading ? (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
    :
    (
      <>
        <div>
          <button onClick={() => { setDiff("Easy") }}  >Easy</button>
          <button onClick={() => { setDiff("Medium") }}>Medium</button>
          <button onClick={() => { setDiff("Hard") }}>Hard</button>
        </div>

        <div>
          {selected.length === 0 ?
            <>
            </>
            : <Quiz
              selected={selected}


            />
          }
        </div>

      </>


    )






}

export default Computer

