import React, { useState, useEffect } from 'react';
import ReactCountdownClock from 'react-countdown-clock';
import { Button } from 'react-bootstrap';
const Quiz = (props) => {


    const [final, setFinal] = useState(false);
    const [right, setRight] = useState(0);
    const [wrong, setWrong] = useState(0);

    useEffect(

        () => {
            if (final === false) {
                return final;
            }
            else {
                let rCount = 0;
                let wCount = 0;
                props.selected.map(elem => {

                    if (elem.result) {
                        rCount++;
                    }
                    else {
                        wCount++;
                    }
                    return elem;
                });
                setRight(rCount);
                setWrong(wCount);

                //console.log(wrong,right);
            }
        }

        , [final])
    const select = (id, given, correct) => {

        props.selected.map((arrEl, ind) => {
            if (ind === id) {
                arrEl.selected = given;
                if (given === correct) {
                    arrEl.result = true;
                }
                else {
                    arrEl.result = false;
                }
            }
            return arrEl;
        })

    };


    return (
        <div>
            <>
                <div>
                <ReactCountdownClock seconds={20}
                     color="#000"
                     alpha={0.9}
                     size={300}
                     onComplete={() => setFinal(true)} />
                </div>
                <div>
                    {props.selected.map((elem, index) => (
                        <div>
                            <h2>{elem.question}</h2>
                            <span className="border">
                                <div>
                                    <div>
                                        <Button variant="outline-success" onClick={() => select(index, elem.choices[0], elem.correct_answer)} >{elem.choices[0]}</Button>
                                        <Button variant="outline-success" onClick={() => select(index, elem.choices[1], elem.correct_answer)}>{elem.choices[1]}</Button>
                                    </div>
                                    <div>
                                        <Button variant="outline-success" onClick={() => select(index, elem.choices[2], elem.correct_answer)}>{elem.choices[2]}</Button>
                                        <Button variant="outline-success" onClick={() => select(index, elem.choices[3], elem.correct_answer)}>{elem.choices[3]}</Button>
                                    </div>
                                </div>
                            </span>
                        </div>
                    ))
                    }
                </div>
                <div>
                    <Button variant="primary" onClick={() => setFinal(true)} >Submit</Button>
                </div>

                <div>
                    <h3>Right Answers: {right}</h3>
                    <h3>Wrong Answers: {wrong}</h3>
                </div>

            </>




        </div>
    )
}

export default Quiz
